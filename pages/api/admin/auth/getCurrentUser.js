// pages/api/admin/auth/getCurrentUser.js
import { getServerSession } from "next-auth/server";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  return await getServerSession();
}

export default async function getCurrentAdmin() {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentAdmin = await prisma.admin.findUnique({
      where: { email: session.user.email },
    });

    if (!currentAdmin) {
      return null;
    }

    return {
      ...currentAdmin,
      createdAt: currentAdmin.createdAt.toISOString(),
      updatedAt: currentAdmin.updatedAt.toISOString(),
      // Add any additional fields specific to your admin model
    };
  } catch (error) {
    return null;
  }
}
