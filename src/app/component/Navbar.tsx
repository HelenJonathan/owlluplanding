'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
        </Link>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-[#6858db] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className={`hidden md:flex space-x-8 items-center`}>
          <Link href="/home" className="text-[#56576e] hover:text-[#6858db]">
            Home
          </Link>
          <Link href="/about" className="text-[#56576e] hover:text-[#6858db]">
            About
          </Link>
          <Link href="/features" className="text-[#56576e] hover:text-[#6858db]">
            Features
          </Link>
          <Link href="/gallery" className="text-[#56576e] hover:text-[#6858db]">
            Gallery
          </Link>
          <Link href="/contact" className="text-[#56576e] hover:text-[#6858db]">
            Contact
          </Link>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-30 flex flex-col justify-center items-center space-y-8 text-center transition duration-500 ease-in-out">
          {/* X Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-[#6858db] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links for Mobile */}
          <Link href="/home" className="text-3xl text-[#56576e] hover:text-[#6858db]" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-3xl text-[#56576e] hover:text-[#6858db]" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/features" className="text-3xl text-[#56576e] hover:text-[#6858db]" onClick={toggleMenu}>
            Features
          </Link>
          <Link href="/gallery" className="text-3xl text-[#56576e] hover:text-[#6858db]" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link href="/contact" className="text-3xl text-[#56576e] hover:text-[#6858db]" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
