import { getSession } from 'next-auth/react';
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.body;

  try {
    await prisma.tour.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (error) {
    console.error('Error deleting tour:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
