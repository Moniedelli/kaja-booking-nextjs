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
                <td>{adminList.status}</td>
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