// pages/detailJob/[id].js
'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import TourDetail from '@/app/components/TourDetail';

const DetailTour = ({ params: {id} } ) => {
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const getTourDetail = async () => {
      try {
        const response = await axios.get(`/api/tour/${id}`);
        setTour(response.data);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };

    if (id) {
      getTourDetail();
    }
  }, [id]);

  return (
    <div>
      {tour ? (
        <div className='text-white'>
          <h1>{tour.tourName}</h1>
          <TourDetail tour={tour} />
        </div>
      ) : (
        <p>Loading tour details...</p>
      )}
    </div>
  );
};

export default DetailTour;