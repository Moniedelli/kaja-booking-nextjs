// pages/api/notifTransaction.js

import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session?.user?.id) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const userId = session.user.id;

  try {
    const transactions = await getUserTransactionStatus(userId);
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching user transaction status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
