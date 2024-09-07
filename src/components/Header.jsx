"use client";
import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-slate-950 fixed z-20 w-full h-[6rem] flex justify-between items-center px-6 md:px-12 shadow-lg'>
      <Logo />

      {/* Hamburger menu for mobile and tablets */}
      <div className='md:hidden cursor-pointer z-50' onClick={toggleMenu}>
        <div className={`w-6 h-1 bg-white mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-4 h-1 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-1 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>

      {/* Desktop menu */}
      <nav className='hidden md:block z-20'>
        <ul className='flex gap-8 text-xl text-white'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/instructions">Instructions</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Sliding Full-Screen Mobile/Tablet Menu */}
      <div className={`fixed top-0 right-0 w-full h-screen bg-slate-950 flex flex-col justify-center items-center text-white text-2xl space-y-8 transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

        <ul className='text-center text-3xl font-bold flex flex-col justify-center gap-8'>
          <li onClick={toggleMenu}>
            <Link href="/" className='hover:text-emerald-400'>Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/instructions" className='hover:text-emerald-400'>Instructions</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/about" className='hover:text-emerald-400'>About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
