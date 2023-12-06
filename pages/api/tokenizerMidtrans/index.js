import Midtrans from 'midtrans-client';
import { NextResponse } from 'next/server';

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET_MIDTRANS,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_MIDTRANS,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { id, tourName, price, quantity } = req.body;

      const toRupiah = price * 100;

      let parameter = {
        item_details: {
          name: tourName,
          price: toRupiah,
          quantity: quantity,
        },
        transaction_details: {
          order_id: id,
          gross_amount: toRupiah * quantity,
        },
      };

      const token = await snap.createTransactionToken(parameter);
      console.log(token);
      
      // Send the JSON response using the 'res' object
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error during transaction token generation:', error);
      
      // Send an error response using the 'res' object
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
