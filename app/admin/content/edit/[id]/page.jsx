'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const EditTour = ({ onClose }) => {
  const router = useRouter();
  const { tourId } = router.query;

  const [tourData, setTourData] = useState({
    tourName: '',
    location: '',
    description: '',
    capacity: 0,
    price: 0,
    duration: '',
    detailDescription: '',
    detailInfo: '',
    note: '',
    itinerary: '',
    include: '',
    exclude: '',
    imageSrc: [],
  });

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get(`/api/tour/edit/${tourId}`);
        setTourData(response.data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    if (tourId) {
      fetchTourData();
    }
  }, [tourId]);

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`/api/tour/edit/${tourId}`, tourData);
      console.log('Tour data updated successfully:', response.data);
      onClose(); // Menutup formulir setelah perubahan disimpan
    } catch (error) {
      console.error('Error updating tour data:', error);
    }
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
            <textarea placeholder="Bio" value={duration} onChange={(e) => setDuration(e.target.value)} className="textarea textarea-bordered textarea-max-w-3xl w-full max-w-3xl" ></textarea>
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
      <Button type="submit" className='mt-5' onClick={handleSaveChanges}>Save changes</Button>
        {submitMessage && <p>{submitMessage}</p>}
    </div>
    </div>
  );
};

export default EditTour;
