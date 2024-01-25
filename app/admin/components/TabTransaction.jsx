'use client'
import React from 'react';
import { useState } from 'react';
import TransactionHistory from './TransactionHistory';
import TransactionTable from './TransactionTable';
import TransactionFail from './FailTransaction';
import SuccessBooking from './SuccessBooking';
import AllTransactions from './AllTransaction';

const TabTransaction = () => {
  const [activeTab, setActiveTab] = useState('all');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered hover:text-white">
        <a 
          role="tab" 
          className={`tab ${activeTab === 'all' ? 'tab-active' : ''}`}
          onClick={() => showTab('all')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
            All
          </div></a>
          <a 
          role="tab" 
          className={`tab ${activeTab === 'tours' ? 'tab-active' : ''}`}
          onClick={() => showTab('tours')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Pending
          </div></a>
        <a 
          role="tab" 
          className={`tab ${activeTab === 'success' ? 'tab-active' : ''}`}
          onClick={() => showTab('success')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Done
          </div></a>
        <a 
          role="tab" 
          className={`tab ${activeTab === 'addTour' ? 'tab-active' : ''}`}
          onClick={() => showTab('addTour')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
            Paid
          </div></a>
        <a 
          role="tab" 
          className={`tab ${activeTab === 'manage' ? 'tab-active' : ''}`}
          onClick={() => showTab('manage')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Fail
          </div></a>
      </div>

      <div className="pt-5">
        {activeTab === 'all' && (
          <div>
            <AllTransactions />
          </div>
        )}
        {activeTab === 'tours' && (
          <div>
            <TransactionTable />
          </div>
        )}
        {activeTab === 'success' && (
          <div>
            <SuccessBooking />
          </div>
        )}
        {activeTab === 'addTour' && (
          <div>
            <TransactionHistory />
          </div>
        )}
        {activeTab === 'manage' && (
          <div>
            <TransactionFail />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabTransaction;
