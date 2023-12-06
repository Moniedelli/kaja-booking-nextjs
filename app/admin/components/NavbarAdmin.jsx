
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function NavAdmin() {
  return (
    <Navbar fluid rounded className="fixed w-full border x-10 -mt-20 py-5" style={{ zIndex: 1000 }}>
      <Navbar.Brand>
        <img src="/images/logoKaja.png" className="mr-3 h-6 sm:h-9" alt="Kaja Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Admin Dashboard</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default NavAdmin;
