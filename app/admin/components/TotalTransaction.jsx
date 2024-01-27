'use client'

import { useEffect, useState } from 'react';

const TotalTransaction = () => {
  const [totalTransactions, setTotalTransactions] = useState(null);

  useEffect(() => {
    const fetchTotalTransactions = async () => {
      try {
        const response = await fetch('/api/admin/totalTransaction');
        const data = await response.json();
        setTotalTransactions(data.totalTransactions);
      } catch (error) {
        console.error('Error fetching total transactions:', error);
      }
    };

    fetchTotalTransactions();
  }, []);

  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
          </div>
          <div className="stat-title">Total Transactions</div>
          {totalTransactions !== null ? (
            <div className="stat-value">{totalTransactions}</div>
            ) : (
              <p>Loading...</p>
            )}
          {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
      </div>
    </div>
  );
};

export default TotalTransaction;
