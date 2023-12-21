'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ImageGallery = () => {
  const router = useRouter();
  const { images } = router.query;

  if (!images) {
    return <div>Loading...</div>;
  }

  const imageSrc = JSON.parse(images.replaceAll('%22', '"'));

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {imageSrc.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Image ${index}`} width={300} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
