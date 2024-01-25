'use client';

import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip } from 'flowbite-react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import Link from 'next/link';
import UpdateUserStatus from './UpdateUserStatus';

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
    const date = new Date(dateString);
    
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = ('0' + date.getFullYear()).slice(-4);

    return `${month}/${day}/${year}`;
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
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Created At</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {userAccount.map((userAccount) => (
              <tr key={userAccount.id}>
                <td>{userAccount.name}</td>
                <td>{userAccount.email}</td>
                <td>{userAccount.phoneNumber}</td>
                <th>{formatDate(userAccount.createdAt)}</th>
                <th>
                  <span className="text-xs">{userAccount.status}</span>
                </th>
                <th>
                  <UpdateUserStatus userAccount={userAccount} />
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
