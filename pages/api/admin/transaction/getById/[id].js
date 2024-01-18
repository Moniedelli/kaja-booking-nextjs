import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ error: 'Invalid transaction ID' });
    }

    const transaction = await prisma.transaction.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        user: true,
        tours: true,
      },
    });

    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.status(200).json({ transaction });
  } catch (error) {
    console.error('Error fetching transaction by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
