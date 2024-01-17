'use client'

import React from 'react';
import DashboardAdmin from './components/DashboardAdmin';

const DashboardPage = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col text-center">
        <h1 className="text-2xl font-bold pb-10">ADMIN DASHBOARD</h1>
      </div>
      <DashboardAdmin />
    </div>
  );
};

export default DashboardPage;
