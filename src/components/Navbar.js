import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-zuberi-navy text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bebas font-bold tracking-wider hover:text-zuberi-lime transition-colors duration-200">
              ZUBERI EXPRESS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/routes"
                className="hover:text-zuberi-red transition-colors duration-200 font-poppins font-medium"
              >
                Routes
              </Link>
              <Link
                to="/contact"
                className="hover:text-zuberi-red transition-colors duration-200 font-poppins font-medium"
              >
                Contact
              </Link>
              <a
                href="https://wa.me/255789456321"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-poppins font-semibold transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-zuberi-red focus:outline-none focus:text-zuberi-red"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zuberi-navy border-t border-zuberi-red">
              <Link
                to="/routes"
                className="block px-3 py-2 text-white hover:text-zuberi-red font-poppins font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Routes
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-zuberi-red font-poppins font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://wa.me/255789456321"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold rounded-lg mx-3 text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;