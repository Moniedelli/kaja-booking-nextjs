'use client'
import React from 'react';
import FooterComponent from '../components/footer/footer';
import AboutPages from './components/accordion'
import ClientOnly from '../components/ClientOnly';
import MemberKaja from './components/MembersKaja';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <ClientOnly>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="/images/About.png" className="w-full" />
        </div>
      </div>
      <div className="pt-4 -mt-44">
        <h2 className='text-gray-100 text-7xl font-extrabold text-center pb-28 pt-4'>KALDERA JEEP ADVENTURE</h2>
        <div className='pb-4 text-gray-400 px-28 text-left'>
          <h2 className='text-2xl font-bold pb-5'>A Must-Visit Destination in Bali</h2>
          <p>Renowned for its stunning sunrise view from the summit of Mt. Batur, the area boasts a frozen black lava field, the rugged black sandy slopes of Mt. Batur, and various spots around the caldera edges. Perfect for photography enthusiasts, the picturesque landscape offers a memorable experience.</p>
          <p>Immerse yourself in activities that showcase the beauty of caldera, including Mt. Batur trekking, a thrilling jeep tour, and a relaxing soak in natural hot springs. These activities promise a vacation of a lifetime, combining adventure and tranquility.</p>
        </div>

        <div className="flex flex-col w-full lg:flex-row px-28 my-10">
          <div className="grid flex-grow h-32 card bg-yellow rounded-box place-items-center font-semibold text-xl glass">Exploring Black Lava</div> 
          <div className="divider lg:divider-horizontal">AND</div> 
          <div className="grid flex-grow h-32 card bg-yellow rounded-box place-items-center font-semibold text-xl">Relaxed Sunrise at Bubung Gede</div>
        </div>

        <div className='pb-4 text-gray-400 px-28 text-left'>
        For couples preparing their pre-wedding photos, the Batur caldera area becomes an ideal backdrop. The natural beauty of the caldera, featuring black lava fields, black sand dunes, Mt. Batur, and Lake Batur, creates a unique and enchanting atmosphere. The 4WD jeep car, serving both as transportation and a picturesque background, adds an interesting element to the photoshoot. This offers couples a memorable experience exploring the caldera by 4WD jeep.
        </div>
        <div className='pb-10 text-gray-400 px-28 text-left'>
        Whether seeking an adrenaline-pumping adventure or a serene escape, the Batur Caldera Geopark in Kintamani offers a diverse range of experiences. The 4WD jeep team is ready to serve you, ensuring a journey filled with awe-inspiring landscapes and unforgettable moments.
        </div>
        <div className='bg-zinc-950 my-5'>
          <div className='flex gap-5 justify-center p-5'>
            <MemberKaja />
          </div>
        </div>
        <h2 className='text-3xl font-semibold pl-28 mt-10 mb-10 text-zinc-300'>Insurance</h2>
        <div className='flex justify-center'>
          <Image src={`https://otomotifzone.com/wp-content/uploads/2020/05/Logo-IOF.png`} width={300} height={100} alt='' />
        </div>
        <h2 className='text-lg mt-10 mb-10 text-zinc-300 text-center'>Several types of insurance</h2>
        <div className='flex justify-center gap-5 pb-10 px-28'>
          <div className="card w-80 bg-yellow glass shadow-xl">
            <div className="card-body items-center text-center flex justify-center">
              <h2 className="card-title font-normal text-lg items-center">Death due to an accident</h2>
            </div>
          </div>
          <div className="card w-80 bg-yellow shadow-xl glass">
            <div className="card-body items-center text-center flex justify-center">
              <h2 className="card-title font-normal text-lg items-center">Permanent disability due to an accident</h2>
            </div>
          </div>
          <div className="card w-80 bg-yellow shadow-xl glass">
            <div className="card-body items-center text-center flex justify-center">
              <h2 className="card-title font-normal text-lg items-center">Medical costs due to an accident</h2>
            </div>
          </div>
          <div className="card w-80 bg-yellow shadow-xl glass">
            <div className="card-body items-center text-center flex justify-center">
              <h2 className="card-title font-normal text-lg items-center">Assistance with funeral costs for those who died</h2>
            </div>
          </div>
        </div>
        
        <div className='bg-zinc-950 pb-5 '>
          <svg xmlns="http://www.w3.org/2000/svg" width="1300" height="368" viewBox="0 0 1439 368" fill="none">
            <path d="M3.5 366C45.3333 297.5 213.9 191.2 553.5 314C893.1 436.8 1285 157.833 1438.5 3" stroke="url(#paint0_linear_13_66)" stroke-opacity="0.13" stroke-width="6"/>
            <defs>
              <linearGradient id="paint0_linear_13_66" x1="1438.5" y1="3.86474" x2="3.5" y2="3.86467" gradientUnits="userSpaceOnUse">
                <stop stop-color="#343045"/>
                <stop offset="0.348958" stop-color="#C0B7E8"/>
                <stop offset="0.6875" stop-color="#8176AF"/>
                <stop offset="1" stop-color="#343045"/>
              </linearGradient>
            </defs>
          </svg>
          <div className='bg-zinc-950 px-28 -mt-80'>
            <div className='flex gap-96 items-center flex-row-reverse'>
              <div className='flex-shrink-0'>
                <Image width={500} height={500} src='/images/Basecamp1-.png' className='rounded-bl-3xl rounded-tl-3xl rounded-br-3xl' alt='basecamp' />
              </div>
              <h2 className='text-3xl font-semibold mt-7'>Basecamp</h2>
            </div>
            <div className='flex gap-20 py-5 -mt-14 items-center'>
              <div className="w-96 carousel rounded-box flex-shrink-0">
                <div className="carousel-item w-full">
                  <Image width={500} height={500} src='/images/Basecamp3.png' className='rounded-tl-3xl' alt='basecamp' />
                </div> 
                <div className="carousel-item w-full">
                  <Image width={500} height={500} src='/images/Basecamp2.png' className='rounded-tl-3xl' alt='basecamp' />
                </div> 
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aperiam laudantium debitis excepturi, quaerat eos blanditiis expedita sint libero sunt facilis amet exercitationem, dolor, cum in fugit eveniet similique ad.</p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <h2 className='text-3xl font-semibold text-zinc-300 pl-28 pt-10 pb-16'>Facilities</h2>
        <div className='mt-5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1300" height="169" viewBox="0 0 1440 169" fill="none">
            <path d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768" stroke="url(#paint0_linear_11_136)" stroke-width="6"/>
            <defs>
              <linearGradient id="paint0_linear_11_136" x1="0.49999" y1="84.9999" x2="1440" y2="84.9998" gradientUnits="userSpaceOnUse">
                <stop stop-color="#18181b"/>
                <stop offset="0.302083" stop-color="#52525b"/>
                <stop offset="0.739583" stop-color="#3f3f46"/>
                <stop offset="1" stop-color="#18181b"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='flex gap-10 justify-center text-zinc-400 -mt-40 mb-20'>
          <div className='bg-zinc-950 rounded-full w-48 h-48 flex justify-center items-center'>
            <div className='orange glass rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
              <h2>Basecamp</h2>
            </div>
          </div>
          <div className='bg-zinc-950 rounded-full w-48 h-48 flex justify-center items-center'>
            <div className='orange glass rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <h2>Toilet</h2>
            </div>
          </div>
          <div className='bg-zinc-950 rounded-full w-48 h-48 flex justify-center items-center'>
            <div className='orange glass rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
              </svg>
              <h2>Wifi</h2>
            </div>
          </div>
          <div className='bg-zinc-950 rounded-full w-48 h-48 flex justify-center items-center'>
            <div className='orange glass rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h2>Jeep</h2>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </ClientOnly>
  );
}

export default AboutPage;