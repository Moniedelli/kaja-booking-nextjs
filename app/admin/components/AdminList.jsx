'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Admin Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Email Verified</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminList.map((adminList) => (
              <tr key={admin.id}>
                <th>{adminList.id}</th>
                <th>{adminList.name}</th>
                <td>{adminList.email}</td>
                <td>{formatDate(adminList.createdAt)}</td>
                <td>{adminList.status}</td>
                <td>
                  <div className='text-amber-500' onClick={() => handleEdit(item.id)}>
                    <div className="tooltip tooltip-warning" data-tip="edit">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                      </svg>
                    </div>
                  </div>
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