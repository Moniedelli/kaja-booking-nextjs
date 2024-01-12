'use client'
import React from 'react';
import FooterComponent from '@/app/components/footer/footer';
import ClientOnly from '@/app/components/ClientOnly';
import Activity from '@/app/components/about/activity/Activity';

const AboutActivities = () => {
  return (
    <ClientOnly>
      <div className="pt-7">
        <Activity />
        <FooterComponent />
      </div>
    </ClientOnly>
  );
}

export default AboutActivities;
