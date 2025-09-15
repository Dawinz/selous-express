import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-selous-blue bg-blue-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/selous-logo.png" 
                alt="Selous Express Logo" 
                className="h-12 w-12"
              />
              <h3 className="text-2xl font-bebas font-bold tracking-wide">
                SELOUS EXPRESS
              </h3>
            </div>
            <p className="text-gray-300 font-poppins mb-4 text-lg">
              {t('footerTagline')}
            </p>
            <p className="text-gray-400 font-poppins text-sm leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bebas font-bold mb-4 tracking-wide text-selous-yellow">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2 font-poppins">
              <li>
                <Link to="/" className="text-gray-300 hover:text-selous-yellow transition-colors duration-200">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/routes" className="text-gray-300 hover:text-selous-yellow transition-colors duration-200">
                  {t('routes')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-selous-yellow transition-colors duration-200">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-selous-yellow transition-colors duration-200">
                  {t('bookNow')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-bebas font-bold mb-4 tracking-wide text-selous-yellow">
              {t('contactInfo')}
            </h4>
            <div className="space-y-3 font-poppins text-sm">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-selous-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div className="text-gray-300">
                  <div className="font-semibold mb-1">{t('phone')}:</div>
                  <a href="tel:+255755478744" className="hover:text-white transition-colors duration-200 block">Mwanza: +255 755 478 744</a>
                  <a href="tel:+255767350884" className="hover:text-white transition-colors duration-200 block">Mwanza: +255 767 350 884</a>
                  <a href="tel:+255654946844" className="hover:text-white transition-colors duration-200 block">Dar: +255 654 946 844</a>
                  <a href="tel:+255757748040" className="hover:text-white transition-colors duration-200 block">Arusha: +255 757 748 040</a>
                  <a href="tel:+255757258844" className="hover:text-white transition-colors duration-200 block">Moshi: +255 757 258 844</a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-selous-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:support@selous.co.tz" className="text-gray-300 hover:text-white transition-colors duration-200">
                  support@selous.co.tz
                </a>
              </div>
              
              {/* Location */}
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-selous-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">
                  {t('headOffice')}: {t('headOfficeLocation')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 font-poppins text-sm">{t('followUs')}:</span>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/255755478744" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://facebook.com/selousexpress" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/selousexpress" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.445L3.78 16.886l1.421-1.353c-.955-.878-1.445-2.025-1.445-3.322 0-2.734 2.017-4.914 4.693-4.914s4.693 2.18 4.693 4.914c0 2.734-2.017 4.914-4.693 4.914zm7.265 0c-1.297 0-2.448-.49-3.326-1.445l-1.343 1.353 1.421-1.353c-.955-.878-1.445-2.025-1.445-3.322 0-2.734 2.017-4.914 4.693-4.914s4.693 2.18 4.693 4.914c0 2.734-2.017 4.914-4.693 4.914z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 font-poppins text-sm">
              © {new Date().getFullYear()} Selous Express. {t('allRightsReserved')}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;