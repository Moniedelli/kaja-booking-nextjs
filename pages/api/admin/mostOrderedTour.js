// pages/api/mostOrderedTour.js
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Retrieve the tour with the most bookings
    const tours = await prisma.tour.findMany({
      include: {
        transactions: true,
      },
    });

    // Find the tour with the maximum transaction count
    const mostOrderedTour = tours.reduce((maxTour, currentTour) => {
      const bookingCount = currentTour.transactions.length;
      if (bookingCount > (maxTour.transactions?.length || 0)) {
        return { ...currentTour, transactions: undefined }; // Omit transactions to avoid circular structure
      }
      return maxTour;
    }, {});

    res.status(200).json({ mostOrderedTour });
  } catch (error) {
    console.error('Error fetching most ordered tour:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
