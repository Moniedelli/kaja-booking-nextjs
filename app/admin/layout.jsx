import React, { ReactNode } from 'react';
import SidebarComponent from './components/Sidebar';
import NavAdmin from './components/NavbarAdmin';
import getCurrentUser from '../actions/getCurrentUser';

export default async function ({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex">
      <NavAdmin currentUser={currentUser} />
      <SidebarComponent />
      <div className="flex-1 flex flex-col overflow-hidden bg-zinc-900 rounded-2xl m-4">
        <div className="p-8 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
