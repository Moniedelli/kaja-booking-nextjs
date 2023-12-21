// Import yang diperlukan
import { Button, Carousel } from "flowbite-react";
import ClientOnly from "./ClientOnly";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import FooterComponent from "./footer/footer";

function TourDetail({ tour }) {
  const {
    tourName,
    description,
    capacity,
    price,
    imageSrc,
  } = tour;

  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('description');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <ClientOnly>
      <div className="px-28 text-gray-300">
        <h2 className="text-2xl font-bold py-5">{tourName}</h2>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
        <div className="pt-5">
          <Link href={`/payment/${id}`}>
            <Button>Book now</Button>
          </Link>
        </div>

        <div>
          <div className="tabs tabs-lifted text-gray-300 pt-5">
            <a
              role="tab"
              className={`tab ${activeTab === 'description' ? 'tab-active' : ''}`}
              onClick={() => showTab('description')}
            >
              Detail info
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === 'detailInfo' ? 'tab-active' : ''}`}
              onClick={() => showTab('detailInfo')}
            >
              Itinerary
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === 'note' ? 'tab-active' : ''}`}
              onClick={() => showTab('note')}
            >
              Include & Exclude
            </a>
          </div>

          <div className="flex justify-center pt-5">
            {activeTab === 'description' && (
              <div>
                <p>{description} + Detail info</p>
              </div>
            )}
            {activeTab === 'detailInfo' && (
              <div>
                <div>
                  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                      <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                      </div>
                      <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">Jadwal peerjalanan</time>
                        <div className="text-lg font-black">First Macintosh computer</div>
                        The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                      </div>
                      <hr/>
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                      </div>
                      <div className="timeline-end mb-10">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                      </div>
                      <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2001</time>
                        <div className="text-lg font-black">iPod</div>
                        The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                      </div>
                      <div className="timeline-end mb-10">
                        <time className="font-mono italic">2007</time>
                        <div className="text-lg font-black">iPhone</div>
                        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                      </div>
                      <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2015</time>
                        <div className="text-lg font-black">Apple Watch</div>
                        The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'note' && (
              <div>
                Include
                Exclude berupa list
              </div>
            )}
          </div>
        </div>
      </div>
      <FooterComponent />
    </ClientOnly>
  )
}

export default TourDetail;

// 'use client'

// import { Button } from 'flowbite-react';

// const JobDetail = ({ job }) => {
//   const {
//     posisi_pekerjaan,
//     deskripsi,
//     lokasi,
//     gaji,
//     jenis_pekerjaan,
//     tgl_posting,
//     company,
//   } = job;

//   const formattedDate = new Date(tgl_posting).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//   });

//   return (
//     <div className='p-10 border rounded-md shadow-md'>
//       <h2 className='text-2xl font-bold'>{posisi_pekerjaan}</h2>
//       <p className='text-gray-600 mt-2'>{lokasi}</p>
//       <p className='text-gray-600 mt-2'>{formattedDate}</p>

//       <div className='mt-4'>
//         <h3 className='text-lg font-semibold'>Job Description</h3>
//         <p>{deskripsi}</p>
//       </div>

//       <div className='mt-4'>
//         <h3 className='text-lg font-semibold'>Salary</h3>
//         <p>{gaji}</p>
//       </div>

//       <div className='mt-4'>
//         <h3 className='text-lg font-semibold'>Job Type</h3>
//         <p>{jenis_pekerjaan}</p>
//       </div>

//       <div className='mt-4'>
//         <h3 className='text-lg font-semibold'>Company Information</h3>
//         <p>{company?.nama_perusahaan}</p>
//         {/* Add more company information as needed */}
//       </div>

//       <div className='mt-6'>
//         <Button outline gradientDuoTone="greenToBlue">
//           Apply Now
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default JobDetail;