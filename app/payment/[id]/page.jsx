"use client";

import Image from "next/image";
import MidtransPayment from "../../components/Midtrans";
import { useEffect, useState } from "react";
import axios from "axios";
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
        <main className="text-gray-300 pt-20">
          <div className="mx-20 mt-10">
            <div className="card lg:card-side shadow-xl glass">
              <figure><Image src={tour.imageSrc[0]} width={650} height={650} className="-ml-10" alt="Album"/></figure>
              <div>
                <div className="card-body">
                  <h2 className="card-title">{tour.tourName}</h2>
                  <p>$ {tour.price}</p>
                  <div className="mt-4">
                    <label htmlFor="datepicker" className="block text-sm font-medium text-gray-300">
                      Select date for booking tour
                    </label>
                    <input
                      type="date"
                      id="datepicker"
                      name="datepicker"
                      onChange={handleDateChange}
                      className="mt-1 p-2 mb-4 bg-transparent rounded-md"
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
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Payment;
