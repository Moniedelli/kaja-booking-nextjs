'use client'
import React from 'react';
import FooterComponent from '@/app/components/footer/footer';
import ClientOnly from '@/app/components/ClientOnly';
import Activity from '@/app/components/about/activity/Activity';

const AboutActivities = () => {
  return (
    <ClientOnly>
      <div className="py-4 pb-4 sm:p-5 md:p-6 text-white">
        <Activity />
        <FooterComponent />
      </div>
    </ClientOnly>
  );
}

export default AboutActivities;
