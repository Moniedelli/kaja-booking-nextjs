// Import yang diperlukan
import { Button, Carousel } from "flowbite-react";
import ClientOnly from "./ClientOnly";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import FooterComponent from "./footer/footer";
import Image from "next/image";

function TourDetail({ tour }) {
  const {
    tourName,
    description,
    capacity,
    price,
    imageSrc,
    location,
    note,
    itinerary,
  } = tour;

  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('description');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <ClientOnly>
      <div className="px-28 text-gray-300 pt-20">
        <h2 className="text-2xl font-bold py-5">{tourName}</h2>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <Image src={imageSrc[0]} width={1000} height={1000} alt="..." />
            <Image src={imageSrc[1]} width={1000} height={1000} alt="..." />
            <Image src={imageSrc[2]} width={1000} height={1000} alt="..." />
            <Image src={imageSrc[3]} width={1000} height={1000} alt="..." />
            <Image src={imageSrc[4]} width={1000} height={1000} alt="..." />
          </Carousel>
        </div>
        <div className="flex pt-5 gap-1 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <h2>{location}</h2>
        </div>

        <div className="flex pt-5 gap-1 font-semibold">
          <h2>Capacity: minimum {capacity} people</h2>
        </div>

        <div className="flex pt-5 gap-1 font-semibold">
          <h2>Price: ${price} /pack</h2>
        </div>
        <div className="pt-5 flex justify-end">
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
              Description
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
              Note
            </a>
          </div>

          <div className="flex justify-center pt-5 text-gray-200">
            {activeTab === 'description' && (
              <div>
                <p>{description}</p>
              </div>
            )}
            {activeTab === 'detailInfo' && (
              <div>
                <div>
                  {itinerary}
                </div>
              </div>
            )}
            {activeTab === 'note' && (
              <div>
                <p>{note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-20">
        <FooterComponent />
      </div>
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
