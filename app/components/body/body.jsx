'use client'

import { Carousel } from "flowbite-react";
import RatingReview from "./rating";
import PlaceCard from "@/app/admin/components/PlaceCard";

const Body = () => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pb-10">
        <Carousel slideInterval={3000}>
          <img src="https://images.pexels.com/photos/2803276/pexels-photo-2803276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
          <img src="https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
          <img src="https://images.pexels.com/photos/2711640/pexels-photo-2711640.jpeg?auto=compress&cs=tinysrgb&w=400" alt="..." />
          <img src="https://images.pexels.com/photos/2480616/pexels-photo-2480616.jpeg?auto=compress&cs=tinysrgb&w=400" alt="..." />
          <img src="https://images.pexels.com/photos/6016924/pexels-photo-6016924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
        </Carousel>
      </div>
      <PlaceCard />
      <RatingReview />
    </>
  )
}

export default Body;