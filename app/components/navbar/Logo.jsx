'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <Image 
      onClick={() => router.push('/')}
        alt=''
        className='block mx-auto cursor-pointer'
        height={100}
        width={100}
        src="/images/logoKaja.png"
      />
    </div>
  );
};

export default Logo;