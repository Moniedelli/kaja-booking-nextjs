'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [mostOrderedTour, setMostOrderedTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMostOrderedTour = async () => {
      try {
        const response = await axios.get('/api/admin/mostOrderedTour');

        setMostOrderedTour(response.data.mostOrderedTour);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching most ordered tour:', error);
        setError('Error fetching most ordered tour. Please try again later.');
        setLoading(false);
      }
    };

    fetchMostOrderedTour();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : mostOrderedTour ? (
          <p>
            The most frequently ordered tour is: {mostOrderedTour.tourName}
          </p>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div>
        perbaiki di dashboard ini, di halaman service itu tambah page baru buat detail tournya, di halaman user di bagian booking-success perbaiki
      </div>
    </>
  );
}

export default Home;
