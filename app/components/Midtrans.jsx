import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { numberToRupiah } from "@/utils/toRupiah";
import { useSession } from "next-auth/react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const MidtransPayment = ({ tour, selectedDate }) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState("");
  const [retrievedTransactionId, setRetrievedTransactionId] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { data: session } = useSession();

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : 1)); // Ensure quantity doesn't go below 1
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const { tourName, price } = tour;

  const createTransaction = async () => {
    try {
      const bookingDate = new Date(selectedDate).toISOString();

      const data = {
        total: price * quantity,
        status: 'PENDING_PAYMENT',
        payment_method: "BCA VA",
        booking_date: bookingDate,
        quantity,
        userId: session?.user?.id, // Replace with the actual user ID
        tourId: tour.id, // Assuming your tour object has an 'id' property
      };

      const response = await axios.post('/api/transaction/create', data);

      if (response.status === 201) {
        console.log('Transaction created successfully:', response.data);
        const createdTransactionId = response.data.id;
        setRetrievedTransactionId(createdTransactionId); // Set the retrieved transactionId
        // Continue with other logic or state updates as needed
        setTotalPrice(price * quantity); 
        setIsConfirmed(true);
      } else {
        console.error('Failed to create transaction. Server response:', response.data);
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
      // Handle the error here
    }
  };

  const checkout = async () => {
    try {
      if (!retrievedTransactionId) {
        console.error('TransactionId is not available.');
        return;
      }
  
      const data = {
        id: retrievedTransactionId,
        tourName: tourName,
        price: price,
        quantity: quantity,
      };
  
      const response = await fetch("/api/tokenizerMidtrans", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const requestData = await response.json();

      // Melakukan pembayaran menggunakan Snap
      window.snap.pay(requestData.token);

      if (requestData.transactions_status === 'success') {
        // If payment is successful, update the transaction status
        await updateTransactionStatus(retrievedTransactionId, requestData.transaction_status, requestData.charge_type);
        console.log('Transaction status updated successfully after successful payment');
      } else {
        console.error('Payment was not successful');
        // Handle the case where payment was not successful
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  // Contoh menggunakan fetch untuk memperbarui data transaksi
  const updateTransactionStatus = async (id, transaction_status, charge_type) => {
    try {
      const response = await fetch('/api/transaction/updateStatusTransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transaction_status, charge_type, id }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
};

  const generatePaymentLink = async () => {
    try {
      const secret = process.env.NEXT_PUBLIC_SECRET_MIDTRANS
      const encodedSecret = Buffer.from(secret).toString('base64')
      const basicAuth = `Basic ${encodedSecret}`

      let data = {
        item_details: [
          {
            id: retrievedTransactionId,
            name: tourName,
            price: price,
            quantity: quantity,
          }
        ],
        transaction_details: {
          order_id: retrievedTransactionId, // Use retrieved transactionId
          gross_amount: price * quantity,
        }
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_MIDTRANS}/v1/payment-links`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": basicAuth
        },
        body: JSON.stringify(data)
      })

      const paymentLink = await response.json();
      setPaymentUrl(paymentLink.payment_url);
    } catch (error) {
      console.error("Error during generating payment link:", error);
    }
  };

  return (
    <>
      <div>
        Total Price: {totalPrice}
      </div>
      <div className="flex items-center gap-3 justify-between">
        <div className="flex sm:gap-4">
          <button
            className="transition-all hover:opacity-75"
            onClick={decreaseQuantity}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <input
            type="number"
            id="quantity"
            value={quantity}
            className="h-10 w-16 text-gray-300 border-gray-500 bg-transparent rounded-full text-center"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
          <button className="btn bg-transparent hover:bg-transparent border-transparent" onClick={createTransaction}>Confirm</button>
        </div>
      </div>
      <div className="flex mt-2 gap-3">
      {isConfirmed && ( // Show "Pay" button only if isConfirmed is true
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md glass bg-black" onClick={checkout}>
          Pay
        </button>
      )}
      {/* <Link href={`/pricing`}>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md glass bg-amber-300 text-gray-950 font-semibold hover:text-amber-300 italic">PayPal</button>        
        </Link> */}
      </div>
      {/* <button
        className="flex justify-start text-gray-400 py-4 text-sm transition hover:scale-105"
        onClick={generatePaymentLink}
      >
        Create Payment Link
      </button> */}
      <div className="text-black underline">
        {paymentUrl && <Link href={paymentUrl} target="_blank">{paymentUrl}</Link>}
      </div>
    </>
  );
};

export default MidtransPayment;
