import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    const users = await prisma.user.findMany({
      include: {
        transactions: true,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
