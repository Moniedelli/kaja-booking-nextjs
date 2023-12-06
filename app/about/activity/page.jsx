'use client'
import React from 'react';
import FooterComponent from '@/app/components/footer/footer';
import ClientOnly from '@/app/components/ClientOnly';

const AboutActivities = () => {
  return (
    <ClientOnly>
      <div className="py-4 pb-4 sm:p-5 md:p-6 text-white">
        Ini Aktifitas KAJA
        <FooterComponent />
      </div>
    </ClientOnly>
  );
}

export default AboutActivities;
