// pages/api/register.js

import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Handle the POST request for user registration
      const { email, name, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          hashedPassword,
        },
      });

      res.status(200).json(user);
    } catch (error) {
      console.error('Error during user creation:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
