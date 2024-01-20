/* eslint-disable @next/next/no-img-element */

'use client';

import { Navbar } from 'flowbite-react';
import AdminMenu from './AdminMenu';
import Container from '@/app/components/Container';
import Link from 'next/link';
import Image from 'next/image';

function NavAdmin({currentUser}) {
  return (
    <Navbar fluid rounded className="fixed w-full x-10 -mt-20 py-5 bg-zinc-900 text-gray-300" style={{ zIndex: 1000 }}>
      <div className='flex justify-center'>
        <Image src="/images/Kaja-Logo.png" width={40} height={40} className="mr-3" alt="KajaLogo" />
        <span className="self-center whitespace-nowrap text-3xl font-extrabold text-zinc-300">KAJA</span>
      </div>
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
