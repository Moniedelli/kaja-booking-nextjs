'use client';

function UpdateStatusTransaction({transactions, onUpdate, toFail}) {

  const handleUpdate = async () => {
    await onUpdate(transactions.id);
  }

  const handleUpdateToFail = async () => {
    await toFail(transactions.id);
  }

  return (
    <div>
      <button onClick={()=>document.getElementById(`my_modal_${transactions.id}`).showModal()}>
        <div className="tooltip tooltip-warning" data-tip="change">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
        </div>
        <dialog id={`my_modal_${transactions.id}`} className="modal">
          <div className="modal-box bg-zinc-900">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Update this transaction status</p>
            <div className="modal-action flex justify-center">
              <button className='btn btn-success' onClick={() => handleUpdate()}>PAID</button>
              {/* <button className='btn red' onClick={() => handleUpdateToFail()}>CANCEL</button> */}
            </div>
          </div>
        </dialog>
      </button>
    </div>
  );
}

export default UpdateStatusTransaction;
