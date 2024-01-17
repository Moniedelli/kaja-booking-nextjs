'use client';
// ImageUpload.js
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

const uploadPreset = "iwetgi5b";

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback((result) => {
    // Replace all previous images with the new image
    onChange([result.info.secure_url]);
  }, [onChange]);

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
            <div key={index} className="relative inset-0 w-full h-full">
              <Image
                fill
                style={{ objectFit: 'cover' }}
                src={image}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
