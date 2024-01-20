'use client';

import { Dropdown, Navbar, Button } from "flowbite-react";
import { signOut } from "next-auth/react";
import Avatar from "@/app/components/Avatar";
import Link from "next/link";

const AdminMenu = ({ currentUser }) => {

  return ( 
    <Navbar rounded className="bg-transparent text-gray-400">
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline className="bg-transparent border-transparent" label={<Avatar src={currentUser?.image} />}>
          {currentUser ? (
            <>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black mt-3 text-gray-300 rounded-box w-40">
                <li onClick={() => {}}><a>{currentUser.name}</a></li>
                <li onClick={() => {}}><a>{currentUser.email}</a></li>
                <Link href={`/admin/admin-home`}>
                  <li onClick={() => {}}><a>Admin home</a></li>
                </Link>
                <div>
                  <li>
                    <Link href="/">
                      KAJA Dashboard
                    </Link>
                  </li>
                </div>
                <li onClick={() => signOut()}><a>Logout</a></li>
              </ul>
            </>
          ) : (
            <>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-gray-300 rounded-box w-28">
                <li onClick={()=>document.getElementById('my_modal_3').showModal()}><a>Sign up</a></li>
                <li onClick={()=>document.getElementById('my_modal_3').showModal()}><a>Login</a></li>
              </ul>

              <div className="text-gray-300">
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hallo!</h3>
                    <div className="flex flex-col gap-4 max-w-lg w-full">
                      <label className="form-control w-full max-w-lg">
                        <div className="label">
                          <span className="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-xs input-bordered w-full max-w-lg" />
                      </label>
                      <label className="form-control w-full max-w-lg">
                        <div className="label">
                          <span className="label-text">Password</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-xs input-bordered w-full max-w-lg" />
                      </label>
                    </div>
                    <Button type="submit" className='mt-5'>Login</Button>
                  </div>
                </dialog>
              </div>
            </>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default AdminMenu;