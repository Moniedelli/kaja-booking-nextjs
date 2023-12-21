'use client'

import Container from "../Container";
import UserMenu from "./UserMenu";
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
    <div className="fixed w-full bg-transparent x-10 shadow-sm" style={{ zIndex: 1000 }}>
      <div>
        <Container>
          <UserMenu currentUser={currentUser}/>
        </Container>
      </div>
    </div>
  )
}

export default NavbarNav;