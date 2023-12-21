'use client'
import React from 'react';
import FooterComponent from '../components/footer/footer';
import AboutPages from './components/accordion'
import ClientOnly from '../components/ClientOnly';
import MemberKaja from './components/MembersKaja';

const AboutPage = () => {
  return (
    <ClientOnly>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        </div>
      </div>
      <div className="py-4 pb-4 sm:p-5 md:p-6">
        <h2 className='text-gray-300 text-4xl font-extrabold text-center pb-8 pt-4'>KALDERA JEEP ADVENTURE</h2>
        <div className='text-center pb-4 text-gray-400 px-28'>
          <span className='font-bold'>Looking for the best places and activities during your vacation in Bali?</span> You have to consider Kintamani with the Batur Caldera Geopark as one of the most favourite place of interest to visit. Kintamani has the best sunrise spot from the top of Mt. Batur, the frozen black lava field, the black sandy slope of Mt. Batur and some other spots around the caldera edges. The landscape around the caldera is very picturesque, a perfect place for photography lovers. Some activities can be chosen to explore the beauty of the caldera, such as Mt Batur trekking, jeep tour, and also the natural hot spring, offering a memorable vacation of a lifetime.
        </div>
        <div className='text-center pb-4 text-gray-400 px-28'>
        For those  sun rise lovers who are lazy to walk hiking up the mountain, don’t worry, you have another way to get it. Another popular sunrise spot  at Bubung Gede can be your best option. This place is accessible by car. The 4WD Jeep Adventure Team will be ready for you with their best service. Our team will lead you to one of the best sunrise spot located on the northeastern Batur Caldera. From this spot, visitors will be able to enjoy the sunrise with three mountain which are Mt Abang, Mt Agung and Mt Rinjani in Lombok and also in the opposite side, the lake Batur and the Mt Batur are presenting another spectacular view of nature. On the way back, our 4WD jeep Adventure team will Bring you off-road through the local villagers farming field and the forest around the caldera. TOYA DEVASYA is also very popular place to visit. It has a Natural hot spring. Soaking your body to help your muscle to relax after some physical activities is an absolute option. Enjoying the pool with the lake Batur as the background while drinking your favourite drink with your lovely one…….amazing. Breakfast and lunch also available.
        </div>
        <div className='text-center pb-4 text-gray-400 px-28'>
        Last but not least guys, you should know that the caldera batur area is a favourite place for couple who are preparing their pre wedding picture.The natural beauty of batur caldera with its black lava field,black sand dunes , mt batur, lake batur are presenting a unique and beautiful background combined with the jeep  car which is not only as the transportation but as a picture background as well. This is very interesting, isn’t it? You get your pre wedding picture done and you have a great experience exploring the caldera by 4WD jeep car at once. We highly recommend this benefit for everyone. The 4WD jeep team is ready to serve you.
        </div>
        <div className="stats shadow flex justify-center mx-40">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <div className='flex gap-5 justify-center p-5'>
          <MemberKaja />
          <MemberKaja />
          <MemberKaja />
        </div>
        <FooterComponent />
      </div>
    </ClientOnly>
  );
}

export default AboutPage;