import { getSession } from 'next-auth/react';
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userId = session.user.id;

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: parseInt(userId) },
      include: {
        user: true, 
        tours: true, 
      },
    });

    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
