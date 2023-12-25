'use client'
import React from 'react';
import TabTransaction from '../components/TabTransaction';

const Transaction = () => {
  return (
    <div>
      <div className='font-medium text-2xl mb-5'>
        Transaction Data
      </div>
      <TabTransaction />
    </div>
  );
};

export default Transaction;
