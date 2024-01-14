import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { id, total, status = 'PENDING_PAYMENT',quantity, payment_method,booking_date, userId, tourId } = req.body;

      // Pengecekan apakah userId ada
      if (!userId) {
        return res.status(400).json({ error: 'Silahkan login dulu' });
      }
      
      const newTransaction = await prisma.transaction.create({
        data: {
          id,
          total,
          status,
          quantity,
          payment_method,
          booking_date,
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
