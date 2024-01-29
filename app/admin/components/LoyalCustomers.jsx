'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import ClientOnly from '@/app/components/ClientOnly';

const LoyalCustomers = () => {
  const [loyalCustomers, setLoyalCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoyalCustomers = async () => {
      try {
        const response = await axios.get('/api/admin/loyalCustomers');
        setLoyalCustomers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching loyal customers:', error);
        setError('Error fetching loyal customers. Please try again later.');
        setLoading(false);
      }
    };

    fetchLoyalCustomers();
  }, []);

  return (
    <ClientOnly>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
      <ul>
        {loyalCustomers.map((customer) => (
          <div className="overflow-x-auto" key={customer.id}>
          <table className="table">
            <tbody>
              <tr>
                <th>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                  </svg>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img src="/images/7309681.jpg" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{customer.name}</div>
                      <div className="text-sm opacity-50">{customer.transactions.length} transactions</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>          
          </table>
        </div>
        ))}
      </ul>
      )}
    </ClientOnly>
  );
};

export default LoyalCustomers;
