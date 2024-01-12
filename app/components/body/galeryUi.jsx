'use client'

import { Carousel } from "flowbite-react";
import Image from "next/image";

const GaleryUi = () => {
  return (
    <>
      <div className="px-28 bg-zinc-950 py-20">
        <div className="h-96 sm:h-96 xl:h-96 2xl:h-96">
          <Carousel>
            <img src="/images/About.png" alt="..." />
            <img src="/images/About2.png" alt="..." />
            <img src="/images/About3.png" alt="..." />
            <img src="/images/About4.png" alt="..." />
          </Carousel>
        </div>
        <h2 className="px-28 pt-10 text-center">Black Lava Park Batur Global Geopark in Kintamani is proof of the exoticism of the mighty lava flow of Mount Batur which makes everything in its path black and petrified when it gets cold.</h2>
      </div>
    </>
  )
}

export default GaleryUi;