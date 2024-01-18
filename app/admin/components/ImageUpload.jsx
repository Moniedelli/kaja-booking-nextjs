'use client';
// ImageUpload.js
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

const uploadPreset = "iwetgi5b";

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = (result) => {
    // Append the new image to the existing images
    onChange([...value, result.info.secure_url]);
  };

  const handleRemove = (index) => {
    // Remove the image at the specified index
    const updatedImages = [...value];
    updatedImages.splice(index, 1);
    onChange(updatedImages);
  };

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 5
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed
            border-2
            p-20
            border-neutral-500
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-neutral-500
          "
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">
            Click to upload
          </div>
          {Array.isArray(value) && value.map((image, index) => (
            <div key={index} className="relative inline-block">
              <Image
                src={image}
                alt={`Image ${index}`}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <button
                onClick={() => handleRemove(index)}
                className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full cursor-pointer"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
