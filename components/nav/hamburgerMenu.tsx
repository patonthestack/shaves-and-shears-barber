'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Icon - Visible on Mobile */}
      <div className="md:hidden">
        <Button
          onClick={toggleMenu}
          className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-md"
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu (hidden on larger screens) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 right-0 bg-gray-800 text-white p-6 md:hidden z-10`}
      >
        <Link
          href="/#about"
          className="block text-lg text-gray-300 hover:text-white mb-4"
        >
          About
        </Link>
        <Link
          href="/#services"
          className="block text-lg text-gray-300 hover:text-white mb-4"
        >
          Services
        </Link>
        <Link
          href="/appointments"
          className="block text-lg text-gray-300 hover:text-white"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
