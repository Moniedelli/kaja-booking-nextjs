import ClientOnly from "./ClientOnly";
import { useState } from "react";
import { useParams } from "next/navigation";
import FooterComponent from "./footer/footer";
import Image from "next/image";
import ConfirmBooking from "./ConfirmBooking";

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function TourDetail({ tour }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowISO = tomorrow.toISOString().split('T')[0]; 

  const {
    tourName,
    description,
    price,
    imageSrc,
    location,
    note,
    itinerary,
  } = tour;

  const { id } = useParams();

  const [activeTab, setActiveTab] = useState('itinerary');

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  const handleDateChange = (event) => {
    // Update the selected date when the user picks a date
    setSelectedDate(event.target.value);
  };

  return (
    <ClientOnly>
      <div className="px-28 text-gray-300 pt-20">
        <h2 className="text-2xl font-bold py-5">{tourName}</h2>
        <div className="flex py-2 gap-1 font-semibold underline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <h2>{location}</h2>
        </div>
        <div className="grid gap-2 grid-cols-[2fr_1fr]">
          <div>
            <Image className="aspect-square object-cover rounded-l-3xl" src={imageSrc[0]} width={1000} height={1000} alt="..." />
          </div>
          <div className="grid">
            <Image className="aspect-square object-cover rounded-tr-3xl" src={imageSrc[1]} width={1000} height={1000} alt="..." />
            <div className="overflow-hidden">
              <Image className="aspect-square object-cover rounded-br-3xl relative top-2" src={imageSrc[3]} width={1000} height={1000} alt="..." />
            </div>
          </div>
        </div>

        <div className="flex gap-10 pt-10">
          <div>
            <h2 className="text-xl font-semibold pb-3">Description</h2>
            <p>{tour.description}</p>
          </div>

          <div>
            <div className="card-body bg-zinc-800 rounded-2xl">
              <h2 className="card-title flex justify-center">Rp {formatPrice(tour.price)} /person</h2>
              <hr />
              <div className="flex gap-5">
                <div className="mt-4">
                  <label htmlFor="datepicker" className="block text-sm font-medium text-gray-300">
                    Select date for tour
                  </label>
                  <input
                    type="date"
                    id="datepicker"
                    name="datepicker"
                    onChange={handleDateChange}
                    min={tomorrowISO}
                    className="mt-1 p-2 bg-transparent rounded-md"
                  />
                </div>
                <ConfirmBooking tour={tour} selectedDate={selectedDate}  />
              </div>
              
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-2xl mt-10 px-28 py-10">
          <div>
            <div className="tabs tabs-lifted text-gray-300 text-xl font-semibold pt-5">
              <a
                role="tab"
                className={`tab ${activeTab === 'itinerary' ? 'tab-active' : ''}`}
                onClick={() => showTab('itinerary')}
              >
                ITINERARY
              </a>
              <a
                role="tab"
                className={`tab ${activeTab === 'note' ? 'tab-active' : ''}`}
                onClick={() => showTab('note')}
              >
                NOTE
              </a>
            </div>
  
            <div className="flex justify-center p-5 mt-5 text-sm rounded-lg text-gray-300">
              {activeTab === 'itinerary' && (
                <div>
                  <div>
                    {itinerary}
                  </div>
                </div>
              )}
              {activeTab === 'note' && (
                <div>
                  <p>{note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-10">
        <FooterComponent />
      </div>
    </ClientOnly>
  )
}

export default TourDetail;
