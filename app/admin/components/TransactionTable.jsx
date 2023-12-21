'use client';

import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip } from 'flowbite-react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import Link from 'next/link';

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios('/api/admin/content/read');
        const data = await response.data;
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleSearch = async (searchResults) => {
    if (Array.isArray(searchResults)) {
      setTransactions(searchResults);
    } else if (searchResults.transactions) {
      setTransactions(searchResults.transactions);
    } else {
      setTransactions([]); // If the response structure is unexpected
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
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
      case 'PAID':
        return (
          <div className="badge badge-success gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Success
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

  const handleCheckboxChange = (transactionId) => {
    // Toggle selectedTransactions based on checkbox changes
    const isSelected = selectedTransactions.includes(transactionId);

    if (isSelected) {
      setSelectedTransactions((prev) => prev.filter((id) => id !== transactionId));
    } else {
      setSelectedTransactions((prev) => [...prev, transactionId]);
    }
  };

  const handleNotifyClick = (selectedTransactions) => {
    try {
      // Kirim notifikasi atau lakukan operasi lainnya di server
      // Gunakan selectedTransactions untuk mengidentifikasi data yang akan dipindahkan

      // Contoh: Memindahkan data ke CustomerHistory
      const updatedTransactions = transactions.filter(
        (transaction) => !selectedTransactions.includes(transaction.id)
      );

      // Simpan data yang dipindahkan ke state atau server
      setTransactions(updatedTransactions);

      // Kosongkan selectedTransactions setelah pemindahan berhasil
      setSelectedTransactions([]);
    } catch (error) {
      console.error('Error moving data:', error);
    }
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Id</th>
                <th>User Id</th>
                <th>Tour Id</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" onChange={() => handleCheckboxChange(transaction.id)} onClick={()=>document.getElementById('my_modal_3').showModal()} />
                  </label>
                </th>
                <th>{transaction.id}</th>
                <td>{transaction.userId}</td>
                <td>{transaction.tourId}</td>
                <th>{formatDate(transaction.booking_date)}</th>
                <th>{transaction.quantity}</th>
                <th>{transaction.total}</th>
                <th>{getStatusBadge(transaction.status)}</th>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Notify customer and list going to histories table</p>
            <div className="modal-action">
              <button className='btn' onClick={() => handleNotifyClick(selectedTransactions)}>Notify</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default TransactionTable;
