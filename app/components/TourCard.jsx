'use client'
import { Card } from 'flowbite-react';
import Image from 'next/image';
import ClientOnly from './ClientOnly';
import { Tour } from '@prisma/client';
import { SafeUser } from '../types';


const TourCard = ({
  data,
  onAction,
  disable,
  actionLabel,
  actionId,
  currentUser,
}) => {
  return (
    <ClientOnly>
      <div className='pb-10 rounded flex gap-10'>
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/16986836/pexels-photo-16986836/free-photo-of-illuminated-city-at-night.jpeg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </ClientOnly>
  )
}

export default TourCard;