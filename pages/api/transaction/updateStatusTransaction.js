// pages/api/midtrans-callback.js
import prisma from '@/app/libs/prismadb';
import crypto from crypto;

const updateStatusHash = async (orderId, midtransResponse) => {
  const hash = crypto.createHash('sha512').update(`${orderId}${midtransResponse.transactionStatus}${midtransResponse.chargeType}${process.env.NEXT_PUBLIC_SECRET_MIDTRANS}`).digest('hex');
  if(midtransResponse.signature_key !== hash){
    return res.status(400).json({message: "invalid signature key"})
  }
  
  if (transactionStatus == 'capture') {
    const transaction = await updateTransactionStatus.updateStatusHash({id, status: 'PAID', payment_method: midtransResponse.chargeType});
    return transaction;
  } else if (transactionStatus == 'settlement') {
    const transaction = await updateTransactionStatus.updateStatusHash({id, status: 'PAID', payment_method: midtransResponse.chargeType});
    return transaction;
  } else if (transactionStatus == 'cencel') {
    const transaction = await updateTransactionStatus.updateStatusHash({id, status: 'CANCELED'});
    return transaction;
  } else if (transactionStatus == 'pending') {
    const transaction = await updateTransactionStatus.updateStatusHash({id, status: 'PENDING_PAYMENT'});
    return transaction;
  }

  return { status: 'success', data: res}
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const midtransResponse = req.body;

      const orderId = midtransResponse.order_id;
      const transactionStatus = midtransResponse.transaction_status;
      const chargeType = midtransResponse.charge_type;

      await updateStatusHash(orderId, transactionStatus, chargeType);

      res.status(200).json({ status: 'OK' });
    } catch (error) {
      console.error('Error handling Midtrans callback:', error);
      res.status(500).json({ status: 'Error', message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// Fungsi untuk memperbarui status transaksi di database
const updateTransactionStatus = async (orderId, transactionStatus, chargeType) => {
  try {
    const existingTransaction = await prisma.transaction.findUnique({
      where: {
        id: orderId, // Sesuaikan dengan pola ID yang digunakan
      },
    });

    if (existingTransaction) {
      await prisma.transaction.update({
        where: {
          id: orderId,
        },
        data: {
          status: transactionStatus,
          payment_method: chargeType,
        },
      });
    }
  } catch (error) {
    console.error('Error updating transaction:', error);
  }
}
