'use client';

import { Table } from 'flowbite-react';
import AddAdmin from '../components/AddAdmin';
import axios from 'axios';
import AdminList from '../components/AdminList';

function AdminInfo() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-5'>Admin Data</h2>
      <AddAdmin />
      <AdminList />
    </div>
  );
}

export default AdminInfo;