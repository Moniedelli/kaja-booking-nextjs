'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ClientOnly from '@/app/components/ClientOnly';
import Image from 'next/image';

function UpcomingTour() {
  const [upcomingTours, setUpcomingTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingTours = async () => {
      try {
        const response = await axios.get('/api/admin/upcomingTour');
        const data = response.data;
        setUpcomingTours(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching upcoming tours:', error);
        setLoading(false);
      }
    };

    fetchUpcomingTours();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = ('0' + date.getFullYear()).slice(-4);

    return `${month}/${day}/${year}`;
  };

  return (
    <ClientOnly>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {upcomingTours.map((transaction) => (
            <div className="overflow-x-auto hover:bg-base-200" key={transaction.id}>
            <table className="table">
              <tbody>
                <tr>
                  
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10">
                          <Image width={50} height={50} src={transaction.tours.imageSrc[0]} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{transaction.user.name}</div>
                        <div className='flex gap-2 opacity-50'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                          </svg>
                          <div className="text-sm">{formatDate(transaction.booking_date)}</div>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='flex justify-end hover:underline items-center'>
                    <Link href={`/admin/transaction/${transaction.id}`}>Details</Link></td>
                </tr>
              </tbody>          
            </table>
          </div>

            
          ))}
        </ul>
      )}
    </ClientOnly>
  );
}

export default UpcomingTour;
