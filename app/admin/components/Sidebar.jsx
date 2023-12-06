
'use client';

import { Sidebar } from 'flowbite-react';
import Link from 'next/link';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function SidebarComponent() {
  return (
    <div className="overflow-y-auto">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link href="/admin">
              <Sidebar.Item icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
            </Link>
            <Link href="/admin/customer">
              <Sidebar.Item icon={HiUser}>
                Customer
              </Sidebar.Item>
            </Link>
            <Link href="/admin/content">
              <Sidebar.Item icon={HiViewBoards}>
                Content
              </Sidebar.Item>
            </Link>
            <Link href="/admin/inbox">
              <Sidebar.Item icon={HiInbox}>
                Inbox
              </Sidebar.Item>
            </Link>
            <Link href="/admin/service">
              <Sidebar.Item icon={HiShoppingBag}>
                Service
              </Sidebar.Item>
            </Link>
            <Link href="/admin/rating">
              <Sidebar.Item icon={HiArrowSmRight}>
                Rating
              </Sidebar.Item>
            </Link>
            <Link href="/admin/admins">
              <Sidebar.Item icon={HiUser}>
                Admin
              </Sidebar.Item>
            </Link>
            <Link href="/admin/jeep">
              <Sidebar.Item icon={HiTable}>
                Jeep Management
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SidebarComponent;