import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  const { id } = req.query;
  const { status } = req.body;

  try {
    // Update the transaction status in the database using Prisma
    const updatedTransaction = await prisma.transaction.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    res.json(updatedTransaction);
  } catch (error) {
    console.error('Error updating transaction status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
