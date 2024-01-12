
'use client';

import Image from 'next/image';

function MemberKaja() {
  return (
    <div className='flex items-center justify-center px-24 py-10'>
      <div>
        <div className='flex gap-60 items-center'>
          <h2 className='text-3xl font-semibold text-zinc-300'>Our Team</h2>
          <div className='flex gap-3 mb-10'>
            <div className="card w-56 shadow-xl bg-zinc-900 hover:bg-zinc-800 hover:text-slate-200">
              <figure className="px-10 pt-10">
                <Image width={200} height={200} src="/images/Juliawan.png" alt="Shoes" className="rounded-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Juliawan Edi</h2>
                <h2 className="text-md">Chairman</h2>
              </div>
            </div>
            <div className="card w-56 shadow-xl bg-zinc-900 hover:bg-zinc-800 hover:text-slate-200">
              <figure className="px-10 pt-10">
                <Image width={200} height={200} src="/images/Arka Manu.png" alt="Shoes" className="rounded-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Arka Manu</h2>
                <h2 className="text-md">Vice Chairman</h2>
              </div>
            </div>
            <div className="card w-56 shadow-xl bg-zinc-900 hover:bg-zinc-800 hover:text-slate-200">
              <figure className="px-10 pt-10">
                <Image width={200} height={200} src="/images/Arcaya.png" alt="Shoes" className="rounded-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Arcaya</h2>
                <h2 className="text-md">Secretary</h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex gap-28 items-center'>
          <div className='flex gap-3 justify-center'>
            <div className="card w-56 shadow-xl bg-zinc-900 hover:bg-zinc-800 hover:text-slate-200">
              <figure className="px-10 pt-10">
                <Image width={200} height={200} src="/images/King.png" alt="Shoes" className="rounded-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">King</h2>
                <h2 className="text-md">Treasurer</h2>
              </div>
            </div>
            <div className="card w-56 shadow-xl bg-zinc-900 hover:bg-zinc-800 hover:text-slate-200">
              <figure className="px-10 pt-10">
                <Image width={200} height={200} src="/images/Aris.png" alt="Shoes" className="rounded-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Arista Divayana</h2>
                <h2 className="text-md">Marketing Agent</h2>
              </div>
            </div>
          </div>
          <p>In our journey, traversing every trail and vista, we embed a deep commitment to service principles, crafting an unforgettable Jeep Adventure experience. Each member of our Jeep management is wholeheartedly dedicated to providing the finest service, committed to delivering moments that resonate, transforming your adventure into not just a physical journey but also an emotional odyssey fueled by genuine care and wholehearted dedication.</p>
        </div>
      </div>
    </div>
  );
}

export default MemberKaja;