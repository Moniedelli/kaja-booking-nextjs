"use client";

import Image from "next/image";
import MidtransPayment from "../../components/Midtrans";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiMail } from 'react-icons/hi';
import { Label, TextInput } from 'flowbite-react';
import PaypalButton from "@/app/components/Paypal";
import Loading from "@/app/components/Loading";

const Payment = ({ params: { id } }) => {
  const [tour, setTour] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const getTourDetail = async () => {
      try {
        const response = await axios.get(`/api/tour/${id}`);
        setTour(response.data);
      } catch (error) {
        console.error('Error fetching tour details:', error);
      }
    };

    if (id) {
      getTourDetail();
    }
  }, [id]);

  useEffect(() => {
    // render midtrans snap token
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT_MIDTRANS;
    const script = document.createElement('script');
    script.src = snapScript;
    script.setAttribute('data-client-key', clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleDateChange = (event) => {
    // Update the selected date when the user picks a date
    setSelectedDate(event.target.value);
  };

  return (
    <>
      {tour ? (
        <main className="max-w-xl mx-auto sm:p-28 text-white">
          <div className="flex justify-center gap-5">
            <Image
              src={tour.imageSrc}
              alt="..."
              width={250}
              height={250}
              className="w-full object-cover rounded-lg"
            />
            <div className="grid-cols-1 md:grid-cols-2 gap-4 flex border border-gray-500 rounded-lg bg-black">
              <div className="text-white p-6">
                Ini identitas
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="email4" value="Your email" />
                  </div>
                  <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
                </div>
              </div>
              <div className="text-white font-semibold p-6">
                <h3 className="mt-4 text-lg font-medium">
                  {tour.tourName}
                </h3>
                <p className="mt-1.5 text-2xl text-white">$ {tour.price}</p>
                <div className="mt-4">
                  <label htmlFor="datepicker" className="block text-sm font-medium text-white bg-black">
                    Select date for booking tour
                  </label>
                  <input
                    type="date"
                    id="datepicker"
                    name="datepicker"
                    onChange={handleDateChange}
                    className="mt-1 p-2 mb-4 border border-gray-300 text-white bg-black rounded-md"
                  />
                </div>
                {selectedDate && (
                  <p className="mt-1.5 text-sm text-gray-100">
                    Booking Date: {selectedDate}
                  </p>
                )}
                <MidtransPayment tour={tour} selectedDate={selectedDate} />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Payment;
