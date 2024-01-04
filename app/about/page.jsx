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
      <div className="py-4 -mt-44">
        <h2 className='text-gray-100 text-7xl font-extrabold text-center pb-28 pt-4'>KALDERA JEEP ADVENTURE</h2>
        <div className='pb-4 text-gray-400 px-28 text-left'>
          <span className='font-bold'>Looking for the best places and activities during your vacation in Bali?</span> You have to consider Kintamani with the Batur Caldera Geopark as one of the most favourite place of interest to visit. Kintamani has the best sunrise spot from the top of Mt. Batur, the frozen black lava field, the black sandy slope of Mt. Batur and some other spots around the caldera edges. The landscape around the caldera is very picturesque, a perfect place for photography lovers. Some activities can be chosen to explore the beauty of the caldera, such as Mt Batur trekking, jeep tour, and also the natural hot spring, offering a memorable vacation of a lifetime.
        </div>
        <div className='pb-4 text-gray-400 px-28 text-left'>
        The Black Lava field and the Black Sand are two places of interest with are close to each other. Those places are very popular and unique.. The Black Lava is the frozen lava field from the eruption in the year of 1883 and 1963 and known as the only one ever found in the southeast Asia. The 4WD jeep adventure team is ready to serve you with their open air 4WD jeep driving through a narrow off-road trek along side the black lava field. This adventure activity is very safe and easy.Taking picture with the background of black lava and Mt. Batur is what most visitors love to do. After the Black lava, the adventure trip will continue to the next destination which is the Black sand. The black sand dune is very beautiful place and unique. The  black volcanic sand is rough, not like the soft black sands on the beach. It is a nice place to take pictures or just to relax enjoying the natural beauty of Mt. Batur.
        </div>
        <div className='pb-4 text-gray-400 px-28 text-left'>
        Last but not least guys, you should know that the caldera batur area is a favourite place for couple who are preparing their pre wedding picture.The natural beauty of batur caldera with its black lava field,black sand dunes , mt batur, lake batur are presenting a unique and beautiful background combined with the jeep  car which is not only as the transportation but as a picture background as well. This is very interesting, isn’t it? You get your pre wedding picture done and you have a great experience exploring the caldera by 4WD jeep car at once. We highly recommend this benefit for everyone. The 4WD jeep team is ready to serve you.
        </div>
        <div className='pb-4 text-gray-400 px-28 text-left'>
        For those  sun rise lovers who are lazy to walk hiking up the mountain, don’t worry, you have another way to get it. Another popular sunrise spot  at Bubung Gede can be your best option. This place is accessible by car. The 4WD Jeep Adventure Team will be ready for you with their best service. Our team will lead you to one of the best sunrise spot located on the northeastern Batur Caldera. From this spot, visitors will be able to enjoy the sunrise with three mountain which are Mt Abang, Mt Agung and Mt Rinjani in Lombok and also in the opposite side, the lake Batur and the Mt Batur are presenting another spectacular view of nature.
        On the way back, our 4WD jeep Adventure team will Bring you off-road through the local villagers farming field and the forest around the caldera.
        </div>
        <div className='pb-4 text-gray-400 px-28 text-left'>
        Last but not least guys, you should know that the caldera batur area is a favourite place for couple who are preparing their pre wedding picture.The natural beauty of batur caldera with its black lava field,black sand dunes , mt batur, lake batur are presenting a unique and beautiful background combined with the jeep  car which is not only as the transportation but as a picture background as well. This is very interesting, isn’t it? You get your pre wedding picture done and you have a great experience exploring the caldera by 4WD jeep car at once. We highly recommend this benefit for everyone. The 4WD jeep team is ready to serve you.
        </div>
        <div className='bg-zinc-950 my-5'>
          <h2 className='text-3xl font-semibold pt-5 pl-28 text-gray-300'>Our Team</h2>
          <div className='flex gap-5 justify-center p-5'>
            <MemberKaja />
          </div>
        </div>
        <h2 className='text-3xl font-semibold pl-28 mt-10 mb-10'>Quality</h2>
        <div className='flex justify-center gap-5 pb-10'>
          <div className="card w-80 bg-zinc-950 shadow-xl">
            <figure className="px-10 pt-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pb-2 font-bold">PROFESSIONALS</h2>
              <p>Kaja  team is professionally working to meet and exceed every customers needs. We are fully knowledge related to the provided services and always having positive attitude. We are always attempting to build a high value of service to every customers.</p>
            </div>
          </div>
          <div className="card w-80 bg-zinc-950 shadow-xl">
            <figure className="px-10 pt-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
              </svg>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pb-2 font-bold">EXPERIENCED STAFF</h2>
              <p>Kaja team consists of experienced personnel, most of our staff have been involving in tourism business for more than 4 years. Our experienced team will deliver a professional and high values of service toward every customers.</p>
            </div>
          </div>
          <div className="card w-80 bg-zinc-950 shadow-xl">
            <figure className="px-10 pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title pb-2 font-bold">FULL SERVICE GARAGE</h2>
              <p>Kaja is providing full garage service to the customers and very flexible. Our customers satisfaction is our first priority and their safety as well. We always anticipate the customers needs punctually and professionally to meet and exceed its.</p>
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
        <h2 className='text-3xl font-semibold pl-28 pt-10 pb-16'>Facilities</h2>
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
            <div className='bg-black rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
              <h2>Basecamp</h2>
            </div>
          </div>
          <div className='bg-zinc-950 rounded-full w-48 h-48 flex justify-center items-center'>
            <div className='bg-black rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <h2>Toilet</h2>
            </div>
          </div>
          <div className='bg-zinc-950 rounded-full w-48 h-48 flex justify-center items-center'>
            <div className='bg-black rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
              </svg>
              <h2>Wifi</h2>
            </div>
          </div>
          <div className='bg-zinc-950 rounded-full w-48 h-48 flex justify-center items-center'>
            <div className='bg-black rounded-full w-44 h-44 flex flex-col justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h2>Jeep</h2>
            </div>
          </div>
        </div>
        <h2 className='text-3xl font-semibold pl-28 pt-10 pb-16'>Provide</h2>
        <div>

        </div>
        <FooterComponent />
      </div>
    </ClientOnly>
  );
}

export default AboutPage;