'use client'

import ClientOnly from "../ClientOnly";

const InboxForm = () => {
  return (
    <ClientOnly>
      <div className="flex justify-center">
        <div className="py-3">
          <h2 className="font-bold text-2xl py-1">Contact Us</h2>
          <label className="form-control w-full max-w-xs py-1">
            <div className="label">
              <span className="label-text bg-transparent">Name</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs py-1">
            <div className="label">
              <span className="label-text bg-transparent">Email</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control w-full max-w-xs py-1">
            <div className="label">
              <span className="label-text bg-transparent">Subject</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          </label>
          <div className="py-3">
            <button className="btn btn-outline btn-warning">Send</button>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}

export default InboxForm;
