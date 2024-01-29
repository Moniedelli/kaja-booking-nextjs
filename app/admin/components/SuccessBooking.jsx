'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import UpdateStatusTransaction from './UpdateStatusTransaction';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Loading from '@/app/components/Loading';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function SuccessBooking() {
  const [transactions, setTransactions] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios('/api/admin/transaction/read');
        const data = await response.data;

        const doneStatus = data.filter((transaction) => transaction.status === 'DONE');
        setTransactions(doneStatus);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchTransactions();
  }, []);  

  const handleSearch = async (searchResults) => {
    let filteredTransactions = [];

    if (Array.isArray(searchResults)) {
      filteredTransactions = searchResults;
    } else if (searchResults.transactions) {
      filteredTransactions = searchResults.transactions;
    }
  
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.status === 'DONE'
    );
  
    setTransactions(filteredTransactions);

    setSearchNotFound(filteredTransactions.length === 0);
  };  

  const updateTransactionStatus = async (transactionId) => {
    try {
      await axios.put(`/api/admin/transaction/${transactionId}`, {
        status: 'PAID',
      });

      toast.success("Updated!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error updating transaction status:', error);
    }
  };

  const updateTransactionStatusFail = async (transactionId) => {
    try {
      await axios.put(`/api/admin/transaction/${transactionId}`, {
        status: 'CANCELED',
      });

      toast.success("Updated!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error updating transaction status:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = ('0' + date.getFullYear()).slice(-4);

    return `${month}/${day}/${year}`;
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
        <div className="overflow-x-auto">
        {loading ? (
            <Loading />
          ) : searchNotFound ? (
          <p className='text-center text-gray-300'>No results found.</p>
        ) : (
          <table className="table table-zebra text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Code</th>
                <th>Customer Name</th>
                <th>Tour Name</th>
                <th>Tour Date</th>
                <th>Qty /person</th>
                <th>Total Price (Rp)</th>
                <th>Created At</th>
                <th>Status</th> 
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
              <tr key={transaction.id} className='text-center'>
                <th className='hover:underline hover:bg-zinc-600'>
                  <Link href={`/admin/transaction/${transaction.id}`}>{transaction.id}</Link>
                </th>
                <th className='hover:underline hover:bg-zinc-600'>
                  <Link href={`/admin/transaction/${transaction.id}`}>{transaction.user.name}</Link>
                </th>
                <th>{transaction.tours.tourName}</th>
                <th>{formatDate(transaction.booking_date)}</th>
                <th>{transaction.quantity}</th>
                <th className='text-right'>{formatPrice(transaction.total)}</th>
                <th>{formatDate(transaction.createdAt)}</th>
                <th>
                  <div className="badge badge-primary gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {transaction.status}
                  </div>
                </th>
                <th>
                    <UpdateStatusTransaction transactions={transaction} onUpdate={updateTransactionStatus} toFail={updateTransactionStatusFail} />
                  </th>
              </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
      </div>
    </div>
  );
}

export default SuccessBooking;
