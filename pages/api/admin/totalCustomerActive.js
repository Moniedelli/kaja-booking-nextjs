import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const userStats = await prisma.user.count({
      where: {
        role: 'USER',
        status: 'ACTIVE',
      },
    });

    res.status(200).json({ userStats });
  } catch (error) {
    console.error('Error fetching user stats:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
