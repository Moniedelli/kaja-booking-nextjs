'use client';

import { useCallback, useState } from "react";
import { Dropdown, Navbar, ListGroup } from "flowbite-react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";
import Image from "next/image";
import Avatar from "../Avatar";
import SearchComponent from "@/app/admin/components/SearchComponent";
import Link from "next/link";
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
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar src={currentUser?.image} />
          }
        >
          {currentUser ? (
            <>
              <Dropdown.Header>
                <span className="block text-sm">{currentUser.name}</span>
                <span className="block truncate text-sm font-medium">{currentUser.email}</span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => {}}>My trips</Dropdown.Item>
              <Dropdown.Item onClick={() => {}}>My favorites</Dropdown.Item>
              <Dropdown.Item onClick={() => {}}>My reservations</Dropdown.Item>
              <Dropdown.Item onClick={() => {}}>My properties</Dropdown.Item>
              <Dropdown.Item onClick={() => {}}>My home</Dropdown.Item>
              <Dropdown.Item onClick={() => signOut()}>Logout</Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item onClick={registerModal.onOpen}>Sign in</Dropdown.Item>
              <Dropdown.Item onClick={loginModal.onOpen}>Login</Dropdown.Item>
            </>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active className="custome-text-style">
            Home
          </Navbar.Link>
        </Link>
        <Navbar.Link
          className="custome-text-style"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          About
          {dropdownOpen && (
            <div className="flex justify-center pt-2" style={{ position: 'absolute', zIndex: 1000 }}>
              <ListGroup className="w-48">
                <Link href="/about"><ListGroup.Item>Profile</ListGroup.Item></Link>
                <Link href="/about/quality"><ListGroup.Item>Quality</ListGroup.Item></Link>
                <Link href="/about/activity"><ListGroup.Item>Activities</ListGroup.Item></Link>
                <ListGroup.Item disabled>Download</ListGroup.Item>
              </ListGroup>
            </div>
          )}
        </Navbar.Link>
        <Link href="/services"><Navbar.Link className="custome-text-style">Services</Navbar.Link></Link>
        <Link href="/pricing"><Navbar.Link className="custome-text-style">Pricing</Navbar.Link></Link>
        <Link href="/contact"><Navbar.Link className="custome-text-style">Contact</Navbar.Link></Link>
      </Navbar.Collapse>
      <SearchComponent />
    </Navbar>
  );
}

export default UserMenu;