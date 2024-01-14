'use client'

import React, { useState } from 'react';
import {
  Toast,
} from 'flowbite-react';
import axios from 'axios';

const UpdateAdmin = ({adminList}) => {
  const [name, setName] = useState(adminList.name);
  const [email, setEmail] = useState(adminList.email);
  const [phoneNumber, setPhoneNumber] = useState(adminList.phoneNumber);
  const [status, setStatus] = useState(adminList.status);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleEdit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.patch(`/api/admin/admins/${adminList.id}`, {
        name,
        email,
        phoneNumber,
        status,
      });
  
      console.log('Admin berhasil diupdate');
      setSubmitMessage(
        <Toast>
          Success change admin
        </Toast>
      );
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setSubmitMessage(
        <Toast>
          Fail change admin
        </Toast>
      );
    }
  };

  return (
    <div>
      <div className='text-amber-500' onClick={()=>document.getElementById(`my_modal_${adminList.id}`).showModal()}>
          <div className="tooltip tooltip-warning" data-tip="change">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </div>
          
          <div className='text-gray-300'>
            <dialog id={`my_modal_${adminList.id}`} className="modal">
              <div className="modal-box bg-zinc-800">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Edit admin with name <span className='italic'>{adminList.name}</span></h3>
                <div className="flex flex-col gap-4 max-w-3xl">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-zinc-300">Email</span>
                  </div>
                  <input value={email} onChange={(event) => setEmail(event.target.value)} required type="email" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-zinc-300">Name</span>
                  </div>
                  <input value={name} onChange={(event) => setName(event.target.value)} required type="name" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-zinc-300">Phone Number</span>
                  </div>
                  <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required type="phone" placeholder="Type here" className="bg-transparent input input-bordered w-full max-w-lg" />
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-zinc-300">Status</span>
                  </div>
                  <div className='flex gap-2 items-center pb-2'>
                    <input type="radio" name="radio-1" className="radio bg-transparent" checked={status === 'ACTIVE'} onChange={() => setStatus('ACTIVE')} required />
                    <h2>Active</h2>
                  </div>
                  <div className='flex gap-2 items-center pb-2'>
                    <input type="radio" name="radio-1" className="radio bg-transparent" checked={status === 'INACTIVE'} onChange={() => setStatus('INACTIVE')} required />
                    <h2>Inactive</h2>
                  </div>
                </label>
                </div>
                {/* Tombol Submit Example dan Pesan Submit */}
                <div className='flex justify-start gap-2'>
                  <button type="submit" className='mt-5 orange py-2 px-5 rounded-3xl' onClick={(e) => handleEdit(e)}>Submit changes</button>
                  {submitMessage && <p>{submitMessage}</p>}
                </div>
              </div>
            </dialog>
          </div>
        </div>
    </div>
  );
};

export default UpdateAdmin;
