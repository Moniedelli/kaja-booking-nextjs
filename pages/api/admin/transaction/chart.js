import prisma from '@/app/libs/prismadb';
import { Prisma } from '@prisma/client';

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const sevenMonthsAgo = new Date();
    sevenMonthsAgo.setMonth(sevenMonthsAgo.getMonth() - 7);

    const transactionData = await prisma.transaction.findMany({
      select: {
        quantity: true,
        booking_date: true,
        status: true,
        total: true,
      },
      where: {
        booking_date: {
          gte: sevenMonthsAgo,
        },
      },
    });

    const monthlyTotal = transactionData.reduce((acc, transaction) => {
      const month = new Date(transaction.booking_date).getMonth() + 1;
      acc[month] = (acc[month] || 0) + transaction.total;
      return acc;
    }, {});

    const result = Object.entries(monthlyTotal).map(([month, total]) => ({
      month: parseInt(month),
      total,
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching transaction data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
