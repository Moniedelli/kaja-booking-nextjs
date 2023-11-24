'use client'

import ClientOnly from "../components/ClientOnly";
import InboxForm from "../components/contact/InboxForm";
import FooterComponent from "../components/footer/footer";

export default function Home() {
  return (
    <ClientOnly>
      <div className="flex flex-col justify-start max-w-screen-xl mx-auto text-white">
        <InboxForm />
        <FooterComponent />
      </div>
    </ClientOnly>
  )
}
