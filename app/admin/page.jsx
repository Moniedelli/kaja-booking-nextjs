// pages/admin/dashboard.js (atau halaman lainnya)
'use client'
import Image from 'next/image';
import React from 'react';

const DashboardPage = () => {
  return (
      <div className="flex">
      <div className="flex-1 flex flex-col overflow-hidden text-center">
        <div className="overflow-y-auto">
          <h1 className="text-2xl font-bold">ADMIN DASHBOARD</h1>
          <p className='pt-5 pb-2'>Welcome to Admin Dashboard KAJA</p>
          <Image src={`/images/About2.png`} width={1000} height={1000} alt='' />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
