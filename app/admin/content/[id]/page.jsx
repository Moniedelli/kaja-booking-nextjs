// pages/detailJob/[id].js
'use client'

import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import TourDetailAdmin from '../../components/TourDetailAdmin';

const DetailTourAdmin = ({ params: {id} } ) => {
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
        <div>
          <TourDetailAdmin tour={tour} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailTourAdmin;