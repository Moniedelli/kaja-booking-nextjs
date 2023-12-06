import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const MidtransPayment = ({ tour }) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState("")

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const { id, tourName, price } = tour;

  const checkout = async () => {
    try {
      const data = {
        id: id,
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
      window.snap.pay(requestData.token);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const generatePaymentLink = async () => {
    const secret = process.env.NEXT_PUBLIC_SECRET_MIDTRANS
    const encodedSecret = Buffer.from(secret).toString('base64')
    const basicAuth = `Basic ${encodedSecret}`

    const toRupiah = price * 100;

    let data = {
      item_details: [
        {
          id: id,
          name: tourName,
          price: toRupiah,
          quantity: quantity,
        }
      ],
      transaction_details: {
        order_id: id,
        gross_amount: toRupiah * quantity,
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
  };

  return (
    <>
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
            className="h-10 w-16 text-black border-transparent text-center"
            onChange={quantity}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            ➕
          </button>
        </div>
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
        <Link href={paymentUrl} target="_blank">{paymentUrl}</Link>
      </div>
    </>
  );
};

export default MidtransPayment;