'use client'

import React from 'react';
import FooterComponent from '../components/footer/footer';
import { Button } from 'flowbite-react';
import PlaceCard from '../components/PlaceCard';

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-start max-w-screen-xl mx-auto text-gray-300 mt-5">
      <div className='flex justify-between pb-20'>
        <div className='ml-10 flex-row space-y-64'>
          <div>
            <h2 className='text-3xl font-bold'>KAJA<span className='font-thin'> Services</span></h2>
            <h2 className='pt-5 text-sm text-gray-600'>There are services that given by us. Click for more informastion!</h2>
            <div className='flex pt-2 gap-2'>
              <Button gradientDuoTone="redToYellow" pill>
                Sunrise Jeep Tour
              </Button>
              <Button gradientDuoTone="redToYellow" pill>
                Sunrise Jeep Tour
              </Button>
              <Button gradientDuoTone="redToYellow" pill>
                Sunrise Jeep Tour
              </Button>
            </div>
          </div>
          <p className='mt-2 mr-16'>We offer a wide range of services to help you plan your next trip. From planning the perfect vacation. We offer a wide range of services to help you plan your next trip. From planning the perfect vacation</p>
        </div>
        <div className="carousel carousel-center max-w-md p-4 mr-10 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
          </div>
        </div>
      </div>
      <PlaceCard />
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
