import bcrypt from 'bcryptjs';
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  try {
    // Cari pengguna berdasarkan alamat email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Jika pengguna tidak ditemukan
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Bandingkan password yang dimasukkan dengan password yang dihash di database
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    // Jika password tidak sesuai
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
