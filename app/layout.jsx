// pages/your-file-name.js

import { Roboto } from 'next/font/google'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import NavbarNav from './components/navbar/Navbar'
import getCurrentUser from './actions/getCurrentUser'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Provider from './context/client-provider'

const nunito = Roboto(
  { 
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap', 
  }
)

export const metadata = {
  title: 'KAJA',
  description: 'Booking Jeep',
}

export default async function RootLayout({
  children,
}) {
  // getCurrentuser didapat dari server component di bagian action kemudian dibawa(passing) ke client component(NavbarNav)
  const currentUser = await getCurrentUser();

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Provider session={session}>
          <ClientOnly>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <NavbarNav currentUser={currentUser} />
          </ClientOnly>
          <div className=''>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
