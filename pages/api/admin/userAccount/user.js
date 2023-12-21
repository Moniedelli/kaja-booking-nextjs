import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    const users = await prisma.user.findMany({
      include: {
        // Include any related models you want to retrieve (e.g., transactions, ratingReviews, accounts)
        transactions: true,
        ratingReviews: true,
        accounts: true,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
