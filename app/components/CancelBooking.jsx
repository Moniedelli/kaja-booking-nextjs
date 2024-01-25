'use client';

import { Toast } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

function CancelBooking({userTransactions, onUpdate}) {
  function onCloseModal() {
    const modal = document.getElementById(`my_modal_${userTransactions.id}`);
    modal.close();
  }  

  const handleUpdate = async () => {
    try {
      await onUpdate(userTransactions.id);
      toast.success("Confirmed!");
      onCloseModal();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error canceling booking:', error);
      toast.error("Failed!");
      onCloseModal();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div>
      <button onClick={()=>document.getElementById(`my_modal_${userTransactions.id}`).showModal()}>
				<button className='btn btn-active btn-ghost'>Cancel</button>
        <dialog id={`my_modal_${userTransactions.id}`} className="modal">
          <div className="modal-box bg-zinc-900">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Do you wanna cancel this tour order?</p>
            <div className="modal-action flex justify-center">
              <button className='btn btn-error' onClick={() => handleUpdate()}>Confirm</button>
            </div>
          </div>
        </dialog>
      </button>
    </div>
  );
}

export default CancelBooking;
