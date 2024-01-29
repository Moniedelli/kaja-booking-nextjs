'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Most() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/admin/most')
      const data = await response.json()
      setTours(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <ul className='flex gap-2 py-5'>
        {tours.map((tour) => (
          <div key={tour.id} className="">
            <div className="card w-44 bg-base-300 shadow-xl hover:bg-base-200">
              <figure><img src={tour.imageSrc[0]} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title text-base">{tour.tourName}</h2>
                <div className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p className='text-xs'>{tour.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}