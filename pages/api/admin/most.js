import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  const topTours = await prisma.tour.findMany({
    include: {
      transactions: true,
    },
    orderBy: {
      transactions: {
        _count: 'desc',
      },
    },
    take: 5,
  });


  res.status(200).json(topTours);
}