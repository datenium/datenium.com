
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold transition-colors duration-300 transform md:text-3xl hover:text-indigo-400">
            Datenium
        </Link>

        {/* Mobile menu button */}
        <div onClick={toggleMenu} className="flex md:hidden">
          <button
            type="button"
            className="text-gray-900 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:flex-row md:mt-0 md:space-x-10 md:items-center`}
        style={{ marginTop: '1rem' }}
      >
         <Link href="/" className="font-bold text-l transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            Home
        </Link>
        <Link href="/about" className="font-bold text-ltransition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            About
        </Link>
        <Link href="/faq" className="font-bold text-l transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            FAQs
        </Link>
        <Link href="/signup" className="px-4 py-1 font-bold text-l text-center  transition-colors duration-300 transform border rounded hover:bg-indigo-400 block md:inline-block md:mt-0">
            Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
