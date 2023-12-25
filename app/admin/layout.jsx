import React, { ReactNode } from 'react';
import SidebarComponent from './components/Sidebar';
import NavAdmin from './components/NavbarAdmin';
import getCurrentUser from '../actions/getCurrentUser';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Provider from '../context/client-provider';
import { redirect } from 'next/navigation';

export default async function ({ children }) {
  const currentUser = await getCurrentUser();

  const session = await getServerSession(authOptions);
  const user = session?.user || undefined;
  const isAdmin = user?.role === "ADMIN";

  if (!isAdmin) {
    console.error('Unauthorized access');
    redirect('/');
    return;
  }

  return (
    <Provider>
      <div className="flex">
        <NavAdmin currentUser={currentUser} />
        <SidebarComponent />
        <div className="flex-1 flex flex-col overflow-hidden bg-zinc-900 rounded-2xl m-4">
          <div className="p-8 overflow-y-auto">{children}</div>
        </div>
      </div>
    </Provider>
  );
};
