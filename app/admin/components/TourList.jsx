'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import EditTour from './EditTour';

const TourList = () => {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    const getPlace = async () => {
      try {
        const response = await axios('/api/admin/content/read');
        const places = await response.data;
        setPlaceData(places);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getPlace();
  }, []);
  
  return (
    <div className='text-gray-300'>
      <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Tour Name</th>
                <th>Location</th>
                <th>Description</th>
                <th>Capacity</th>
                <th>Price</th>
                <th>Itinerary</th>
                <th>Note</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {placeData.map((item) => (
                <tr key={item.id} placeData={item}>
                  <td>{item.id}</td>
                  <td>{item.tourName}</td>
                  <td>{item.location}</td>
                  <td>{item.description}</td>
                  <td>{item.capacity}</td>
                  <td>{item.price}</td>
                  <td>{item.itinerary}</td>
                  <td>{item.note}</td>
                  <td>
                    <div onClick={()=>document.getElementById(`my_modal1_${item.id}`).showModal()}>
                      <div className="tooltip" data-tip="see more">
                        <Image src={item.imageSrc[0]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={100} height={100} alt='' className='cursor-pointer'></Image>
                      </div>
                    </div>
                    <dialog id={`my_modal1_${item.id}`} className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <div className='flex justify-center gap-2 flex-col items-center mt-3'>
                          <Image src={item.imageSrc[0]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} alt='' className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[1]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} alt='' className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[2]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} alt='' className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[3]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} alt='' className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[4]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} alt='' className='rounded-2xl'></Image>
                        </div>
                      </div>
                    </dialog>
                  </td>
                  <td className='flex justify-center gap-2 pt-5'>
                    <EditTour placeData={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TourList;
