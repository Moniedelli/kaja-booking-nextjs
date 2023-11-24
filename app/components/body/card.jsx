'use client'
import { IToursParams } from '@/app/actions/getService';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getTours from '@/app/actions/getService';
import ClientOnly from '../ClientOnly';
import { useState, useEffect } from 'react';

const TourComponent = ({ searchParams }) => {
  const [tour, setTour] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTours = await getTours(searchParams);
        const fetchedCurrentUser = await getCurrentUser();

        setTour(fetchedTours);
        setCurrentUser(fetchedCurrentUser);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  
  )
}

export default TourComponent;