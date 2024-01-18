// TourDetailAdmin.js
import React from 'react';
import ClientOnly from "@/app/components/ClientOnly";

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

  return (
    <ClientOnly>
      <div className="px-5 text-gray-300">
        <div className="flex items-center justify-between pb-5">
          <h2 className="text-2xl font-bold">Detail Transaction with ID: {transaction.id}</h2>
        </div>
        <div className="bg-zinc-800 p-10 rounded-lg">
          <div>
            <h2 className="text-xl font-semibold pb-2">Status</h2>
            <p className='font-semibold'>{getStatusBadge(transaction.status)}</p>
          </div>

          <div className="pt-5">
            <h2 className="text-xl font-semibold pb-3">Transaction Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold pb-1">Total</h3>
                <p>Rp {formatPrice(transaction.total)}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Price per Person</h3>
                <p>Rp {formatPrice(transaction.tours.price)} /person</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Quantity</h3>
                <p>{transaction.quantity}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold pb-1">Date Booking</h3>
                <p>{formatDate(transaction.booking_date)}</p>
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
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

export default TransactionDetail;
