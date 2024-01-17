'use client'

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditTour = ({tour}) => {
  const [tourId, setTourId] = useState(tour.id);
  const [tourName, setTourName] = useState(tour.tourName);
  const [location, setLocation] = useState(tour.location);
  const [description, setDescription] = useState(tour.description);
  const [price, setPrice] = useState(tour.price);
  const [itinerary, setItinerary] = useState(tour.itinerary);
  const [note, setNote] = useState(tour.note);
  const [imageSrc, setImageSrc] = useState(tour.imageSrc);

  function onCloseModal() {
    const modal = document.getElementById(`my_modal_${tour.id}`);
    modal.close();
    setTourName('');
    setLocation('');
    setDescription('');
    setPrice('');
    setItinerary('');
    setNote('');
    setImageSrc('');
  }  
  
  const handleEdit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.patch(`/api/admin/content/${tour.id}`, {
        tourName,
        location,
        description,
        price,
        itinerary,
        note,
        imageSrc
      });
  
      console.log('Tour berhasil diupdate');
      toast.success("Success editing tour");
      onCloseModal();
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      toast.error("Error editing tour!")
      onCloseModal();
    }
  };

  return (
    <div>
      <div className='text-amber-500' onClick={()=>document.getElementById(`my_modal_${tour.id}`).showModal()}>
          <div className="tooltip tooltip-warning tooltip-left" data-tip="change">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
            </svg>
          </div>
          
          <div className='text-gray-300'>
            <dialog id={`my_modal_${tour.id}`} className="modal">
              <div className="modal-box bg-zinc-800  w-11/12 max-w-5xl">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-xl pb-5">Edit <span className='italic'>{tourName}</span></h3>
                <div className="flex flex-col gap-4 max-w-6xl">
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Tour Name</span>
                    </div>
                    <input type="text" value={tourName} onChange={(e) => setTourName(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Location</span>
                    </div>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Description</span>
                    </div>
                    <textarea placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered bg-transparent textarea-3xl w-full max-w-5xl" ></textarea>
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Price</span>
                    </div>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Type here" className="input input-md bg-transparent input-bordered w-full max-w-5xl" />
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Itinerary</span>
                    </div>
                    <textarea placeholder="Bio" value={itinerary} onChange={(e) => setItinerary(e.target.value)} className="textarea textarea-bordered bg-transparent w-full max-w-5xl" ></textarea>
                  </label>
                  <label className="form-control w-full max-w-5xl">
                    <div className="label">
                      <span className="label-text">Note</span>
                    </div>
                    <textarea placeholder="Bio" value={note} onChange={(e) => setNote(e.target.value)} className="textarea textarea-bordered bg-transparent w-full max-w-5xl" ></textarea>
                  </label>
                </div>
                {/* Tombol Submit Example dan Pesan Submit */}
                <div className='flex justify-start gap-2'>
                  <button type="submit" className='mt-5 orange py-2 px-5 rounded-3xl' onClick={(e) => handleEdit(e)}>Submit changes</button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
    </div>
  );
};

export default EditTour;
