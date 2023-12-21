import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  try {
    const { token, id } = req.body;

    // Update kolom snap_token di dalam tabel Transaction
    await prisma.transaction.update({
      where: { id: id },
      data: { snap_token: token },
    });

    res.status(200).json({ message: 'Token saved successfully' });
  } catch (error) {
    console.error('Error saving token to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
