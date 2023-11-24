'use client'
import React from 'react';
import FooterComponent from '../components/footer/footer';
import AboutPages from './components/accordion'
import ClientOnly from '../components/ClientOnly';
import MemberKaja from './components/MembersKaja';

const AboutPage = () => {
  return (
    <ClientOnly>
      <div className="py-4 pb-4 sm:p-5 md:p-6">
        <h2 className='text-gray-300 text-4xl font-extrabold text-center pb-8 pt-4'>KALDERA JEEP ADVENTURE</h2>
        <div className='text-center pb-4 text-gray-400'>
          <span className='font-bold'>Looking for the best places and activities during your vacation in Bali?</span> You have to consider Kintamani with the Batur Caldera Geopark as one of the most favourite place of interest to visit. Kintamani has the best sunrise spot from the top of Mt. Batur, the frozen black lava field, the black sandy slope of Mt. Batur and some other spots around the caldera edges. The landscape around the caldera is very picturesque, a perfect place for photography lovers. Some activities can be chosen to explore the beauty of the caldera, such as Mt Batur trekking, jeep tour, and also the natural hot spring, offering a memorable vacation of a lifetime.
        </div>
        <div className='flex gap-5 justify-center p-5'>
          <MemberKaja />
          <MemberKaja />
          <MemberKaja />
        </div>
        <AboutPages />
        <FooterComponent />
      </div>
    </ClientOnly>
  );
}

export default AboutPage;