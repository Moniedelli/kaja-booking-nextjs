'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/app/components/Loading';
import LineChart from './LineChart';
import TransactionTable from './TransactionTable';
import DashboardPendingBooking from './DashboardPending';
import DoughnutChart from './DoughnutChart';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Home() {
  const [mostOrderedTour, setMostOrderedTour] = useState(null);
  const [totalIncome, setTotalIncome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMostOrderedTour = async () => {
      try {
        // Fetch most ordered tour
        const mostOrderedTourResponse = await axios.get('/api/admin/mostOrderedTour');
        setMostOrderedTour(mostOrderedTourResponse.data.mostOrderedTour);

        // Fetch total income
        const totalIncomeResponse = await axios.get('/api/admin/totalIncome');
        setTotalIncome(totalIncomeResponse.data.totalIncome);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching most ordered tour:', error);
        setError('Error fetching most ordered tour. Please try again later.');
        setLoading(false);
      }
    };

    fetchMostOrderedTour();
  }, []);

  return (
    <>
      <div className='flex gap-10'>
        {loading ? (
          <p><Loading /></p>
        ) : error ? (
          <p>{error}</p>
        ) : mostOrderedTour ? (
          <div className='flex items-center gap-3 bg-zinc-800 p-7 rounded-2xl hover:bg-zinc-700'>
            <div className='rounded-full border border-zinc-300 p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p>The most frequently ordered</p>
              <p className='font-semibold text-xl'>{mostOrderedTour.tourName}</p>
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
        {totalIncome !== null ? (
          <div className='flex gap-3 items-center bg-zinc-800 p-7 rounded-2xl hover:bg-zinc-700'>
            <div className='rounded-full border border-zinc-300 p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
              </svg>
            </div>
            <div>
              <p>Total Income</p>
              <p className='font-semibold text-xl'>Rp {formatPrice(totalIncome)}</p>
            </div>
          </div>
        ) : (
          <p><Loading /></p>
        )}
        
      </div>
      <div>
        <DashboardPendingBooking />
      </div>
      {/* <div>
          <LineChart />
        </div>
        <DoughnutChart /> */}
    </>
  );
}

export default Home;
