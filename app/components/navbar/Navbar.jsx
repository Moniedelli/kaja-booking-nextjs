'use client'

import Container from "../Container";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import { usePathname } from "next/navigation";

const NavbarNav = ({
  currentUser
}) => {

  const pathname = usePathname();

  const isAdminRoute = typeof pathname === 'string' && pathname.startsWith('/admin');
  
  if (isAdminRoute) {
    return null;
  }

  return (
    <div className="fixed w-full bg-slate-950 x-10 shadow-sm" style={{ zIndex: 1000 }}>
      <div className="border-b-[1px]">
        <Container>
          <UserMenu currentUser={currentUser}/>
        </Container>
      </div>
    </div>
  )
}

export default NavbarNav;