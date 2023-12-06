"use client";

import Image from "next/image";
import MidtransPayment from "../../components/Midtrans";
import { useEffect, useState } from "react";
import axios from "axios";
import PaypalButton from "@/app/components/Paypal";

const Payment = ({ params: {id}}) => {
  const [tour, setTour] = useState(null);

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
    }
  }, []);

  return (
    <>
      {tour ? (
        <main className="max-w-xl mx-auto sm:p-16 text-white">
          <div className="flex flex-col">
            <Image
              src={tour.imageSrc}
              alt="..."
              width={250}
              height={250}
              className="w-full object-cover"
            />
            <div className="border border-gray-100 bg-white p-6">
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {tour.tourName}
              </h3>
              <p className="mt-1.5 text-sm text-gray-700">$ {tour.price}</p>
              <p className="py-4 text-sm text-gray-700 text-justify">
                {tour.capacity}
              </p>
              <MidtransPayment tour={tour} />
            </div>
          </div>
        </main>
      ) : (
        <p>Loading payment...</p>
      )}
    </>
  );
}

export default Payment;