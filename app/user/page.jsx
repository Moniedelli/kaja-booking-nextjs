'use client'

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import CancelBooking from '../components/CancelBooking';
import axios from 'axios';

const Dashboard = ({ }) => {
  const { data: session } = useSession();
  const [userTransactions, setUserTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState('pending');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const fetchUserTransactions = async () => {
      if (session) {
        try {
          const response = await fetch('/api/transaction/read');
          const data = await response.json();
          setUserTransactions(data);
        } catch (error) {
          console.error('Error fetching user transactions:', error);
        }
      }
    };

    fetchUserTransactions();
  }, [session]);

  if (!session) {
    return <div><Loading /></div>;
  }

  const updateTransactionStatus = async (transactionId) => {
    try {
      await axios.put(`/api/transaction/${transactionId}`, {
        status: 'CANCELED',
      });
      await fetchUserTransactions();
    } catch (error) {
      console.error('Error updating transaction status:', error);
    }
  };

  return (
    <div className='text-zinc-300 py-20'>
    <h3 className='text-left px-28 font-semibold text-2xl'>Welcome, {session?.user?.name}!</h3>
    <div className='flex justify-center py-8'>
      <Image src='/images/7309681.jpg' width={150} height={150} className='rounded-3xl' alt='' />
    </div>
    <div className='bg-zinc-800 mx-36 rounded-2xl'>
      <div className='p-10'>
        <p className='text-lg'>My Order</p>
          <div role="tablist" className="tabs tabs-bordered">
            <a role="tab" className={`tab ${activeTab === 'pending' ? 'tab-active' : ''}`} onClick={() => showTab('pending')}>Pending Payment</a>
            <a role="tab" className={`tab ${activeTab === 'done' ? 'tab-active' : ''}`} onClick={() => showTab('done')}>Done</a>
            <a role="tab" className={`tab ${activeTab === 'fail' ? 'tab-active' : ''}`} onClick={() => showTab('fail')}>Fail</a>
          </div>

          <div className="pt-5">
            {userTransactions.map((transaction) => (
              (activeTab === 'pending' && transaction.status === 'PENDING_PAYMENT' && (
                <div key={transaction.id} className='border border-zinc-600 p-4 rounded-md mb-4'>
                  <div>
                    <div className='flex justify-between items-center'>
                      <h4 className='text-lg font-semibold'>Transaction ID: {transaction.id}</h4>
                      <span className='text-yellow-500 font-bold text-sm'>
                        {transaction.status}
                      </span>
                    </div>
                    <div className='mt-2'>
                      <p className='text-gray-600'>Total: ${transaction.total}</p>
                      <p className='text-gray-600'>Create At: {new Date(transaction.createdAt).toLocaleDateString()}</p>
                      <p>Your Booking Date: {new Date(transaction.booking_date).toLocaleDateString()}</p>
                      <p>Payment Method: {transaction.payment_method}</p>
                    </div>
                    <div className='mt-4'>
                      <p className='text-sm font-medium text-gray-700'>Products:</p>
                      <div className='flex justify-between'>
                        <ul className='list-disc pl-5'>
                          <li key={transaction.tours.id} className='text-gray-600'>{transaction.tours.tourName} - Qty: {transaction.quantity}</li>
                        </ul>
                        <div className='flex gap-2 -mt-6'>
                          {/* <button className="btn btn-active btn-secondary">Pay</button> */}
                          <CancelBooking userTransactions={transaction} onUpdate={updateTransactionStatus} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )) ||
              (activeTab === 'done' && transaction.status === 'DONE' && (
                <div key={transaction.id} className='border border-zinc-600 p-4 rounded-md mb-4'>
                  <div>
                  <div className='flex justify-between items-center'>
                    <h4 className='text-lg font-semibold'>Transaction ID: {transaction.id}</h4>
                    <span className='text-green-500 font-bold text-sm'>
                      {transaction.status}
                    </span>
                  </div>
                  <div className='mt-2'>
                    <p className='text-gray-600'>Total: ${transaction.total}</p>
                    <p className='text-gray-600'>Create At: {new Date(transaction.createdAt).toLocaleDateString()}</p>
                    <p>Your Booking Date: {new Date(transaction.booking_date).toLocaleDateString()}</p>
                    <p>Payment Method: {transaction.payment_method}</p>
                  </div>
                  <div className='mt-4'>
                    <p className='text-sm font-medium text-gray-700'>Products:</p>
                    <ul className='list-disc pl-5'>
                      <li key={transaction.tours.id} className='text-gray-600'>{transaction.tours.tourName} - Qty: {transaction.quantity}</li>
                    </ul>
                  </div>
                </div>
                </div>
              )) ||
              (activeTab === 'fail' && transaction.status === 'CANCELED' && (
                <div key={transaction.id} className='border border-zinc-600 p-4 rounded-md mb-4'>
                  <div>
                  <div className='flex justify-between items-center'>
                    <h4 className='text-lg font-semibold'>Transaction ID: {transaction.id}</h4>
                    <span className='text-red-500 font-bold text-sm'>
                      {transaction.status}
                    </span>
                  </div>
                  <div className='mt-2'>
                    <p className='text-gray-600'>Total: ${transaction.total}</p>
                    <p className='text-gray-600'>Create At: {new Date(transaction.createdAt).toLocaleDateString()}</p>
                    <p>Your Booking Date: {new Date(transaction.booking_date).toLocaleDateString()}</p>
                    <p>Payment Method: {transaction.payment_method}</p>
                  </div>
                  <div className='mt-4'>
                    <p className='text-sm font-medium text-gray-700'>Products:</p>
                    <ul className='list-disc pl-5'>
                      <li key={transaction.tours.id} className='text-gray-600'>{transaction.tours.tourName} - Qty: {transaction.quantity}</li>
                    </ul>
                  </div>
                </div>
                </div>
              ))
            ))}
          </div>
      </div>
    </div>
  </div>
);
};

export default Dashboard;