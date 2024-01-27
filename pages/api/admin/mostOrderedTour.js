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

    // Calculate the total quantity of paid bookings for each tour
    tours.forEach((tour) => {
      tour.totalPaidBookings = tour.transactions.filter(transaction => transaction.status === 'PAID').length;
    });

    // Sort tours based on the total quantity of PAID transactions in descending order
    tours.sort((a, b) => b.totalPaidBookings - a.totalPaidBookings);

    // Get the top 5 tours with the most PAID transactions
    const topFiveTours = tours.slice(0, 5);

    res.status(200).json({ topFiveTours });
  } catch (error) {
    console.error('Error fetching most ordered tours:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
