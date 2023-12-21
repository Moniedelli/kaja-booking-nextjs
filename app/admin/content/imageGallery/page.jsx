'use client'

import Image from 'next/image';

const ImageGallery = ({ imageSrc }) => {
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
