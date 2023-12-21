import prisma from "@/app/libs/prismadb";

export default async function handler(req, res) {
  const totalUsers = await prisma.user.count();

  res.status(200).json({ totalUsers });
}
