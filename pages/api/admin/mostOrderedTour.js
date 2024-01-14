// pages/api/mostOrderedTour.js
import prisma from '@/app/libs/prismadb';
import axios from 'axios';
import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  try {
    const result = await prisma.$queryRaw`
      SELECT tourId, COUNT(*) as orderCount
      FROM transactions
      GROUP BY tourId
      ORDER BY orderCount DESC
      LIMIT 1
    `;

    const mostOrderedTourId = result[0].tourId;

    const { data: mostOrderedTourDetails } = await axios.get(`/api/tours/${mostOrderedTourId}`);

    res.json({ mostOrderedTour: mostOrderedTourDetails });
  } catch (error) {
    console.error('Error fetching most ordered tour:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default handler;
