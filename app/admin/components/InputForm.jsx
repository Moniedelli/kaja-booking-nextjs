'use client'

import React, { useState } from 'react';
import {
  Button,
  Label,
  Textarea,
  TextInput,
  FileInput,
} from 'flowbite-react';
import ImageUpload from './ImageUpload';
import axios from 'axios';

const InputForm = () => {
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
        setSubmitMessage('Tour berhasil dibuat');

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
      setSubmitMessage('Terjadi kesalahan');
    }
  };

  return (
    <div className="flex gap-10">
      {/* Bagian Kiri */}
      <div className="flex-1 flex flex-col gap-4 max-w-md">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value='Tour Name'>
              <input
                type="text"
                name="tourName"
              />
            </Label>
          </div>
          <TextInput id="small" type="text" sizing="sm" value={tourName} onChange={(e) => setTourName(e.target.value)}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value='Location'>
              <input
                type="text"
                name="location"
              />
            </Label>
          </div>
          <TextInput id="small" type="text" sizing="sm" value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value='Description'>
              <input
                type="text"
                name="description"
              />
            </Label>
          </div>
          <Textarea id="comment" placeholder="Write the description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value='Capacity'>
              <input
                type="number"
                name="capacity"
              />
            </Label>
          </div>
          <TextInput id="small" type="text" sizing="sm" value={capacity} onChange={(e) => setCapacity(e.target.value)}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value='Price'>
              <input
                type="number"
                name="price"
              />
            </Label>
          </div>
          <TextInput id="small" type="text" sizing="sm" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value='Duration'>
              <input
                type="text"
                name="duration"
              />
            </Label>
          </div>
          <TextInput id="small" type="text" sizing="sm" value={duration} onChange={(e) => setDuration(e.target.value)}/>

          {/* Input untuk Gambar */}
          <div id="fileUpload" className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Image">
                <input
                  name="image"
                />
              </Label>
            </div>
            <ImageUpload value={imageSrc} onChange={setImageSrc} />
          </div>

          {/* Tombol Submit Example dan Pesan Submit */}
          <Button type="submit" onClick={handleSubmit}>Submit Example</Button>
          {submitMessage && <p>{submitMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
