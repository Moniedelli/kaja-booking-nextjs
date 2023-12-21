'use client';

import { useCallback, useState } from "react";
import { Dropdown, Navbar, ListGroup } from "flowbite-react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Image from "next/image";
import Avatar from "../Avatar";
import Link from "next/link";
import SearchComponent from "@/app/admin/components/SearchComponent";
// import useRentModal from "@/app/hooks/useRentModal";
// import { SafeUser } from "@/app/types";


const UserMenu = ({
  currentUser,
  src
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  // const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  // const onRent = useCallback(() => {
  //   if (!currentUser) {
  //     return loginModal.onOpen();
  //   }

  //   rentModal.onOpen();
  // }, [loginModal, rentModal, currentUser]);

  return ( 
    <Navbar rounded className="bg-black text-gray-400">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/images/logoKaja.png" className="mr-3 h-14" alt="KajaLogo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline className="bg-transparent border-transparent" label={<Avatar src={currentUser?.image} />}>
          {currentUser ? (
            <>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-gray-300 rounded-box w-40">
                <li onClick={() => {}}><a>{currentUser.name}</a></li>
                <li onClick={() => {}}><a>{currentUser.email}</a></li>
                <li onClick={() => {}}><a>My trips</a></li>
                <li onClick={() => {}}><a>My favorites</a></li>
                <li onClick={() => {}}><a>My reservations</a></li>
                <li onClick={() => {}}><a>My reservations</a></li>
                <li onClick={() => {}}><a>My home</a></li>
                <li onClick={() => signOut()}><a>Logout</a></li>
              </ul>
            </>
          ) : (
            <>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-gray-300 rounded-box w-28">
                <li onClick={registerModal.onOpen}><a>Sign in</a></li>
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
        <Link href="/pricing"><Navbar.Link className="custome-text-style md:hover:text-red-600">Pricing</Navbar.Link></Link>
        <Link href="/contact"><Navbar.Link className="custome-text-style md:hover:text-red-600">Contact</Navbar.Link></Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserMenu;