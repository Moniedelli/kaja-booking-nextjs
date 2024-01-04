
'use client';

import { Card, Dropdown } from 'flowbite-react';
import Image from 'next/image';

function MemberKaja() {
  return (
    <div className=''>
      <div className='flex gap-3'>
        <div className="card w-64 shadow-xl hover:bg-black hover:text-slate-200">
          <figure className="px-10 pt-10">
            <Image width={200} height={200} src="/images/Juliawan - Ketua.png" alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Juliawan Edi</h2>
            <h2 className="text-md">Chairman</h2>
          </div>
        </div>
        <div className="card w-64 shadow-xl hover:bg-black hover:text-slate-200">
          <figure className="px-10 pt-10">
            <Image width={200} height={200} src="/images/Arka Manu - Wakil.png" alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Arka Manu</h2>
            <h2 className="text-md">Vice Chairman</h2>
          </div>
        </div>
        <div className="card w-64 shadow-xl hover:bg-black hover:text-slate-200">
          <figure className="px-10 pt-10">
            <Image width={200} height={200} src="/images/Arcaya - Sekretaris.png" alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Arcaya</h2>
            <h2 className="text-md">Secretary</h2>
          </div>
        </div>
      </div>
      <div className='flex gap-3 justify-center'>
        <div className="card w-64 shadow-xl hover:bg-black hover:text-slate-200">
          <figure className="px-10 pt-10">
            <Image width={200} height={200} src="/images/King bendahara.png" alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">King</h2>
            <h2 className="text-md">Treasurer</h2>
          </div>
        </div>
        <div className="card w-64 shadow-xl hover:bg-black hover:text-slate-200">
          <figure className="px-10 pt-10">
            <Image width={200} height={200} src="/images/Aris - Marketing.png" alt="Shoes" className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Arista Divayana</h2>
            <h2 className="text-md">Marketing Agent</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberKaja;