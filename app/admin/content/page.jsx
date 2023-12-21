// pages/admin/dashboard.js (atau halaman lainnya)
'use client'
import React from 'react';
import TabContent from '../components/TabContent';

const Content = () => {
  return (
    <div>
      <h2 className='text-2xl font-medium pb-5'>Tour</h2>
      <TabContent />
    </div>
  );
};

export default Content;
