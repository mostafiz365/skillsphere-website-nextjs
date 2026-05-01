"use client"
import Link from 'next/link';
import React from 'react';
import MyNavLink from './MyNavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;

    const links = <>
    <li><MyNavLink href="/">Home</MyNavLink></li>
    <li><MyNavLink href="/courses">Courses</MyNavLink></li>
    <li><MyNavLink href="/profile">My Profile</MyNavLink></li>

    </>
    return (
        <div className='bg-[#292654]'>
            <div className="navbar border-b max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <h2 className='text-xl font-bold text-white'>SkillSphere</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white font-semibold">
      {links}
    </ul>
  </div>
  <div className="navbar-end">

    {!user && <Link href="/signin">
        <button className="bg-[#4737b0] text-white rounded-full py-2 px-4">SignIn</button>
    </Link>}

    {
         user && <div className="flex items-center gap-2">
          <p className='text-white'>Hi,{user.name}</p>
          <Avatar size="sm">
        <Avatar.Image alt={user.name} src={user.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Button variant="danger" size="sm" onClick={async() => await authClient.signOut()}>LogOut</Button>
                </div>

            }

  </div>
</div>
        </div>
    );
};

export default Navbar;