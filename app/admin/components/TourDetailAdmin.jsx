// TourDetailAdmin.js
import React from 'react';
import ClientOnly from "@/app/components/ClientOnly";
import Image from "next/image";
import EditTour from "./EditTour";
import ImageUpload from "./ImageUpload";
import { useState } from "react";

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const TourDetailAdmin = ({ tour }) => {
  const {
    tourName,
    description,
    price,
    location,
    note,
    itinerary,
  } = tour;

  const [imageSrc, setImageSrc] = useState(tour.imageSrc);

  const handleImageChange = async (newImageSrc) => {
    try {
      // Update the image directly in the database
      await axios.patch(`/api/admin/content/${tour.id}`, {
        imageSrc: newImageSrc,
      });

      // If the database update is successful, update the local state
      setImageSrc(newImageSrc);
      toast.success('Image updated successfully');
    } catch (error) {
      console.error('Error updating image:', error);
      toast.error('Failed to update image');
    }
  };

  return (
    <ClientOnly>
      <div className="px-5 text-gray-300">
        <div className="flex items-center justify-between pb-5">
          <h2 className="text-2xl font-bold">Detail {tourName}</h2>
          <EditTour tour={tour} />
        </div>
        <div className="bg-zinc-800 p-10 rounded-lg">
          <div>
            <h2 className="text-xl font-semibold pb-3">Location</h2>
            <p>{tour.location}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Description</h2>
            <p>{tour.description}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Price</h2>
            <p>Rp {formatPrice(tour.price)} /person</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Itinerary</h2>
            <p>{tour.itinerary}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Note</h2>
            <p>{tour.note}</p>
          </div>

          <div className="pt-10">
            <h2 className="text-xl font-semibold pb-3">Image</h2>
            <ImageUpload onChange={handleImageChange} value={imageSrc} />
            <div className=" flex flex-col justify-center gap-3">
              {Array.isArray(imageSrc) && imageSrc.map((src, index) => (
                <div key={index} className="relative inline-block">
                  <Image
                    className="rounded-lg"
                    src={src}
                    width={1000}
                    height={1000}
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

export default TourDetailAdmin;
