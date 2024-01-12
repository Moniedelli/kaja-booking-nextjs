'use client'

import { Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Link from "next/link";
import Avatar from "../Avatar";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const UserMenu2 = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 50;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveRoute = (route) => {
    return pathname === route;
  };

  return (
    <div>
      <div className="navbar px-10 rounded-b-3xl" style={{ backgroundColor: isScrolled ? '#09090b' : 'transparent' }} >
        <div className="navbar-start">
          <Navbar.Brand href="https://flowbite-react.com">
            <Image src="/images/Kaja-Logo.png" width={40} height={40} className="mr-3" alt="KajaLogo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold"></span>
          </Navbar.Brand>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/" className={isActiveRoute('/') ? 'bg-zinc-800 hover:text-zinc-200' : ''}>Home</a></li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 bg-zinc-900">
                  <li><a href="/about" className={isActiveRoute('/about') ? 'bg-zinc-800 hover:text-zinc-200' : ''}>Profile</a></li>
                  <li><a href="/about/activity" className={isActiveRoute('/about/activity') ? 'bg-zinc-800 hover:text-zinc-200' : ''}>Activity</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/services" className={isActiveRoute('/services') ? 'bg-zinc-800 hover:text-zinc-200' : ''}>Services</a></li>
            <li><a href="/contact" className={isActiveRoute('/contact') ? 'bg-zinc-800 hover:text-zinc-200' : ''}>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex md:order-2">
          
          {/* <Notification /> */}
          <Dropdown arrowIcon={false} inline className="pt-2 bg-transparent border-transparent" label={<Avatar src={currentUser?.image} />}>
            {currentUser ? (
              <>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-zinc-950 text-gray-300 rounded-box w-40">
                  <li onClick={() => {}}><a>{currentUser.name}</a></li>
                  <li onClick={() => {}}><a>{currentUser.email}</a></li>
                  <Link href={`/user`}>
                    <li onClick={() => {}}><a>My home</a></li>
                  </Link>
                  {currentUser && currentUser.role === 'ADMIN' && (
                    <div>
                      <li>
                        <Link href="/admin">
                          Admin panel
                        </Link>
                      </li>
                    </div>
                  )}
                  <li onClick={() => signOut()}><a>Logout</a></li>
                </ul>
              </>
            ) : (
              <>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-gray-300 rounded-box w-28">
                  <li onClick={registerModal.onOpen}><a>Sign up</a></li>
                  <li onClick={loginModal.onOpen}><a>Login</a></li>
                </ul>
              </>
            )}
          </Dropdown>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu2;