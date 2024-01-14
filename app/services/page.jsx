'use client'

import React from 'react';
import FooterComponent from '../components/footer/footer';
import Image from 'next/image';
import ServiceTour from '../components/ServiceTour';
import ButtonListTour from '../components/ButtonListTour';

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-start text-gray-300 pt-28">
      <div className='flex justify-between pb-20'>
        <div className='ml-10 flex-row space-y-64'>
          <div>
            <h2 className='text-3xl font-bold'>KAJA<span className='font-thin'> Services</span></h2>
            <h2 className='pt-5 text-sm text-gray-600'>There are services that given by us. Click for more informastion!</h2>
            <ButtonListTour />
          </div>
          <p className='mt-2 mr-16'>We offer a wide range of services to help you plan your next trip. From planning the perfect vacation. We offer a wide range of services to help you plan your next trip. From planning the perfect vacation</p>
        </div>
        <div className="carousel carousel-center max-w-md p-4 mr-10 space-x-4 bg-zinc-950 rounded-box">
          <div className="carousel-item">
            <Image width={300} height={300} src="/images/jeep1.png" alt='' className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <Image width={300} height={300} src="/images/jeep2.png" alt='' className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <Image width={300} height={300} src="/images/jeep3.png" alt='' className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <Image width={300} height={300} src="/images/jeep4.png" alt='' className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <Image width={300} height={300} src="/images/jeep5.png" alt='' className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <Image width={300} height={300} src="/images/jeep6.png" alt='' className="rounded-box" />
          </div> 
          <div className="carousel-item">
            <Image width={300} height={300} src="/images/jeep7.png" alt='' className="rounded-box" />
          </div>
        </div>
      </div>
      <div>
        <ServiceTour />
      </div>
      <div className='py-20 bg-zinc-950 my-10 px-16'>
        <div className='flex gap-10'>
          <div className='bg-zinc-900 text-zinc-950 p-5 rounded-2xl'>
            <div className="collapse bg-yellow mb-3 glass">
              <input type="checkbox" id="collapse1" />
              <label htmlFor="collapse1" className="collapse-title text-xl font-medium">
                Include
              </label>
              <div className="collapse-content">
                <div className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                  </svg>
                  <p>Breakfast</p>
                </div>
                <div className='flex gap-2 pt-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                  <p>Coffee</p>
                </div>
              </div>
            </div>
            <div className="collapse bg-yellow glass">
              <input type="checkbox" id="collapse2" />
              <label htmlFor="collapse2" className="collapse-title text-xl font-medium">
                Exclude
              </label>
              <div className="collapse-content flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
                <p>Destination Area Ticket</p>
              </div>
            </div>
          </div>
          <ul className="timeline timeline-vertical bg-zinc-900 p-5 rounded-2xl">
            <li>
              <div className="timeline-start timeline-box bg-zinc-950">Professional skill driving a jeep</div>
              <hr className='bg-zinc-950'/>
            </li>
            <li>
              <hr className='bg-zinc-950'/>
              <div className="timeline-end timeline-box bg-zinc-950">English communication</div>
              <hr className='bg-zinc-950'/>
            </li>
            <li>
              <hr className='bg-zinc-950'/>
              <div className="timeline-start timeline-box bg-zinc-950">Friendly interaction</div>
              <hr className='bg-zinc-950'/>
            </li>
            <li>
              <hr className='bg-zinc-950'/>
              <div className="timeline-end timeline-box bg-zinc-950">Good explanation to the Caldera Batur</div>
              <hr className='bg-zinc-950'/>
            </li>
            <li>
              <hr className='bg-zinc-950'/>
              <div className="timeline-end timeline-box bg-zinc-950">First aid</div>
              <hr className='bg-zinc-950'/>
            </li>
            <li>
              <hr className='bg-zinc-950'/>
              <div className="timeline-start timeline-box bg-zinc-950">Warm services and quick backup when there is demage</div>
            </li>
          </ul>
        </div>
      </div>

      <div className='px-20'>
        <h2 className='text-4xl font-semibold py-5'>Note</h2>
        <p>Before starting your adventure with Kaja Jeep, make sure you have made thorough preparations by checking the jeep and safety equipment. Get to know the travel route to enjoy every corner of the amazing views. Adjust your clothes and bring equipment according to the weather. Follow the drivers instructions and keep the environment clean. Tours using a jeep is not just a trip, but an opportunity to share experiences with fellow participants. Enjoy every second, capture beautiful moments, and create unforgettable memories during the trip.</p>
      </div>
      <FooterComponent />
    </div>
  );
}

export default AboutPage;
