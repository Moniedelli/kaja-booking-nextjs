'use client';

function UpdateToDone({transactions, onUpdate, toFail}) {

  const handleUpdate = async () => {
    await onUpdate(transactions.id);
  }

  const handleUpdateToFail = async () => {
    await toFail(transactions.id);
  }

  return (
    <div>
      <button onClick={()=>document.getElementById(`my_modal_${transactions.id}`).showModal()}>
        <input type="checkbox" checked="checked" className="checkbox" />
        <dialog id={`my_modal_${transactions.id}`} className="modal">
          <div className="modal-box bg-zinc-900">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Update this transaction status</p>
            <div className="modal-action flex justify-center">
              <button className='btn orange' onClick={() => handleUpdate()}>Confirm</button>
              <button className='btn red' onClick={() => handleUpdateToFail()}>FAIL</button>
            </div>
          </div>
        </dialog>
      </button>
    </div>
  );
}

export default UpdateToDone;
