import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from '@/app/libs/prismadb';

export async function getSession() {
  return await getServerSession();
}

export default async function getCurrentUser() {
  try{  
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return null;
    }

    let currentUser;

    // Mengecek apakah pengguna memiliki role 'ADMIN'
    if (session.user.role === 'ADMIN') {
      currentUser = await prisma.admin.findUnique({
        where: { email: session.user.email },
      });
    } else {
      currentUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
    }

    if(!currentUser) {
      return null;
    }

    return {
      ...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified: currentUser.emailVerified?.toISOString() || null
    };
  } catch (error){
    console.error('Error fetching current user:', error);
    return null;
  }
}