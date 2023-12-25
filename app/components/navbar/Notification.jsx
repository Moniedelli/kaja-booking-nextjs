'use client'
// components/Notification.js

import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

const Notification = () => {
  const [userTransactionStatusList, setUserTransactionStatusList] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    // Fetch user transaction status when the component mounts
    const fetchUserStatus = async () => {
      try {
        const userId = session?.user?.id;

        if (!userId) {
          throw new Error('User ID not found in the session');
        }
        // Fetch user transaction status using the utility function
        const transactions = await getUserTransactionStatus(userId);

        // Update the state with the fetched transactions
        setUserTransactionStatusList(transactions);
      } catch (error) {
        console.error('Error fetching user transaction status:', error);
        // Handle the error, set a default value, or show an error message
      }
    };

    // Call the fetchUserStatus function
    fetchUserStatus();
  }, [session]); 

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="m-1">
          <div className="avatar online placeholder mr-3 mt-1">
            <div className="bg-neutral text-neutral-content rounded-full w-10 h-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
            </div>
          </div> 
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu mt-1 p-2 shadow bg-base-100 rounded-box w-52">
          {userTransactionStatusList.map((transaction) => (
            <li key={transaction.id}><a>{`Notification for Transaction ${transaction.id}`}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
