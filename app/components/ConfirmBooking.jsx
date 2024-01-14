'use client'

import axios from "axios";
import React, { useState, useEffect } from "react";  // Import useEffect
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const ConfirmBooking = ({ tour, selectedDate }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [retrievedTransactionId, setRetrievedTransactionId] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : 1));
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity((prevState) => prevState + 1);
    } else {
      alert("Maximum quantity reached (10)");
    }
  };

  const { tourName, price } = tour;

  const calculateTotalPrice = () => {
    setTotalPrice(price * quantity);
  };

  useEffect(() => {
    calculateTotalPrice();  // Initial calculation
  }, [quantity, price]);  // Recalculate when quantity or price changes


  const createTransaction = async () => {
    try {
      const bookingDate = new Date(selectedDate).toISOString();

      const data = {
        total: price * quantity,
        status: 'PENDING_PAYMENT',
        booking_date: bookingDate,
        quantity,
        userId: session?.user?.id,
        tourId: tour.id,
      };

      const response = await axios.post('/api/transaction/create', data);

      if (response.status === 201) {
        console.log('Transaction created successfully:', response.data);
        const createdTransactionId = response.data.id;
        setRetrievedTransactionId(createdTransactionId);
        router.push('/success-booking');
      } else {
        console.error('Failed to create transaction. Server response:', response.data);
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <div className="mt-4">
      <div className="text-sm">
        Total: Rp {formatPrice(totalPrice)}
      </div>
      <div className="flex items-center gap-3 justify-between pt-1">
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
        </div>
      </div>
      <button className="orange mt-5 px-32 py-3 text-lg font-semibold rounded-xl -ml-44" onClick={createTransaction}>Booking</button>
    </div>
  );
};

export default ConfirmBooking;
