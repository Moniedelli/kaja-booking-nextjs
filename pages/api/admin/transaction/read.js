import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Fetch transactions from the database using Prisma
    const transactions = await prisma.transaction.findMany({
      include: {
        user: true,
        tours: true,
      },
    });

    // Send the transactions as a response
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    // Handle the error appropriately
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}
