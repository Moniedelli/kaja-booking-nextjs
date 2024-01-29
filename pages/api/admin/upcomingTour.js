// pages/api/upcoming-tours.js
import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const upcomingTours = await prisma.transaction.findMany({
      where: {
        status: 'DONE',
        booking_date: {
          gt: new Date(),
        },
      },
      orderBy: {
        booking_date: 'asc',
      },
      take: 5,
      include: {
        tours: true,
        user: true
      },
    });

    res.status(200).json(upcomingTours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
