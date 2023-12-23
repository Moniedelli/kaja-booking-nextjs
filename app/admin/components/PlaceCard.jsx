// pages/admin/dashboard.js (atau halaman lainnya)
'use client'
import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import axios from 'axios';
import Link from 'next/link';

const PlaceCard = () => {
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
  
  return (
    <div className='flex justify-center gap-4 text-gray-300'>
      {placeData.map((item) => (
        <div className='max-w-xs'>
          <Card key={item.id} placeData={item}
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={item.imageSrc[0]}
            className='bg-black glass text-white'
          >
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight dark:text-white">
                {item.tourName}
              </h5>
            </a>
            <h5 className="flex gap-1 text-sm -mt-3 font-semibold tracking-tight dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className='mt-1'>{item.location}</div>
            </h5>
            <p className="font-normal text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
            <div className="mb-5 mt-2.5 flex items-center">
              {item.capacity} people
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {item.duration}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold dark:text-white">${item.price}</span>
              <Link
                href={`/detailTour/${item.id}`}
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                View detail
              </Link>
              <Link
                href={`/payment/${item.id}`}
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Book now
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PlaceCard;
