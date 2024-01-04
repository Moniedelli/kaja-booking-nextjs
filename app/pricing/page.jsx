// PricingPage.tsx
'use client';

import React from 'react';
import PaymentForm from '../components/Payment';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PricingPage = () => {
  return (
    <PayPalScriptProvider options={{ clientId: 'AfHzIdsfCzkC02uWKXhKgUmiKVw9c9YyesviSg7MHPYGihwKO6jd-WhMVsAkkkoX5oVZVtQvgtnqW9C1' }}>
      <div className="flex flex-col justify-start max-w-screen-xl mx-auto pt-20">
        <PaymentForm />
      </div>
    </PayPalScriptProvider>
  );
}

export default PricingPage;
