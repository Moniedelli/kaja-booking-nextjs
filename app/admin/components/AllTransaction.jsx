'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import UpdateToDone from './UpdateToDone';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Loading from '@/app/components/Loading';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ReportAllTransaction from './ReportAllTransaction';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function AllTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending
  const [sortedColumn, setSortedColumn] = useState(null);

  const handleSort = (column) => {
    const isAsc = sortedColumn === column && sortOrder === 'asc';
    const newSortOrder = isAsc ? 'desc' : 'asc';

    setSortedColumn(column);
    setSortOrder(newSortOrder);

    // Clone the transactions array to avoid mutating the original state
    const sortedTransactions = [...transactions];

    // Sorting logic based on the column
    sortedTransactions.sort((a, b) => {
      let valueA, valueB;

      switch (column) {
        case 'user.name':
          valueA = a.user.name.toLowerCase();
          valueB = b.user.name.toLowerCase();
          break;
        case 'tours.tourName':
          valueA = a.tours.tourName.toLowerCase();
          valueB = b.tours.tourName.toLowerCase();
          break;
        case 'booking_date':
          valueA = new Date(a.booking_date);
          valueB = new Date(b.booking_date);
          break;
        // Add more cases if needed for other columns
        default:
          break;
      }

      // Use localeCompare for string comparison and compare dates for 'booking_date'
      return column === 'booking_date'
        ? (isAsc ? valueA - valueB : valueB - valueA)
        : (isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA));
    });

    // Update the transactions state with the sorted array
    setTransactions(sortedTransactions);
  };

  const generatePDFdetail = (transactionId) => {
    const transaction = transactions.find((t) => t.id === transactionId);
  
    if (!transaction) {
      console.error('Transaction not found');
      return;
    }
  
    const doc = new jsPDF();
  
    // Set background color
    doc.setFillColor(32, 32, 32); // Background color
    doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');
  
    // Set Font
    doc.setFont('Arial', 'normal');
  
    // Header
    doc.setTextColor(255, 255, 255); // White text color
    doc.setFontSize(16);
    doc.text(`Detail Transaction with ID: ${transaction.id}`, 15, 15);
  
    // Transaction Status
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text(`Status: ${transaction.status}`, 15, 30);
  
    // Tour Details
    doc.setTextColor(255, 255, 255);
    doc.text(transaction.tours.tourName, 15, 70);
  
    // Other Details
    doc.text(`Total: Rp ${formatPrice(transaction.total)}`, 15, 85);
    doc.text(`Quantity: ${transaction.quantity}`, 15, 95);
    doc.text(`Tour Date: ${formatDate(transaction.booking_date)}`, 15, 105);
    doc.text(`Created At: ${formatDate(transaction.createdAt)}`, 15, 115);
  
    // User Information
    doc.text('User Information', 15, 130);
    doc.text(`Name: ${transaction.user.name}`, 15, 140);
    doc.text(`Phone Number: ${transaction.user.phoneNumber}`, 15, 150);
    doc.text(`Email: ${transaction.user.email}`, 15, 160);
  
    // Table
    doc.autoTable({
      startY: 180,
      head: [['Code', 'Customer Name', 'Tour Name', 'Tour Date', 'Qty/person', 'Total Price (Rp)', 'Status']],
      body: [[
        transaction.id,
        transaction.user.name,
        transaction.tours.tourName,
        formatDate(transaction.booking_date),
        transaction.quantity,
        formatPrice(transaction.total),
        getStatusBadge(transaction.status)
      ]],
      theme: 'striped', // 'striped', 'grid', 'plain'
      styles: {
        fillColor: [0, 0, 0], // Table background color
        textColor: [255, 255, 255], // Table text color
        halign: 'center', // Horizontal alignment (left, center, right)
        valign: 'middle', // Vertical alignment (top, middle, bottom)
        cellPadding: 5,
        fontSize: 12
      }
    });
  
    // Save the PDF
    doc.save(`transaction_report_${transaction.id}.pdf`);
  };

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
      case 'PENDING':
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
      <ReportAllTransaction />
      <div style={{ overflowX: 'auto' }}>
        <div className="overflow-x-auto">
        {loading ? (
            <Loading />
          ) : searchNotFound ? (
            <p className="text-center text-muted py-5">No results found.</p>
          ) : (
            <div style={{ overflowX: 'auto', maxHeight: '700px' }}>
              <div className="overflow-x-auto">
                <table className="table table-zebra text-center">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Code</th>
                        <th onClick={() => handleSort('user.name')}>
                          Customer Name
                          {sortedColumn === 'user.name' && (
                            <span className={`ml-1 ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}>
                              {sortOrder === 'asc' ? '▲' : '▼'}
                            </span>
                          )}
                        </th>
                        <th onClick={() => handleSort('tours.tourName')}>
                          Tour Name
                          {sortedColumn === 'tours.tourName' && (
                            <span className={`ml-1 ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}>
                              {sortOrder === 'asc' ? '▲' : '▼'}
                            </span>
                          )}
                        </th>
                        <th onClick={() => handleSort('booking_date')}>
                          Tour Date
                          {sortedColumn === 'booking_date' && (
                            <span className={`ml-1 ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}>
                              {sortOrder === 'asc' ? '▲' : '▼'}
                            </span>
                          )}
                        </th>
                      <th>Qty /person</th>
                      <th>Total Price (Rp)</th>
                      <th>Status</th>
                      {/* <th>PDF</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                    <tr key={transaction.id} className='text-center'>
                      <th className='hover:underline'>
                        <Link href={`/admin/transaction/${transaction.id}`}>{transaction.id}</Link>
                      </th>
                      <th className='hover:underline'>
                        <Link href={`/admin/transaction/${transaction.id}`}>{transaction.user.name}</Link>
                      </th>
                      <th>{transaction.tours.tourName}</th>
                      <th>{formatDate(transaction.booking_date)}</th>
                      <th>{transaction.quantity}</th>
                      <th className='text-right'>{formatPrice(transaction.total)}</th>
                      <th>{getStatusBadge(transaction.status)}</th>
                      {/* <th><button onClick={() => generatePDFdetail(transaction.id)}>Download PDF</button></th> */}
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
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default AllTransactions;
