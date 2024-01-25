'use client'

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import Body from './components/body/body';
import FooterComponent from './components/footer/footer';

export default function Home() {
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (session && session.user) {
  //     if (session.user.role === 'ADMIN') {
  //       router.push('/admin');
  //     }
  //   }
  // }, [session, router]);

  return (
    <ClientOnly>
      <Container>
        <div className="flex flex-col justify-start mx-auto">
          <Body />
          <FooterComponent />
        </div>
      </Container>
    </ClientOnly>
  );
}
