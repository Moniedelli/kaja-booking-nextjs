'use client'
import React from 'react';
import FooterComponent from '@/app/components/footer/footer';
import ClientOnly from '@/app/components/ClientOnly';

const AboutQualities = () => {
  return (
    <ClientOnly>
      <div className="py-4 pb-4 sm:p-5 md:p-6 text-white">
        Ini Kualitas Kaja
      </div>
    </ClientOnly>
  );
}

export default AboutQualities;
