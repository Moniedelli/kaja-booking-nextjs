'use client';

function UpdateStatusTransaction({transactions, onUpdate}) {

  const handleUpdate = async () => {
    await onUpdate(transactions.id);
  }

  return (
    <div>
      <button onClick={()=>document.getElementById(`my_modal_${transactions.id}`).showModal()}>
        <input type="checkbox" checked="checked" className="checkbox" />
        <dialog id={`my_modal_${transactions.id}`} className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => closeModal()}>✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">List going to histories table</p>
            <div className="modal-action">
              <button className='btn' onClick={() => handleUpdate()}>Confirm</button>
            </div>
          </div>
        </dialog>
      </button>
    </div>
  );
}

export default UpdateStatusTransaction;
