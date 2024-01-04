'use client'

import { Carousel } from "flowbite-react";
import Image from "next/image";

const GaleryUi = () => {
  return (
    <>
      <div className="px-28">
        <div className="h-96 sm:h-96 xl:h-96 2xl:h-96">
          <Carousel>
            <img src="/images/About.png" alt="..." />
            <img src="/images/About2.png" alt="..." />
            <img src="/images/About3.png" alt="..." />
            <img src="/images/About4.png" alt="..." />
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default GaleryUi;