import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const tour = await prisma.tour.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    return res.status(200).json(tour);
  } catch (error) {
    console.error('Error fetching tour details:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
