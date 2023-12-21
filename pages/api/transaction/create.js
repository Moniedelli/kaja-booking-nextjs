import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { total, status = 'PENDING_PAYMENT',quantity, payment_method,booking_date, snap_token = null, snap_redirect_url = null, userId, tourId } = req.body;

      // Pengecekan apakah userId ada
      if (!userId) {
        return res.status(400).json({ error: 'Silahkan login dulu' });
      }

      const id = Math.floor(10000 + Math.random() * 90000);

      const newTransaction = await prisma.transaction.create({
        data: {
          id,
          total,
          status,
          quantity,
          payment_method,
          booking_date,
          snap_token,
          snap_redirect_url,
          userId,
          tourId,
        },
        include: {
          user: true,
        },
      });

      res.status(201).json(newTransaction);
    } catch (error) {
      console.error('Error creating transaction:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
