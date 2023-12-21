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
        <dialog id="my_modal_7" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
    </div>
  );
}

export default AdminInfo;