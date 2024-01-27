// PaypalCheckoutButton.js
'use client'

import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

const ButtonListTour = () => {
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
    <Container>
      <div className='flex gap-2 pt-2 flex-wrap'>
        {placeData.map((item) => (
          <div key={item.id} className='flex-shrink-0 mb-2'>
            <button className='orange py-2 px-4 rounded-full' pill>
              {item.tourName}
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ButtonListTour;
