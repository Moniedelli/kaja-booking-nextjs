// pages/admin/dashboard.js (atau halaman lainnya)
'use client'
import React, { useState, useEffect } from 'react';
import { Label, Button } from 'flowbite-react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ImageUpload from './ImageUpload';

const TourList = ({ tourId }) => {
  const [placeData, setPlaceData] = useState([]);
  const [tourName, setTourName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0.0);
  const [duration, setDuration] = useState('');
  const [detailDescription, setDetailDescription] = useState('');
  const [detailInfo, setDetailInfo] = useState('');
  const [note, setNote] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [exclude, setExclude] = useState('');
  const [include, setInclude] = useState('');
  const [imageSrc, setImageSrc] = useState([]);
  const [submitMessage, setSubmitMessage] = useState(null);
  const router = useRouter();

  const fetchTourData = async (tourId) => {
    try {
      const response = await axios.get(`/api/admin/read/${tourId}`);
      const tourData = response.data;

      setTourName(tourData.tourName);
      setLocation(tourData.location);
      setDescription(tourData.description);
      setCapacity(tourData.capacity);
      setPrice(tourData.price);
      setDuration(tourData.duration);
      setDetailDescription(tourData.description)
      setDetailInfo(tourData.detailInfo);
      setNote(tourData.note);
      setItinerary(tourData.itinerary);
      setExclude(tourData.exclude);
      setInclude(tourData.include)
      setImageSrc(tourData.imageSrc);
    } catch (error) {
      console.error('Error fetching tour data:', error);
    }
  };

  useEffect(() => {
    const getPlace = async () => {
      try {
        const response = await axios('/api/admin/read');
        const places = await response.data;
        setPlaceData(places);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getPlace();
  }, [tourId]);

  useEffect(() => {
    // Fetch data of the selected tour for editing
    const fetchTourData = async (tourId) => {
      try {
        const response = await axios.get(`/api/admin/read/${tourId}`);
        const tourData = response.data;

        setTourName(tourData.tourName);
        setLocation(tourData.location);
        setDescription(tourData.description);
        setCapacity(tourData.capacity);
        setPrice(tourData.price);
        setDuration(tourData.duration);
        setDetailDescription(tourData.description)
        setDetailInfo(tourData.detailInfo);
        setNote(tourData.note);
        setItinerary(tourData.itinerary);
        setExclude(tourData.exclude);
        setInclude(tourData.include)
        setImageSrc(tourData.imageSrc);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchTourData();
  }, [tourId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      tourName,
      location,
      description,
      capacity,
      price,
      duration,
      detailDescription,
      detailInfo,
      note,
      itinerary,
      include,
      exclude,
      imageSrc
    };

    try {
      const response = await axios.put(`/api/tour/edit/${tourId}`, formDataToSend);
      const success = response.status >= 200 && response.status < 300;

      if (success) {
        console.log('Tour berhasil diupdate');
        setSubmitMessage(
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Tour updated successfully</div>
            <Toast.Toggle />
          </Toast>
        );

        // Optional: Redirect to the tour list page after successful update
        router.push('/admin/content');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setSubmitMessage(
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Failed to update tour</div>
          <Toast.Toggle />
        </Toast>
      );
    }
  };

  const handleEdit = async (tourId, tourData) => {
    // Fetch data of the selected tour for editing
    await fetchTourData(tourId);
  
    const isDataFetched = tourId === tourData.id;

    const modalId = `my_modal_${tourId}`;
    const modalElement = document.getElementById(modalId);

    if (!modalElement || isDataFetched) {
      return;
    }

    modalElement.showModal();
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/delete/${id}`);
      // Reload data setelah berhasil menghapus
      const response = await axios.get('/api/admin/read');
      const places = response.data;
      setPlaceData(places);
    } catch (error) {
      console.error('Error deleting tour:', error);
      // Handle error deletion
    }
  };  
  
  return (
    <div className='text-gray-300'>
      <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Tour Name</th>
                <th>Location</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {placeData.map((item) => (
                <tr key={item.id} placeData={item}>
                  <th>{item.id}</th>
                  <td>{item.tourName}</td>
                  <td>{item.location}</td>
                  <td>{item.description}</td>
                  <th>{item.duration}</th>
                  <th>{item.price}</th>
                  <th>
                    <div onClick={()=>document.getElementById(`my_modal1_${item.id}`).showModal()}>
                      <div className="tooltip" data-tip="see more">
                        <Image src={item.imageSrc[0]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={100} height={100} className='cursor-pointer'></Image>
                      </div>
                    </div>
                    <dialog id={`my_modal1_${item.id}`} className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <div className='flex justify-center gap-2 flex-col items-center mt-3'>
                          <Image src={item.imageSrc[0]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[1]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[2]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[3]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} className='rounded-2xl'></Image>
                          <Image src={item.imageSrc[4]} imgAlt="Meaningful alt text for an image that is not purely decorative" width={450} height={450} className='rounded-2xl'></Image>
                        </div>
                      </div>
                    </dialog>
                  </th>
                  <th className='flex justify-center gap-2 pt-5'>
                    <div className='text-amber-500' onClick={() => handleEdit(item.id)}>
                      <div className="tooltip tooltip-warning" data-tip="change">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                      </div>
                      <div className='text-gray-300'>
                        <dialog id={`my_modal_${item.id}`} className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Edit {tourName}</h3>
                            <div className="flex flex-col gap-4 max-w-md">
                              <label className="form-control w-full max-w-sm">
                                <div className="label">
                                  <span className="label-text">Tour Name</span>
                                </div>
                                <input type="text" value={tourName} onChange={(e) => setTourName(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-sm" />
                              </label>
                              <label className="form-control w-full max-w-sm">
                                <div className="label">
                                  <span className="label-text">Location</span>
                                </div>
                                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-sm" />
                              </label>
                              <label className="form-control w-full max-w-sm">
                                <div className="label">
                                  <span className="label-text">Description</span>
                                </div>
                                <textarea placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered textarea-sm w-full max-w-sm" ></textarea>
                              </label>
                              <label className="form-control w-full max-w-sm">
                                <div className="label">
                                  <span className="label-text">Capacity</span>
                                </div>
                                <input type="text" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-sm" />
                              </label>
                              <label className="form-control w-full max-w-sm">
                                <div className="label">
                                  <span className="label-text">Price</span>
                                </div>
                                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-sm" />
                              </label>
                              <label className="form-control w-full max-w-sm">
                                <div className="label">
                                  <span className="label-text">Duration</span>
                                </div>
                                <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Type here" className="input input-xs input-bordered w-full max-w-sm" />
                              </label>
                              <label className="form-control w-full max-w-3xl">
                                <div className="label">
                                  <span className="label-text">Detail description</span>
                                </div>
                                <textarea placeholder="Bio" value={detailDescription} onChange={(e) => setDetailDescription(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                              </label>
                              <label className="form-control w-full max-w-3xl">
                                <div className="label">
                                  <span className="label-text">Detail Info</span>
                                </div>
                                <textarea placeholder="Bio" value={detailInfo} onChange={(e) => setDetailInfo(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                              </label>
                              <label className="form-control w-full max-w-3xl">
                                <div className="label">
                                  <span className="label-text">Note</span>
                                </div>
                                <textarea placeholder="Bio" value={note} onChange={(e) => setNote(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                              </label>
                              <label className="form-control w-full max-w-3xl">
                                <div className="label">
                                  <span className="label-text">Itinerary</span>
                                </div>
                                <textarea placeholder="Bio" value={itinerary} onChange={(e) => setItinerary(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                              </label>
                              <label className="form-control w-full max-w-3xl">
                                <div className="label">
                                  <span className="label-text">Include</span>
                                </div>
                                <textarea placeholder="Bio" value={include} onChange={(e) => setInclude(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                              </label>
                              <label className="form-control w-full max-w-3xl">
                                <div className="label">
                                  <span className="label-text">Exclude</span>
                                </div>
                                <textarea placeholder="Bio" value={exclude} onChange={(e) => setExclude(e.target.value)} className="textarea textarea-bordered textareamax-w-3xl w-full max-w-3xl" ></textarea>
                              </label>
                            </div>
                            <div>
                              {/* Input untuk Gambar */}
                              <div id="fileUpload" className="max-w-sm">
                                <div className="mb-2 block">
                                  <Label htmlFor="file" value="Image">
                                    <input
                                      name="image"
                                    />
                                  </Label>
                                </div>
                                <ImageUpload value={imageSrc} onChange={setImageSrc} />
                              </div>
                            </div>
                            {/* Tombol Submit Example dan Pesan Submit */}
                            <div className='flex justify-start gap-2'>
                              <Button type="submit" className='mt-5' onClick={(e) => handleSubmit(e, item.id)}>Submit changes</Button>
                                {submitMessage && <p>{submitMessage}</p>}
                            </div>
                          </div>
                        </dialog>
                      </div>
                    </div>
                    <div className='text-red-500'  onClick={() => handleDelete(item.id)}>
                      <div className="tooltip tooltip-error" data-tip="delete">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TourList;
