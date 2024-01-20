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
  const [secondMostOrderedTour, setSecondMostOrderedTour] = useState(null);
  const [totalIncome, setTotalIncome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMostOrderedTours = async () => {
      try {
        // Fetch top two most ordered tours
        const mostOrderedToursResponse = await axios.get('/api/admin/mostOrderedTour');
        const topTwoTours = mostOrderedToursResponse.data.topTwoTours;
  
        // Set state for the first and second most ordered tours
        if (topTwoTours.length >= 1) {
          setMostOrderedTour(topTwoTours[0]);
        }
  
        if (topTwoTours.length >= 2) {
          setSecondMostOrderedTour(topTwoTours[1]);
        }
  
        // Fetch total income
        const totalIncomeResponse = await axios.get('/api/admin/totalIncome');
        setTotalIncome(totalIncomeResponse.data.totalIncome);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching most ordered tours:', error);
        setError('Error fetching most ordered tours. Please try again later.');
        setLoading(false);
      }
    };
  
    fetchMostOrderedTours();
  }, []);

  return (
    <>
      <div className='flex flex-col gap-10'>
        {loading ? (
          <p><Loading /></p>
        ) : error ? (
          <p>{error}</p>
        ) : mostOrderedTour ? (
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <div className="stat-title">Most Ordered</div>
              <div className="stat-value text-primary">{mostOrderedTour.tourName}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div className="stat-title">Top Second</div>
              <div className="stat-value text-secondary">{secondMostOrderedTour.tourName}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
        {totalIncome !== null ? (
          <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">Total incomes</div>
            <div className="stat-value">Rp {formatPrice(totalIncome)}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
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
