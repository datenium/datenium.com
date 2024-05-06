// components/Navbar.js
"use client";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useState } from "react";
// import Link from "next/link";
// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//     document.body.classList.add('overflow-hidden');
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//     document.body.classList.remove('overflow-hidden');
//   };

//   return (
//     <nav className=" p-4 ">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <span className="text-l lg:text-xl 2xl:text-2xl">Datenium</span>

//         </Link>

//         {/* Mobile Menu Button */}
//         <div className="block lg:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <FiMenu size={24} />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="text-white lg:hidden absolute top-0 left-0 w-full h-full bg-gray-800 z-50">
//             <div className="flex items-center justify-center w-full h-full">
//               <button className="text-white absolute top-4 right-4 " onClick={closeMenu}>
//                 <FiX size={24} />
//               </button>
//               <ul className="text-white flex flex-col space-y-4 ">
//                 <li className='md:text-2xl lg:text-3xl 2xl:text-5xl'>
//                   <Link href="/" onClick={closeMenu}>Home</Link>
//                 </li>
//                 <li className='md:text-2xl lg:text-3xl xxl:text-5xl'>
//                   <Link href="/about" onClick={closeMenu}>About</Link>
//                 </li>
//                 <li className='md:text-2xl lg:text-3xl xxl:text-5xl'>
//                   <Link href="/blogs" onClick={closeMenu}>Blogs</Link>
//                 </li>
//                 {/* <li>
//                   <Link href="/services" onClick={closeMenu}>Services
//                   </Link>
//                 </li> */}
//                 <li>
//                   <Link href="/contacts" onClick={closeMenu}>Contacts</Link>
//                 </li>
//                 <li>
//                   <Link href="/signup" onClick={closeMenu}> <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> SIGNUP</button> </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-4 text-xl ">
//           <Link href="/about">About
//           </Link>
//           <Link href="/blogs">Blogs
//           </Link>
//           {/* <Link href="/services">Services
//           </Link> */}
//           <Link href="/contacts">Contacts
//           </Link>
//           <Link href="/signup" onClick={closeMenu}> <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> SIGNUP</button> </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
        <Link href="/" className="text-xl font-bold  transition-colors duration-300 transform md:text-2xl hover:text-indigo-400">
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
         <Link href="/" className="text-sm font-medium transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            Home
        </Link>
        <Link href="/about" className="text-sm font-medium transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            About
        </Link>
        <Link href="/templates" className="text-sm font-medium transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            Templates
        </Link>
        <Link href="/price" className="text-sm font-medium  transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            Price
        </Link>
        <Link href="/faq" className="text-sm font-medium  transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            FAQs
        </Link>
        <Link href="/help" className="text-sm font-medium  transition-colors duration-300 transform hover:text-indigo-400 block md:inline-block md:mt-0">
            Help
        </Link>
        <Link href="/signup" className="px-4 py-1 text-sm font-medium text-center  transition-colors duration-300 transform border rounded hover:bg-indigo-400 block md:inline-block md:mt-0">
            Get In Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
