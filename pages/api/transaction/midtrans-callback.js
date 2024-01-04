// pages/api/midtrans-callback.js
import prisma from '@/app/libs/prismadb';
import crypto from 'crypto';

const updateTransactionStatus = async (orderId, transactionStatus, chargeType) => {
  try {
    const existingTransaction = await prisma.transaction.findUnique({
      where: {
        id: orderId,
      },
    });

    if (existingTransaction) {
      let newStatus;

      if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
        newStatus = 'PAID';
      } else if (transactionStatus === 'cancel') {
        newStatus = 'CANCELED';
      } else if (transactionStatus === 'pending') {
        newStatus = 'PENDING_PAYMENT';
      } else {
        // Handle other transactionStatus values if needed
        newStatus = 'OTHER_STATUS';
      }

      await prisma.transaction.update({
        where: {
          id: orderId,
        },
        data: {
          status: newStatus,
          payment_method: chargeType,
        },
      });
    }
  } catch (error) {
    console.error('Error updating transaction:', error);
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const midtransResponse = req.body;

      const orderId = midtransResponse.order_id;
      const transactionStatus = midtransResponse.transaction_status;
      const chargeType = midtransResponse.payment_type;

      const hash = crypto.createHash('sha512').update(`${orderId}${transactionStatus}${chargeType}${process.env.NEXT_PUBLIC_SECRET_MIDTRANS}`).digest('hex');

      if (midtransResponse.signature_key !== hash) {
        return res.status(400).json({ message: 'invalid signature key' });
      }

      await updateTransactionStatus(orderId, transactionStatus, chargeType);

      res.status(200).json({ status: 'OK' });
    } catch (error) {
      console.error('Error handling Midtrans callback:', error);
      res.status(500).json({ status: 'Error', message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
