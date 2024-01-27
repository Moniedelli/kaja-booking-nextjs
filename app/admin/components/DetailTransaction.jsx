// TourDetailAdmin.js
import React from 'react';
import ClientOnly from "@/app/components/ClientOnly";
import Image from 'next/image';
import UpdateStatusTransaction from './UpdateStatusTransaction';
import UpdateToDone from './UpdateToDone';
import axios from 'axios';
import toast from 'react-hot-toast';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const TransactionDetail = ({ transaction }) => {
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
          DONE
        </div>
      );
      case 'PAID':
        return (
          <div className="badge badge-success gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
            PAID
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

  const updateTransactionStatusToPaid = async (transactionId) => {
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

  return (
    <ClientOnly>
      <div className="px-5 text-gray-300">
        <div className="flex items-center justify-between pb-5">
          <h2 className="text-2xl font-bold">Detail Transaction with ID: {transaction.id}</h2>
        </div>
        <div className="bg-zinc-800 p-10 rounded-lg">
          <div className='flex justify-between items-center'>
            <div>
              <h2 className="text-xl font-semibold pb-2">Status</h2>
              <p className='font-semibold'>{getStatusBadge(transaction.status)}</p>
            </div>
            {transaction.status === 'PENDING' && <UpdateToDone transactions={transaction} onUpdate={updateTransactionStatus} toFail={updateTransactionStatusFail} />}
            {transaction.status === 'DONE' && <UpdateStatusTransaction transactions={transaction} onUpdate={updateTransactionStatusToPaid} toFail={updateTransactionStatusFail} />}          </div>

          <div className="pt-5">
            <h2 className="text-xl font-semibold pb-3">{transaction.tours.tourName}</h2>
            <Image src={transaction.tours.imageSrc[0]} width={150} height={150} className='rounded-2xl pb-1' alt="..." />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold py-1">Total</h3>
                <p>Rp {formatPrice(transaction.total)}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Quantity</h3>
                <p>{transaction.quantity}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Tour Date</h3>
                <p>{formatDate(transaction.booking_date)}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Created At</h3>
                <p>{formatDate(transaction.createdAt)}</p>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <h2 className="text-xl font-semibold pb-3">User Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold pb-1">Name</h3>
                <p>{transaction.user.name}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Phone Number</h3>
                <p>{transaction.user.phoneNumber}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Email</h3>
                <p>{transaction.user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

export default TransactionDetail;
