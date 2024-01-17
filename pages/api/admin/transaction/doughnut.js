// Handler API (pages/api/transactions.js)
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const transactionData = await prisma.transaction.findMany({
      select: {
        status: true,
        total: true,
      },
      // Tambahkan kondisi where jika diperlukan
    });

    res.status(200).json(transactionData);
  } catch (error) {
    console.error('Error fetching transaction data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
