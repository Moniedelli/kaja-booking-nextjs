'use client'

import axios from "axios";
import ClientOnly from "../ClientOnly";
import { useState } from "react";
import Image from "next/image";

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
        setSubmitMessage(
          <div className="toast toast-end">
            <div className="alert alert-success">
              <span>Message sent successfully.</span>
            </div>
          </div>
        );

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      } else {
        console.error('Failed to send email');
        setSubmitMessage(
          <div className="toast toast-end">
            <div className="alert alert-info">
              <span>Filed send message</span>
            </div>
          </div>
        );
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage(
        <div className="toast toast-end">
          <div className="alert alert-info">
            <span>Filed send message</span>
          </div>
        </div>
      );
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
                        <button type="submit" className="btn btn-outline btn-warning">Send</button>
                        {submitMessage && <p>{submitMessage}</p>}
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
