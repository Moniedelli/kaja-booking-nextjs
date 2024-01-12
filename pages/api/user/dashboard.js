// pages/api/transactions.js
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const userTransactions = await prisma.transaction.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        tours: true,
      },
    });

    res.status(200).json(userTransactions);
  } catch (error) {
    console.error('Error fetching user transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
