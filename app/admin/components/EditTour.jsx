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

const EditTour = ({placeData}) => {
  const [tourId, setTourId] = useState(placeData.tourId);
  const [tourName, setTourName] = useState(placeData.tourName);
  const [location, setLocation] = useState(placeData.location);
  const [description, setDescription] = useState(placeData.description);
  const [capacity, setCapacity] = useState(placeData.capacity);
  const [price, setPrice] = useState(placeData.price);
  const [itinerary, setItinerary] = useState(placeData.itinerary);
  const [note, setNote] = useState(placeData.note);
  const [imageSrc, setImageSrc] = useState(placeData.imageSrc);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleEdit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.patch(`/api/admin/content/${placeData.id}`, {
        tourName,
        location,
        description,
        capacity,
        price,
        itinerary,
        note,
        imageSrc
      });
  
      console.log('Tour berhasil diupdate');
      setSubmitMessage(
        <Toast>
          {/* ... (your success Toast) */}
        </Toast>
      );
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setSubmitMessage(
        <Toast>
          {/* ... (your error Toast) */}
        </Toast>
      );
    }
  };
  
    
  const handleImageChange = (newImages) => {
    setImageSrc(newImages);
  };

  return (
    <div>
      <div className='text-amber-500' onClick={()=>document.getElementById(`my_modal_${placeData.id}`).showModal()}>
          <div className="tooltip tooltip-warning" data-tip="change">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </div>
          
          <div className='text-gray-300'>
            <dialog id={`my_modal_${placeData.id}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Edit {tourName}</h3>
                <div className="flex flex-col gap-4 max-w-3xl">
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
                    <textarea placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered textarea-3xl w-full max-w-3xl" ></textarea>
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
                      <span className="label-text">Itinerary</span>
                    </div>
                    <textarea placeholder="Bio" value={itinerary} onChange={(e) => setItinerary(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                  </label>
                  <label className="form-control w-full max-w-3xl">
                    <div className="label">
                      <span className="label-text">Note</span>
                    </div>
                    <textarea placeholder="Bio" value={note} onChange={(e) => setNote(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                  </label>
                </div>
                <div>
                  {/* Input untuk Gambar */}
                  <div id="fileUpload" className="max-w-3xl">
                    <div className="mb-2 block">
                      <Label htmlFor="file" value="Image">
                        <input
                          name="image"
                        />
                      </Label>
                    </div>
                    <ImageUpload value={imageSrc} onChange={setImageSrc} />
                  </div>
                </div>
                {/* Tombol Submit Example dan Pesan Submit */}
                <div className='flex justify-start gap-2'>
                  <Button type="submit" className='mt-5' onClick={(e) => handleEdit(e)}>Submit changes</Button>
                    {submitMessage && <p>{submitMessage}</p>}
                </div>
              </div>
            </dialog>
          </div>
        </div>
    </div>
  );
};

export default EditTour;
