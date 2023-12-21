'use client'
import React from 'react';
import UserAccountTable from '../components/UserAccountTable';

const Transaction = () => {
  return (
    <div>
      <div className='font-medium text-2xl mb-5'>
        User Account Data
      </div>
      <UserAccountTable />
    </div>
  );
};

export default Transaction;
