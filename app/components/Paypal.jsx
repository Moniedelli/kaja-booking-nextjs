// PaypalCheckoutButton.js
'use client'

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const PaypalButton = (props) => {
  const { service } = props;
  const [error, setError] = useState('');
  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  }

  if (paidFor) {
    alert("Thank you for your payment");
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalButtons
      style={{
        color: "silver",
        shape: "pill",
        layout: "horizontal",
        height: 40,
        tagline: false
      }}

      onClick={(data, actions) => {
        const hasAlreadyBoughtCourse = false;

        if (hasAlreadyBoughtCourse) {
          setError("You have already purchased this");
        }
      }}

      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: service.description,
              amount: {
                value: service.price
              }
            }
          ]
        });
      }}

      onApprove={async (data, actions) => {
        const order = await actions.order.capture(); 
        console.log("order", order);
      
        handleApprove(data.orderID);
      }}

      onCancel={() => {}}

      onError={(err) => {
        setError(err);
        console.log("Paypal failed", err);
      }}
    />
  );
};

export default PaypalButton;
