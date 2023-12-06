// pages/your-file-name.js

import { Nunito } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import NavbarNav from './components/navbar/Navbar'
import getCurrentUser from './actions/getCurrentUser'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'KAJA',
  description: 'Booking Jeep',
}

export default async function RootLayout({
  children,
}) {
  // getCurrentuser didapat dari server component di bagian action kemudian dibawa(passing) ke client component(NavbarNav)
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavbarNav currentUser={currentUser} />
        </ClientOnly>
        <div className='pt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
