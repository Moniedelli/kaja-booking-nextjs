'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import UpdateToDone from './UpdateToDone';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Loading from '@/app/components/Loading';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function AllTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios('/api/admin/transaction/read');
        const data = await response.data;

        // Urutkan transaksi berdasarkan tanggal pembuatan secara descending (terbaru dulu)
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setTransactions(data);
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
  
    // Filter out transactions with status DONE
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.status !== 'DONE'
    );
  
    setTransactions(filteredTransactions);

    setSearchNotFound(filteredTransactions.length === 0);
  };  

  const updateTransactionStatus = async (transactionId) => {
    try {
      await axios.put(`/api/admin/transaction/${transactionId}`, {
        status: 'DONE',
      });

      toast.success("Confirmed!");
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
      toast.error("Something went wrong.");
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

  const getStatusBadge = (status) => {
    switch (status) {
      case 'PENDING_PAYMENT':
        return (
          <div className="badge badge-info gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Pending
          </div>
        );
      case 'DONE':
      return (
        <div className="badge badge-primary gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Done
        </div>
        );
      case 'PAID':
        return (
          <div className="badge badge-success gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
            Paid
          </div>
        );
      case 'CANCELED':
        return (
          <div className="badge badge-error gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Fail
          </div>
        );
      default:
        return null; // Add default case if needed
    }
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <div style={{ overflowX: 'auto' }}>
        <div className="overflow-x-auto">
        {loading ? (
            <Loading />
          ) : searchNotFound ? (
            <p className="text-center text-muted py-5">No results found.</p>
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
                  <th>Total Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                <tr key={transaction.id} className='text-center'>
                  <Link href={`/admin/transaction/${transaction.id}`}>
                    <th className='hover:underline'>{transaction.id}</th>
                  </Link>
                  <th>{transaction.user.name}</th>
                  <th>{transaction.tours.tourName}</th>
                  <th>{formatDate(transaction.booking_date)}</th>
                  <th>{transaction.quantity}</th>
                  <th className='text-right'>{formatPrice(transaction.total)}</th>
                  <th>{getStatusBadge(transaction.status)}</th>
                  <th>
                    <UpdateToDone transactions={transaction} onUpdate={updateTransactionStatus} toFail={updateTransactionStatusFail} />
                  </th>

                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <dialog id={`user_modal${transaction.id}`} className="modal">
                    <div className="modal-box bg-zinc-300 text-zinc-900">
                      <h3 className="font-semibold text-lg">Data of id user <span className='font-bold text-lg italic'>{transaction.user.id}</span></h3>
                      <p className="py-4"><span className='font-semibold'>Username:</span> {transaction.user.name}</p>
                      <p className=""><span className='font-semibold'>Email:</span> {transaction.user.email}</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>

                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <dialog id={`tour_modal${transaction.id}`} className="modal">
                    <div className="modal-box bg-zinc-300 text-zinc-900">
                      <h3 className="font-semibold text-lg">Data of id tour <span className='font-bold text-lg italic'>{transaction.tours.id}</span></h3>
                      <p className="py-4"><span className='font-semibold'>Tour name:</span> {transaction.tours.tourName}</p>
                      <p className=""><span className='font-semibold'>Tour price:</span> {transaction.tours.price} /person</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
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

export default AllTransactions;
