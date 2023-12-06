'use client'

import { Button } from "flowbite-react";
import ClientOnly from "./ClientOnly";
import { useParams } from "next/navigation";
import Link from "next/link";

function TourDetail({ tour }) {
  const {
    tourName,
    capacity,
    price,
    imageSrc,
  } = tour;

  const { id } = useParams();

  return (
    <ClientOnly>
      <div className='pb-10 rounded flex gap-10 text-white'>
        Ini Tour detail dari {tourName}
      </div>
      <Link href={`/payment/${id}`}>
        <Button>Book now</Button>
      </Link>
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
