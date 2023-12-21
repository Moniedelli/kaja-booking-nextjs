import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const { method, query } = req;
  const { tourId } = query;

  switch (method) {
    case 'GET':
      try {
        const tour = await prisma.tour.findUnique({
          where: { id: parseInt(tourId) },
        });
        res.status(200).json(tour);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching tour data' });
      }
      break;
    case 'PUT':
      try {
        const updatedTour = await prisma.tour.update({
          where: { id: parseInt(tourId) },
          data: req.body,
        });
        res.status(200).json(updatedTour);
      } catch (error) {
        res.status(500).json({ error: 'Error updating tour data' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
