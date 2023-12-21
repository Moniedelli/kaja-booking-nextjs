import Midtrans from 'midtrans-client';

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET_MIDTRANS,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_MIDTRANS,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { id, tourName, price, quantity, payment_method } = req.body;

      let parameter = {
        item_details: {
          name: tourName,
          price: price,
          quantity: quantity,
        },
        transaction_details: {
          order_id: id,
          gross_amount: price * quantity,
        },
        credit_card: {
          bank: payment_method,
        }
      };

      const token = await snap.createTransactionToken(parameter);
      console.log(token);
      
      // Send the JSON response using the 'res' object
      res.status(200).json({ token, id });
    } catch (error) {
      console.error('Error during transaction token generation:', error);
      
      // Send an error response using the 'res' object
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
