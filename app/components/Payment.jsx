// components/PaymentForm.js
'use client'

import React, { useState } from 'react';
import PaypalButton from './Paypal';
import Image from 'next/image';
import Link from 'next/link';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    amount: 0,
  });
  const [selectedDate, setSelectedDate] = useState(null);

  const service = {
    description: "Design+Code",
    price: String(19)
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (event) => {
    // Update the selected date when the user picks a date
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <main className="text-gray-300">
        <div className="mx-20 mt-10">
          <div className="card lg:card-side shadow-xl glass">
            <figure><Image src="/images/pexels-dimitri-dim-1802183.jpg" width={650} height={650} className="-ml-10" alt="Album"/></figure>
            <div>
              <div className="card-body">
              Liat DOC Paypal buat ngasi date nya
                <h2 className="card-title">Kaja Contoh</h2>
                <p>$ 120200 contoh</p>
                <div className="mt-4">
                  <label htmlFor="datepicker" className="block text-sm font-medium text-gray-300">
                    Select date for booking tour
                  </label>
                  <input
                    type="date"
                    id="datepicker"
                    name="datepicker"
                    onChange={handleDateChange}
                    className="mt-1 p-2 mb-4 bg-transparent rounded-md"
                  />
                </div>
                <form className="max-w-lg mx-auto">
                  <div className="mb-4">
                    <label htmlFor="amount" className="block -ml-2 text-sm font-medium text-gray-300">
                      Amount 
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      className="mt-1 -mr-12 -ml-2 p-2 w-full border border-gray-500 bg-transparent rounded-md"
                    />
                  </div>
                </form>
                {selectedDate && (
                  <p className="mt-1.5 text-sm text-gray-100">
                    Booking Date: {selectedDate}
                  </p>
                )}
                {/* Additional fields for paymentDate, status, and bookingId */}
                {/* Replace the input types and labels based on your data types and naming conventions */}
                <PaypalButton service={service} selectedDate={selectedDate} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaymentForm;
