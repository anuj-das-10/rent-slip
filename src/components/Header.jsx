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
    <header className='bg-slate-950 h-[6rem] flex justify-between items-center px-6 md:px-12 shadow-lg relative'>
      <Logo />

      {/* Hamburger Icon */}
      <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
        <div className='w-6 h-1 bg-white mb-1'></div>
        <div className='w-6 h-1 bg-white mb-1'></div>
        <div className='w-6 h-1 bg-white'></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed md:static top-[6rem] left-0 w-full md:w-auto bg-slate-800 md:bg-transparent transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className='flex flex-col md:flex-row justify-center gap-8 p-4 md:p-0 text-xl text-white'>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/instructions">Instructions</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
