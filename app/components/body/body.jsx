'use client'

import { Button, Accordion } from "flowbite-react";
import RatingReview from "./rating";
import PlaceCard from "@/app/components/PlaceCard";
import Image from "next/image";
import GaleryUi from "./galeryUi";
import Link from "next/link";

const Body = () => {
  return (
    <>
      <div className="-mb-10 pl-10">
        <Image src="/images/jeep_PNG121 2.png" width={1400} height={1400}></Image>
        </div>
      <div className="flex">
        <div className="pl-28 -mt-56">
          <h2 className="text-extra-huge text-gray-400 opacity-30 font-bold">JEEP</h2>
        </div>
        <div className="-mt-10 -ml-48">
          <Image src="/images/jeep_.png" width={650} height={650}></Image>
          <Image src="/images/jeep_PNG121 3.png" width={650} height={650} className=""></Image>
        </div>
      </div>
      <div className="pl-28 -mt-52 text-gray-300 mb-32">
        <h2 className="text-xl font-bold pb-3 tracking-widest">Kaldera Jeep Adventure</h2>
        <h3 className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Molestias, a. Eveniet sint, soluta magnam dolor odit quam <br/></h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center w-screen h-1/4 py-7 mx-44 gap-11 rounded-full glass">
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <div>
              <h2 className="text-xl font-bold">Pay Us a Visit</h2>
              <h2 className="text-xs">Songan, Kintamani, Bali</h2>
            </div>
          </div>
          <div className="text-4xl">|</div>
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div>
              <h2 className="text-xl font-bold">Give Us a Call</h2>
              <h2 className="text-xs">Phone: +62 8765436523</h2>
            </div>
          </div>
          <div className="text-4xl">|</div>
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <div>
              <h2 className="text-xl font-bold">Send Us a Message</h2>
              <h2 className="text-xs">@ariwidaniadelia@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center text-gray-300 px-36 py-20 gap-10">
        <div className="w-1/2">
          <h2 className="font-semibold text-3xl pb-2">KALDERA JEEP ADVENTURE</h2>
          <div className="flex gap-4">
            <h2 className="text-2xl font-thin">HOW WE WORK?</h2>
            <div className="-mt-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-32 h-24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia cumque beatae ab similique eum blanditiis quaerat voluptatum doloremque saepe? Magnam qui blanditiis dignissimos? Harum voluptates ullam vel velit enim cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni corrupti corporis necessitatibus sit aperiam iure ipsum repellat natus cumque? Laboriosam beatae explicabo delectus dicta ex consectetur autem sequi impedit.
        </div>
      </div>
      <div className="px-28">
        <div className="card lg:card-side shadow-xl glass">
          <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end bg-transparent">
              <Link href="/services">
                <Button gradientDuoTone="tealToLime">See more</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center text-center text-gray-300 px-48 py-20 gap-10">
        <div className="">
          <h2 className="font-semibold text-3xl pb-2">KALDERA JEEP ADVENTURE</h2>
          <h2 className="text-2xl font-thin pb-10">HOW WE WORK?</h2>
        </div>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia cumque beatae ab similique eum blanditiis quaerat voluptatum doloremque saepe? Magnam qui blanditiis dignissimos? Harum voluptates ullam vel velit enim cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni corrupti corporis necessitatibus sit aperiam iure ipsum repellat natus cumque? Laboriosam beatae explicabo delectus dicta ex consectetur autem sequi impedit.
        </div>
      </div>
      <GaleryUi />
      <div className="p-28">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
              </p>
              <p className="dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="dark:text-gray-400">
                Check out the
                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 dark:text-gray-400">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
              </p>
              <p className="mb-2 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="list-disc pl-5 dark:text-gray-400">
                <li>
                  <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  )
}

export default Body;