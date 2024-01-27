'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function ReportAllTransaction() {
  const [transactions, setTransactions] = useState([]);
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

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
    });
    
    // Header
    doc.setFontSize(16);
    doc.text('All Transactions Report', doc.internal.pageSize.width / 2, 15, { align: 'center' });
    
    doc.setFontSize(10);
    doc.text('Caldera Jeep Adventure', doc.internal.pageSize.width / 2, 25, { align: 'center' });
    
    // Table Header
    const headers = ['Code', 'Customer Name', 'Customer Phone', 'Tour Name', 'Tour Date', 'Qty/person', 'Total Price (Rp)', 'Created At', 'Status'];
    const data = transactions.map(transaction => [
      transaction.id.toString(),
      transaction.user.name,
      transaction.user.phoneNumber,
      transaction.tours.tourName,
      format(new Date(transaction.booking_date), "MM/dd/yyyy"), 
      transaction.quantity.toString(),
      formatPrice(transaction.total),
      format(new Date(transaction.createdAt), "MM/dd/yyyy"), 
      transaction.status,
    ]);
    
    // Set up the table using autoTable
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 35,
      styles: {
        fontSize: 10,
      },
      columnStyles: {
        5: { halign: 'center' },
        6: { halign: 'right'}
      },
      margin: {
        top: 30,
      },
    });
    
    const currentDate = new Date();
    const formattedDate = format(currentDate, "MM-dd-yyyy HH:mm:ss");
    
    doc.setFontSize(8);
    doc.text(`Datetime: ${formattedDate}`, 15, doc.internal.pageSize.height - 15);
    
    doc.save('transaction_report.pdf');
  };

  return (
    <div>
      <div className='p-2'>
        <div className="tooltip tooltip-secondary tooltip-right cursor-pointer" data-tip="Download pdf" onClick={generatePDF}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z" clipRule="evenodd" />
            <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ReportAllTransaction;
