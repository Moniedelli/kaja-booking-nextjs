'use client'
import Image from 'next/image';
import React from 'react';
import DashboardAdmin from './components/DashboardAdmin';

const DashboardPage = () => {
  return (
      <div className="flex">
      <div className="flex-1 flex flex-col overflow-hidden text-center">
        <div className="overflow-y-auto">
          <h1 className="text-2xl font-bold pb-5">ADMIN DASHBOARD</h1>
          <DashboardAdmin />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
