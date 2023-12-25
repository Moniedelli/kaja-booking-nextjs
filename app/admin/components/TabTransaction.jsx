'use client'
import React from 'react';
import { useState } from 'react';
import TransactionHistory from './TransactionHistory';
import TransactionTable from './TransactionTable';

const TabTransaction = () => {
  const [activeTab, setActiveTab] = useState('tours');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered hover:text-white">
        <a 
          role="tab" 
          className={`tab ${activeTab === 'tours' ? 'tab-active' : ''}`}
          onClick={() => showTab('tours')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
            Transaction lists
          </div></a>
        <a 
          role="tab" 
          className={`tab ${activeTab === 'addTour' ? 'tab-active' : ''}`}
          onClick={() => showTab('addTour')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            History
          </div></a>
        <a 
          role="tab" 
          className={`tab ${activeTab === 'manage' ? 'tab-active' : ''}`}
          onClick={() => showTab('manage')}
        >
          <div className='flex justify-center gap-1 items-center hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Manage
          </div></a>
      </div>

      <div className="pt-5">
        {activeTab === 'tours' && (
          <div>
            <TransactionTable />
          </div>
        )}
        {activeTab === 'addTour' && (
          <div>
            <TransactionHistory />
          </div>
        )}
        {activeTab === 'manage' && (
          <div>
            <p>Ini belum tau isi apa</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabTransaction;
