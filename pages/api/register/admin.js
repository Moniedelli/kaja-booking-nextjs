import { getSession } from 'next-auth/react';
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'ADMIN') {
    return res.status(403).end();
  }

  try {
    // Implementasi fungsionalitas admin di sini
    // Contoh: Dapatkan semua pengguna dari database
    const allUsers = await prisma.user.findMany();

    res.status(200).json({ message: 'Admin functionality', data: allUsers });
  } catch (error) {
    console.error('Error during admin functionality:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
