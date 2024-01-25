import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    const loyalCustomers = await prisma.user.findMany({
      orderBy: {
        transactions: {
          _count: 'desc', // Use _count instead of count
        },
      },
      take: 5,
      include: {
        transactions: true,
      },
    });

    res.status(200).json(loyalCustomers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
