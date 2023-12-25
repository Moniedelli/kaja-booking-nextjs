import prisma from '@/app/libs/prismadb';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });

    if (!session?.user?.id) {
      return res.status(401).json({ error: 'User ID not found in session' });
    }

    const userId = session.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { transactions: { select: { status: true } } },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Assuming a user can have multiple transactions, you might need to process the status accordingly
    const latestTransaction = user.transactions.reduce(
      (latest, transaction) =>
        latest.createdAt > transaction.createdAt ? latest : transaction,
      {}
    );

    return res.status(200).json({ status: latestTransaction.status });
  } catch (error) {
    console.error('Error getting user transaction status:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
