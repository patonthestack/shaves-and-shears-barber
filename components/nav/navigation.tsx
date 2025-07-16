import Link from 'next/link';
import { HamburgerMenu } from './hamburgerMenu';

export const Navigation = () => {
  return (
    <div>
      <nav className="bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold text-white">
            Shaves & Shears
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/#about"
              className="text-lg text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="text-lg text-gray-300 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/appointments"
              className="text-lg text-gray-300 hover:text-white"
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <HamburgerMenu />
        </div>
      </nav>
    </div>
  );
};
