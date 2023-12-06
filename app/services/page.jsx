'use client'

import React from 'react';
import FooterComponent from '../components/footer/footer';
import PlaceCard from '../admin/components/PlaceCard';

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-start max-w-screen-xl mx-auto">
      <div className='flex justify-center gap-5 py-10'>
        <PlaceCard />
      </div>
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
