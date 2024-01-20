// pages/api/mostOrderedTour.js
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Retrieve the tour with the most bookings and filter by PAID transactions
    const tours = await prisma.tour.findMany({
      include: {
        transactions: {
          where: {
            status: 'PAID',
          },
        },
      },
    });

    // Sort tours based on the number of PAID transactions in descending order
    tours.sort((a, b) => {
      const paidBookingCountA = a.transactions.filter(transaction => transaction.status === 'PAID').length;
      const paidBookingCountB = b.transactions.filter(transaction => transaction.status === 'PAID').length;

      return paidBookingCountB - paidBookingCountA;
    });

    // Get the tour with the most PAID transactions (first element after sorting)
    const topTwoTours = tours.slice(0, 2);


    res.status(200).json({ topTwoTours });
  } catch (error) {
    console.error('Error fetching most ordered tour:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
