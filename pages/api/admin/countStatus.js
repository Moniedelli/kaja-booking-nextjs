import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const pendingCount = await prisma.transaction.count({
      where: { status: 'PENDING' },
    });

    const paidCount = await prisma.transaction.count({
      where: { status: 'PAID' },
    });

    const canceledCount = await prisma.transaction.count({
      where: { status: 'CANCELED' },
    });

    const doneCount = await prisma.transaction.count({
      where: { status: 'DONE' },
    });

    return res.status(200).json({
      pending: pendingCount,
      paid: paidCount,
      canceled: canceledCount,
      done: doneCount,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
