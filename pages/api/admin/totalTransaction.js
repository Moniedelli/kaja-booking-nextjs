import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const totalTransactions = await prisma.transaction.count();

    res.status(200).json({ totalTransactions });
  } catch (error) {
    console.error('Error fetching total transactions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
