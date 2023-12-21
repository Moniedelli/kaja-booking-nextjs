
'use client';

import { Button, Modal, Label, TextInput, Checkbox } from 'flowbite-react';
import { useState } from 'react';

function AddAdmin() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <div onClick={() => setOpenModal(true)} className='pb-5 pt-2 cursor-pointer pl-2 hover:text-gray-700'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-3" style={{ overflowX: 'auto', maxHeight: '350px' }}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add admin</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput id="text" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="employment" value="Employment" />
              </div>
              <TextInput id="text" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phoneNumber" value="Phone number" />
              </div>
              <TextInput id="text" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Join date" />
              </div>
              <TextInput id="date" type="date" required />
            </div>
            <div className="w-full">
              <Button>Add</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddAdmin;
