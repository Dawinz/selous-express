import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-selous-purple-800 via-selous-purple-700 to-selous-purple-800 text-selous-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:text-selous-gold-400 transition-colors duration-200"
              onClick={closeMenu}
            >
              <img 
                src="/images/selous-header-logo.png" 
                alt="Selous Express Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bebas font-bold tracking-wider">SELOUS EXPRESS</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="hover:text-selous-gold-400 hover:bg-selous-gold-400 hover:bg-opacity-20 px-3 py-2 rounded-md transition-all duration-200 font-poppins font-medium"
              >
                {t('home')}
              </Link>
              <Link
                to="/routes"
                className="hover:text-selous-gold-400 hover:bg-selous-gold-400 hover:bg-opacity-20 px-3 py-2 rounded-md transition-all duration-200 font-poppins font-medium"
              >
                {t('routes')}
              </Link>
              <Link
                to="/gallery"
                className="hover:text-selous-gold-400 hover:bg-selous-gold-400 hover:bg-opacity-20 px-3 py-2 rounded-md transition-all duration-200 font-poppins font-medium"
              >
                {t('gallery')}
              </Link>
              <Link
                to="/contact"
                className="hover:text-selous-gold-400 hover:bg-selous-gold-400 hover:bg-opacity-20 px-3 py-2 rounded-md transition-all duration-200 font-poppins font-medium"
              >
                {t('contact')}
              </Link>
              <a
                href="https://superfeoexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-selous-gold-400 to-selous-gold-500 hover:from-selous-gold-500 hover:to-selous-gold-600 px-4 py-2 rounded-lg font-bebas font-bold text-selous-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                SUPERFEO EXPRESS
              </a>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 hover:text-selous-blue hover:bg-selous-blue hover:bg-opacity-10 px-3 py-2 rounded-md transition-all duration-200 font-poppins font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                <span className="text-sm">{language === 'en' ? 'SW' : 'EN'}</span>
              </button>
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
          <div className="md:hidden mobile-menu-container">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-selous-yellow hover:bg-selous-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-selous-yellow transition-colors duration-200"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-selous-yellow border-t border-selous-blue">
            <Link
              to="/"
              className="block px-3 py-3 rounded-md text-base font-poppins font-medium text-selous-blue hover:text-white hover:bg-selous-blue transition-colors duration-200"
              onClick={closeMenu}
            >
              {t('home')}
            </Link>
            <Link
              to="/routes"
              className="block px-3 py-3 rounded-md text-base font-poppins font-medium text-selous-blue hover:text-white hover:bg-selous-blue transition-colors duration-200"
              onClick={closeMenu}
            >
              {t('routes')}
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-3 rounded-md text-base font-poppins font-medium text-selous-blue hover:text-white hover:bg-selous-blue transition-colors duration-200"
              onClick={closeMenu}
            >
              {t('gallery')}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-3 rounded-md text-base font-poppins font-medium text-selous-blue hover:text-white hover:bg-selous-blue transition-colors duration-200"
              onClick={closeMenu}
            >
              {t('contact')}
            </Link>
            <a
              href="https://superfeoexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-selous-gold-400 to-selous-gold-500 hover:from-selous-gold-500 hover:to-selous-gold-600 text-selous-gray-800 font-bebas font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg mx-3"
              onClick={closeMenu}
            >
              SUPERFEO EXPRESS
            </a>
            <button
              onClick={toggleLanguage}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-poppins font-medium text-selous-blue hover:text-white hover:bg-selous-blue transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                <span>{language === 'en' ? 'Kiswahili' : 'English'}</span>
              </div>
            </button>
            <div className="px-3 py-2 space-y-2">
              <a
                href="https://wa.me/255789456321"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold rounded-lg transition-colors duration-200"
                onClick={closeMenu}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;