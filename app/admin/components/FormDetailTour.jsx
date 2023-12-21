'use client'

import React, { useState } from 'react';
import {
  Button,
  Label,
  Toast,
} from 'flowbite-react';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
import ImageUpload from './ImageUpload';
import axios from 'axios';

const FormDetailTours = () => {
  const [tourName, setTourName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [duration, setDuration] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      tourName,
      location,
      description,
      capacity,
      price,
      duration,
      imageSrc
    };

    try {
      const response = await axios.post('/api/admin/createTour', formDataToSend);
      const success = response.status >= 200 && response.status < 300;

      if (success) {
        console.log('Tour berhasil dibuat');
        setSubmitMessage(
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Tour created successfully</div>
            <Toast.Toggle />
          </Toast>
        );

        setTourName('');
        setLocation('');
        setDescription('');
        setCapacity(0);
        setPrice(0.0);
        setDuration('');
        setImageSrc('');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setSubmitMessage(
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Filed to create tour</div>
          <Toast.Toggle />
        </Toast>
      );
    }
  };

  return (
    <div>
      <div>
        {/* Bagian Kanan */}
        <div className="flex-1 flex flex-col gap-4 max-w-md">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Tour Name</span>
            </div>
            <input type="text" value={tourName} onChange={(e) => setTourName(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Capacity</span>
            </div>
            <input type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Duration</span>
            </div>
            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-xs" />
          </label>
        </div>
      </div>
      {/* Tombol Submit Example dan Pesan Submit */}
      <Button type="submit" className='mt-5' onClick={handleSubmit}>Add tour</Button>
        {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
};

export default FormDetailTours;
