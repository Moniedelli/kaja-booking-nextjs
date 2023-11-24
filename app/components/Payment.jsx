// components/PaymentForm.js
'use client'

import React, { useState } from 'react';
import PaypalButton from './Paypal';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    amount: 0,
  });

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

  return (
    <form className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      {/* Additional fields for paymentDate, status, and bookingId */}
      {/* Replace the input types and labels based on your data types and naming conventions */}
      <div> 
        <PaypalButton service={service} />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Submit
      </button>
    </form>
  );
};

export default PaymentForm;
