'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import UpdateAdmin from './UpdateAdmin';

function AdminList() {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios('/api/admin/admins/read');
        const data = await response.data;

        const adminData = data.filter((admin) => admin.role === 'ADMIN');
        setAdminList(adminData);
      } catch (error) {
        console.error('Error fetching admin:', error);
      }
    };

    fetchUser();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = ('0' + date.getFullYear()).slice(-4);

    return `${month}/${day}/${year}`;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'ACTIVE':
        return (
          <div className="badge badge-secondary badge-outline">
            Active
          </div>
        );
      case 'INACTIVE':
      return (
        <div className="badge badge-primary badge-outline">
          Inactive
        </div>
        );
      default:
        return null; 
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>Admin Id</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Created At</th>
              {/* <th>Updated At</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminList.map((adminList) => (
              <tr key={adminList.id}>
                {/* <th>{adminList.id}</th> */}
                <th>{adminList.name}</th>
                <td>{adminList.email}</td>
                <td>{adminList.phoneNumber}</td>
                <td>{getStatusBadge(adminList.status)}</td>
                <td>{formatDate(adminList.createdAt)}</td>
                {/* <td>{formatDate(adminList.updatedAt)}</td> */}
                <td>
                  <UpdateAdmin adminList={adminList} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminList;