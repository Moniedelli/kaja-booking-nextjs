import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Find all transactions with status 'DONE'
    const doneTransactions = await prisma.transaction.findMany({
      where: {
        status: 'PAID',
      },
    });

    // Calculate total income
    const totalIncome = doneTransactions.reduce((total, transaction) => total + transaction.total, 0);

    return res.status(200).json({ totalIncome });
  } catch (error) {
    console.error('Error calculating total income:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect(); // Disconnect from the database
  }
}
