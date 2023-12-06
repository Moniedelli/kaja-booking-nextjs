// pages/admin/dashboard.js (atau halaman lainnya)
'use client'
import React from 'react';
import CustomerTable from '../components/CustomerTable';
import SearchComponent from '../components/SearchComponent';

const Customer = () => {
  return (
    <div>
      <div className='pb-5 font-semibold text-3xl'>
        Customer Data
      </div>
      <SearchComponent />
      <CustomerTable />
    </div>
  );
};

export default Customer;
