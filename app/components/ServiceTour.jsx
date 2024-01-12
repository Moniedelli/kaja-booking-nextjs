// PaypalCheckoutButton.js
'use client'

import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

const ServiceTour = () => {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    const getPlace = async () => {
      try {
        const response = await axios('/api/admin/content/read');
        const places = await response.data;
        setPlaceData(places);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getPlace();
  }, []);

  const truncateDescription = (description) => {
    return description.length > 140 ? `${description.substring(0, 140)}...` : description;
  };

  return (
    <Container>
      {placeData.map((item) => (
      <div key={item.id} placeData={item} className="card glass card-side bg-zinc-950 mx-16 flex-shrink-0' shadow-xl mb-10">
        <figure><Image width={1000} height={1000} src={item.imageSrc[0]} alt="Movie"/></figure>
        
        <div className="card-body">
          <Link href={`/detailTour/${item.id}`} className='flex justify-between'>
            <h2 className="card-title hover:underline">{item.tourName}</h2>
            <h2 className='text-3xl'>Rp {item.price}</h2>
          </Link>
          <h5 className="flex gap-1 pb-5 text-sm font-semibold tracking-tight dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <div className='mt-1 hover:underline'>{item.location}</div>
          </h5>
          <p className='mr-28'>{truncateDescription(item.description)}</p>
          <div className='flex gap-2 items-center'>
            <h2>{item.capacity}</h2>
            <div className="badge badge-outline">people</div>
          </div>
          <div className="card-actions justify-end">
            <Link href={`/payment/${item.id}`}>
              <button className="btn orange">Booking</button>
            </Link>
          </div>
        </div>
      </div>
      ))}
    </Container>
  );
};

export default ServiceTour;
