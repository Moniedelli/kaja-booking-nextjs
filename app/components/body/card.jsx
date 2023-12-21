'use client'

import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import axios from 'axios';
import Link from 'next/link';

const TourComponent = () => {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    const getPlace = async () => {
      try {
        const response = await axios('/api/admin/read');
        const places = await response.data;
        setPlaceData(places);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getPlace();
  }, []);
  
  return (
    <div className='flex justify-center gap-4'>
      {placeData.map((item) => (
        <div className="flex-row">
          <div className='flex justify-center gap-5 py-5'>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
        <div className='max-w-xs'>
          <Card key={item.id} placeData={item}
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={item.imageSrc}
            className='bg-black text-white'
          >
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.tourName}
              </h5>
            </a>
            <h5 className="text-sm -mt-3 font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.location}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <div className="mb-5 mt-2.5 flex items-center">
              {item.capacity} people
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {item.duration} hours
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
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

export default TourComponent;
