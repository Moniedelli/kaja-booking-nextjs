'use client';

import Image from "next/image";

const Avatar = ({ src }) => {
  return ( 
    <Image 
      className="rounded-full" 
      height="40" 
      width="40" 
      alt="Avatar" 
      src={src || '/images/placeholder.jpg'}
    />
  );
}

export default Avatar;