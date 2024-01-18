'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import Link from 'next/link';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios('/api/admin/transaction/read');
        const data = await response.data;

        const doneStatus = data.filter((transaction) => transaction.status === 'PAID');
        setTransactions(doneStatus);
      } catch (error) {
        console.error('Error fetching transactions:', error);
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
      (transaction) => transaction.status === 'PAID'
    );
  
    setTransactions(filteredTransactions);

    setSearchNotFound(filteredTransactions.length === 0);
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
        {searchNotFound ? (
          <p className='text-center text-gray-300'>No results found.</p>
        ) : (
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Transaction Code</th>
                <th>Customer Name</th>
                <th>Tour Name</th>
                <th>Tour Date</th>
                <th>Quantity /person</th>
                <th>Total Price</th>
                <th>Status</th> 
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
              <tr key={transaction.id} className='text-center'>
                <Link href={`/admin/transaction/${transaction.id}`}>
                    <th>{transaction.id}</th>
                  </Link>
                <th>{transaction.user.name}</th>
                <th>{transaction.tours.tourName}</th>
                <th>{formatDate(transaction.booking_date)}</th>
                <th>{transaction.quantity}</th>
                <th>{formatPrice(transaction.total)}</th>
                <th>
                  <div className="badge badge-primary gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {transaction.status}
                  </div>
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

export default TransactionTable;
