'use client';

import { useEffect, useState } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import { signOut } from "next-auth/react";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Avatar from "../Avatar";
import Link from "next/link";
import Image from "next/image";

const UserMenu = ({
  currentUser,
  src
}) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 50; // Set the scroll threshold as needed
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return ( 
    <Navbar
      rounded
      className={`text-gray-400 ${
        isScrolled ? "bg-black" : "bg-transparent"
      } transition-all`}
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <Image src="/images/Kaja-Logo.png" width={50} height={100} className="mr-3 h-14" alt="KajaLogo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        {/* <Notification /> */}
        <Dropdown arrowIcon={false} inline className="bg-transparent border-transparent" label={<Avatar src={currentUser?.image} />}>
          {currentUser ? (
            <>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-gray-300 rounded-box w-40">
                <li onClick={() => {}}><a>{currentUser.name}</a></li>
                <li onClick={() => {}}><a>{currentUser.email}</a></li>
                <li onClick={() => {}}><a>My home</a></li>
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
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active className="custome-text-style text-gray-300 hover:text-red-600 bg-gray-300 md:text-gray-300">
            Home
          </Navbar.Link>
        </Link>
        <Navbar.Link
          className="custome-text-style hover:text-red-600 md:hover:text-gray-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          About
          {dropdownOpen && (
            <div className="flex justify-center pt-2 text-gray-300" style={{ position: 'absolute', zIndex: 1000 }}>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                <Link href="/about" className="md:hover:text-red-600"><li><a>Profile</a></li></Link>
                <Link href="/about/quality" className="md:hover:text-red-600"><li><a>Quality</a></li></Link>
                <Link href="/about/activity" className="md:hover:text-red-600"><li><a>Activity</a></li></Link>
              </ul>
            </div>
          )}
        </Navbar.Link>
        <Link href="/services"><Navbar.Link className="custome-text-style md:hover:text-red-600">Services</Navbar.Link></Link>
        <Link href="/contact"><Navbar.Link className="custome-text-style md:hover:text-red-600">Contact</Navbar.Link></Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserMenu;