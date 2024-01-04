/* eslint-disable @next/next/no-img-element */

'use client';

import { Navbar } from 'flowbite-react';
import AdminMenu from './AdminMenu';
import Container from '@/app/components/Container';
import Link from 'next/link';

function NavAdmin({currentUser}) {
  return (
    <Navbar fluid rounded className="fixed w-full x-10 -mt-20 py-5 bg-black text-gray-300" style={{ zIndex: 1000 }}>
      <Navbar.Brand>
        <img src="/images/logoKaja.png" className="mr-3 h-6 sm:h-9" alt="Kaja Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Admin Dashboard</span>
      </Navbar.Brand>
      <div className="flex md:order-2 -mb-8 -mt-6">
        
        <Container>
          <AdminMenu currentUser={currentUser}/>
        </Container>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default NavAdmin;
