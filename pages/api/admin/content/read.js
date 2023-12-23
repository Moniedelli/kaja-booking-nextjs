import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const places = await prisma.tour.findMany();
      res.json(places);
    } catch (error) {
      console.error('Error fetching places:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
