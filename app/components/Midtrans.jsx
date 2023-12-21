import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { numberToRupiah } from "@/utils/toRupiah";

const MidtransPayment = ({ tour, selectedDate }) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState("");
  const [retrievedTransactionId, setRetrievedTransactionId] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : 1)); // Ensure quantity doesn't go below 1
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const { tourName, price } = tour;

  const toRupiah = numberToRupiah(price);

  const createTransaction = async () => {
    try {
      const bookingDate = new Date(selectedDate).toISOString();

      const data = {
        total: toRupiah * quantity,
        status: 'PENDING_PAYMENT',
        payment_method: "MIDTRANS",
        booking_date: bookingDate,
        quantity,
        userId: 2, // Replace with the actual user ID
        tourId: tour.id, // Assuming your tour object has an 'id' property
      };

      const response = await axios.post('/api/transaction/create', data);

      if (response.status === 201) {
        console.log('Transaction created successfully:', response.data);
        const createdTransactionId = response.data.id;
        setRetrievedTransactionId(createdTransactionId); // Set the retrieved transactionId
        // Continue with other logic or state updates as needed
        setTotalPrice(toRupiah * quantity); 
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
        price: toRupiah,
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
  
      // Menyimpan token ke database dengan menggunakan ID transaksi
      await saveTokenToDatabase(requestData.token, retrievedTransactionId);

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
  
  // Fungsi untuk menyimpan token ke database dengan menggunakan ID transaksi
  const saveTokenToDatabase = async (token, id) => {
    try {
      // Menggunakan Axios atau fetch untuk mengirim token dan ID transaksi ke API penyimpanan di server
      const response = await axios.post('/api/tokenizerMidtrans/saveTokenToDB', { token, id });
  
      if (response.status === 200) {
        console.log('Token saved successfully:', response.data);
        // Anda dapat menangani berhasil menyimpan token ke database di sini
      } else {
        console.error('Failed to save token to database. Server response:', response.data);
        // Anda dapat menangani kegagalan penyimpanan token ke database di sini
      }
    } catch (error) {
      console.error('Error saving token to database:', error);
      // Anda dapat menangani error penyimpanan token ke database di sini
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
      <div className="flex items-center justify-between">
        <div className="flex sm:gap-4">
          <button
            className="transition-all hover:opacity-75"
            onClick={decreaseQuantity}
          >
            ➖
          </button>

          <input
            type="number"
            id="quantity"
            value={quantity}
            className="h-10 w-16 text-white border-transparent bg-black text-center"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            ➕
          </button>
        </div>
        <button
          className="rounded bg-indigo-700 p-4 text-sm font-medium transition hover:scale-105"
          onClick={createTransaction}
        >
          Confirm
        </button>
        <button
          className="rounded bg-indigo-500 p-4 text-sm font-medium transition hover:scale-105"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
      <button
        className="text-indigo-500 py-4 text-sm font-medium transition hover:scale-105"
        onClick={generatePaymentLink}
      >
        Create Payment Link
      </button>
      <div className="text-black underline">
        {paymentUrl && <Link href={paymentUrl} target="_blank">{paymentUrl}</Link>}
      </div>
    </>
  );
};

export default MidtransPayment;
