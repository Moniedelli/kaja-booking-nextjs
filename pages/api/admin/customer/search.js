import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    let whereCondition = {};
    
    if (query) {
      whereCondition = {
        OR: [
          { id: parseInt(query, 10) || undefined },
          { user: { name: { contains: query } } },
          { user: { email: { contains: query } } },
        ],
      };
    }

    const transactions = await prisma.transaction.findMany({
      where: whereCondition,
      include: {
        user: true,
        tours: true,
      },
    });

    res.json({ transactions });
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
