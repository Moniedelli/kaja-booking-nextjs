// pages/api/admin/auth/getCurrentUser.js
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getRole() {
  try {
    const session = await getServerSession();

    // Check if the user is authenticated and has the 'ADMIN' role
    return !!(session && session.user.role === 'ADMIN');
  } catch (error) {
    // Handle unauthorized access or other errors
    console.error(error);
    return false;
  }
}
