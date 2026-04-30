import Link from 'next/link';
import React from 'react';
import MyNavLink from './MyNavLink';

const Navbar = () => {

    const links = <>
    <li><MyNavLink href="/">Home</MyNavLink></li>
    <li><MyNavLink href="/courses">Courses</MyNavLink></li>
    <li><MyNavLink href="/profile">My Profile</MyNavLink></li>

    </>
    return (
        <div className='bg-[#292654]'>
            <div className="navbar shadow-sm max-w-7xl mx-auto">
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
    <Link href="/signup">
        <button className="bg-[#4737b0] text-white rounded-full py-2 px-4">SignUp</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;