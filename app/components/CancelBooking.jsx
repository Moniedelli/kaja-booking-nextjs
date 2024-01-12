'use client';

import { Toast } from "flowbite-react";
import { useState } from "react";

function CancelBooking({userTransactions, onUpdate}) {
	const [submitMessage, setSubmitMessage] = useState(null);

  const handleUpdate = async () => {
    try {
      await onUpdate(userTransactions.id);
      setSubmitMessage(
        <Toast>
          You canceled this tour
        </Toast>
			)
    } catch (error) {
      console.error('Error canceling booking:', error);
      setSubmitMessage(
        <Toast>
          Fail canceled this tour
        </Toast>
      );
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
              <button className='btn orange' onClick={() => handleUpdate()}>Confirm</button>
            </div>
						{submitMessage && <p>{submitMessage}</p>}
          </div>
        </dialog>
      </button>
    </div>
  );
}

export default CancelBooking;
