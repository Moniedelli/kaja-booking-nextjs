'use client'

import axios from "axios";
import ClientOnly from "../ClientOnly";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const InboxForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/inbox/sendEmail', {
        name,
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        console.log('Email sent successfully');
        toast.success("Success send message");

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

      } else {
        console.error('Failed to send email');
        toast.error("Error send message.")
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Error send message.")
    }
  };

  return (
    <ClientOnly>
      <main className="text-gray-300">
        <div className="mx-20 mt-10">
          <div className="card lg:card-side shadow-xl glass">
            <figure><Image src="/images/pexels-dimitri-dim-1802183.jpg" width={650} height={650} className="" alt="Album"/></figure>
            <div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-center">
                    <div className="-my-5">
                      <h2 className="font-bold text-2xl py-1">Contact Us</h2>
                      <label className="form-control w-full max-w-xs py-1">
                        <div className="label">
                          <span className="label-text bg-transparent">Name</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs bg-transparent" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>
                      <label className="form-control w-full max-w-xs py-1">
                        <div className="label">
                          <span className="label-text bg-transparent">Email</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs bg-transparent"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                      <label className="form-control w-full max-w-xs py-1">
                        <div className="label">
                          <span className="label-text bg-transparent">Subject</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs bg-transparent"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </label>
                      <label className="form-control">
                        <div className="label">
                          <span className="label-text">Message</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24 bg-transparent" placeholder="Bio"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </label>
                      <div className="py-3">
                        <button type="submit" className="btn orange">Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ClientOnly>
  );
}

export default InboxForm;
