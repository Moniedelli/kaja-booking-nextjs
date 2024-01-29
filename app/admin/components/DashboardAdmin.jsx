'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/app/components/Loading';
import LineChart from './LineChart';
import TransactionTable from './TransactionTable';
import DashboardPendingBooking from './DashboardPending';
import DoughnutChart from './DoughnutChart';
import LoyalCustomers from './LoyalCustomers';
import MostOrderedTour from './MostOrderedTour';
import TotalCustomerActive from './TotalCustomerActive';
import TotalTransaction from './TotalTransaction';
import Most from './Most';
import CountStatusTransactions from './CountStatusTransactions';
import UpcomingTour from './CountUpcomingTour';

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Home() {
  const [mostOrderedTour, setMostOrderedTour] = useState(null);
  const [secondMostOrderedTour, setSecondMostOrderedTour] = useState(null);
  const [totalIncome, setTotalIncome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMostOrderedTours = async () => {
      try {  
        // Fetch total income
        const totalIncomeResponse = await axios.get('/api/admin/totalIncome');
        setTotalIncome(totalIncomeResponse.data.totalIncome);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching total income:', error);
        setError('Error calculate total income. Please try again later.');
        setLoading(false);
      }
    };
  
    fetchMostOrderedTours();
  }, []);

  return (
    <>
      <div className='flex flex-col gap-10'>

        <div className='flex gap-5 justify-center'>
          <TotalTransaction />
          <TotalCustomerActive />

          {totalIncome !== null ? (
          <div className="stats shadow hover:bg-base-200">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">Total incomes</div>
            <div className="stat-value">Rp {formatPrice(totalIncome)}</div>
          </div>
        </div>
        ) : (
          <p><Loading /></p>
        )}
        </div>

        <CountStatusTransactions />

        <div className="stats shadow">
          <div className="stat">
            {/* <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Top One</div> */}
            <div className='flex justify-between'>
              <div className="stat-value text text-xl">5 Most Ordered Tour</div>
              <h2 className='hover:underline text-zinc-400'>See all</h2>
            </div>
            <Most />
          </div>
        </div>  
        
        <div className="stats shadow">
          <div className="stat hover:bg-base-200">
            {/* <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div> */}
            {/* <div className="stat-title">Top Second</div> */}
            {/* <div className="stat-value text-secondary">{secondMostOrderedTour.tourName}</div> */}
            <div className="stat-value text-secondary pb-5 text-2xl">5 Loyal Customers</div>
            <LoyalCustomers />
          </div>

          <div className="stat">
            {/* <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Top One</div> */}
            <div className="stat-value text-primary text-2xl">5 Upcoming Tours</div>
            <UpcomingTour />
          </div>
        </div>
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
