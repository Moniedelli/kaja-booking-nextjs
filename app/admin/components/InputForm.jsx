'use client'

import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Label,
  Toast,
} from 'flowbite-react';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
import ImageUpload from './ImageUpload';
import axios from 'axios';
import { useEffect } from 'react';
import Image from 'next/image';

const InputForm = () => {
  const [tourId, setTourId] = useState(null);
  const [tourName, setTourName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState('');
  const [detailDescription, setDetailDescription] = useState('');
  const [detailInfo, setDetailInfo] = useState('');
  const [note, setNote] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [exclude, setExclude] = useState('');
  const [include, setInclude] = useState('');
  const [imageSrc, setImageSrc] = useState([]);
  const [submitMessage, setSubmitMessage] = useState(null);

  useEffect(() => {
    const fetchExistingTourData = async () => {
      if (tourId) {
        try {
          const response = await axios.get(`/api/admin/read/${tourId}`);
          const tourData = response.data;
  
          // Set state variables with existing data
          setTourName(tourData.tourName);
          setLocation(tourData.location);
          setDescription(tourData.description);
          setCapacity(tourData.capacity);
          setPrice(tourData.price);
          setDuration(tourData.duration);
          setDetailDescription(tourData.detailDescription)
          setDetailInfo(tourData.detailInfo);
          setNote(tourData.note);
          setItinerary(tourData.itinerary);
          setExclude(tourData.exclude);
          setInclude(tourData.include)
          setImageSrc(tourData.imageSrc);
        } catch (error) {
          console.error('Error fetching existing tour data:', error);
        }
      }
    };
  
    fetchExistingTourData();
  }, [tourId]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      tourName,
      location,
      description,
      capacity,
      price,
      duration,
      detailDescription,
      detailInfo,
      note,
      itinerary,
      include,
      exclude,
      imageSrc
    };

    try {
      const response = await axios.post('/api/admin/content/createTour', formDataToSend);
      const success = response.status >= 200 && response.status < 300;

      if (success) {
        console.log('Tour berhasil dibuat');
        setSubmitMessage(
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-max-w-3xl font-normal">Tour created successfully</div>
            <Toast.Toggle />
          </Toast>
        );

        setTourName('');
        setLocation('');
        setDescription('');
        setCapacity(0);
        setPrice(0);
        setDuration('');
        setDetailDescription('');
        setDetailInfo('');
        setNote('');
        setItinerary('');
        setInclude('');
        setExclude('')
        setImageSrc([]);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setSubmitMessage(
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-max-w-3xl font-normal">Filed to create tour</div>
          <Toast.Toggle />
        </Toast>
      );
    }
  };

  const handleImageChange = (newImages) => {
    setImageSrc(newImages);
  };

  return (
    <div>
      <div className='flex justify-center'>
        {/* Bagian Kiri */}
        <div className="flex flex-col gap-4 max-w-3xl w-full">
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Tour Name</span>
            </div>
            <input type="text" value={tourName} onChange={(e) => setTourName(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-3xl" />
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-3xl" />
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered textarea-max-w-3xl w-full max-w-3xl" ></textarea>
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Capacity</span>
            </div>
            <input type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-3xl" />
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-3xl" />
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Duration</span>
            </div>
            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-3xl" />
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Detail description</span>
            </div>
            <textarea placeholder="Bio" value={detailDescription} onChange={(e) => setDetailDescription(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Detail Info</span>
            </div>
            <textarea placeholder="Bio" value={detailInfo} onChange={(e) => setDetailInfo(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Note</span>
            </div>
            <textarea placeholder="Bio" value={note} onChange={(e) => setNote(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Itinerary</span>
            </div>
            <textarea placeholder="Bio" value={itinerary} onChange={(e) => setItinerary(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Include</span>
            </div>
            <textarea placeholder="Bio" value={include} onChange={(e) => setInclude(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
          </label>
          <label className="form-control w-full max-w-3xl">
            <div className="label">
              <span className="label-text">Exclude</span>
            </div>
            <textarea placeholder="Bio" value={exclude} onChange={(e) => setExclude(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
          </label>
        </div>
      </div>
      <div className='flex justify-center'>
        <label className="form-control w-full max-w-3xl pl-1">
          <div className="label">
            <span className="label-text">Image</span>
          </div>
          <ImageUpload value={imageSrc} onChange={handleImageChange} />
        </label>

        <div className="grid grid-cols-2 gap-4 mt-4 items-center pt-5">
        {imageSrc.slice(0, 4).map((image, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover"
              src={image}
              alt={`Uploaded Image ${index + 1}`}
            />
          </div>
        ))}
        {imageSrc.slice(4).map((image, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover"
              src={image}
              alt={`Uploaded Image ${index + 5}`}
            />
          </div>
        ))}
      </div>
    </div>
    <div className='flex justify-center gap-2'>
      <Button type="submit" className='mt-5' onClick={handleSubmit}>{tourId ? 'Update Tour' : 'Add Tour'}</Button>
        {submitMessage && <p>{submitMessage}</p>}
      {/* <Button type="submit" className='mt-5'></Button>
        {submitMessage && <p>{submitMessage}</p>} */}
    </div>

      <div>
        {/* <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal
              <button className="btn btn-max-w-3xl btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Add detail in this tour</h3>
            <InputTourDetail />
            <div className="modal-action">
              <button className="btn">Submit</button>
            </div>
          </div>
        </dialog> */}
      </div>
    </div>
  );
};

export default InputForm;
