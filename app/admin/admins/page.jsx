'use client';

import { Table } from 'flowbite-react';
import AddAdmin from '../components/AddAdmin';
import axios from 'axios';

function AdminInfo() {
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/admin/admins/delete/${id}`);

      if (response.ok) {
        router.reload();
      } else {
        console.error('Error deleting data:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-5'>Admin Data</h2>
      <AddAdmin />
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Jabatan</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell>$99</Table.Cell>
              <Table.Cell>
                <a onClick={handleDelete} href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Delete
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default AdminInfo;