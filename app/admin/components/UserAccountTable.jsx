'use client';

import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip } from 'flowbite-react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import Link from 'next/link';

function UserAccountTable() {
  const [userAccount, setUserAccount] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [totalUsers, setTotalUser] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/admin/userAccount/getTotalUser');
      const data = await response.json();
      setTotalUser(data.totalUsers);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios('/api/admin/userAccount/user');
        const data = await response.data;

        
        const userAccountData = data.filter((user) => user.role === 'USER');

        setUserAccount(userAccountData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleSearch = async (searchResults) => {
    if (Array.isArray(searchResults)) {
      setUserAccount(searchResults);
    } else if (searchResults.userAccount) {
      setUserAccount(searchResults.userAccount);
    } else {
      setUserAccount([]);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      {/* <SearchComponent onSearch={handleSearch} />
      <button className="btn">
        Found
        <div className="badge badge-secondary">{totalUsers}</div>
        users
      </button> */}
      <div style={{ overflowX: 'auto', maxHeight: '700px' }}>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userAccount.map((userAccount) => (
              <tr key={userAccount.id}>
                <th>{userAccount.id}</th>
                <td>{userAccount.name}</td>
                <td>{userAccount.email}</td>
                <th>{formatDate(userAccount.createdAt)}</th>
                <th>
                  <div className="avatar online placeholder">
                    <div className="bg-neutral text-neutral-content rounded-xl w-12">
                      <span className="text-xs">{userAccount.status}</span>
                    </div>
                  </div> 
                </th>
                {/* <th>{getStatusBadge(transaction.status)}</th> */}
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Notify customer and list going to histories table</p>
            <div className="modal-action">
              <button className='btn' onClick={() => handleNotifyClick(selectedUser)}>Notify</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default UserAccountTable;
