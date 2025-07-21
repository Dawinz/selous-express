import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-zuberi-navy to-blue-800 min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/zuberi%202.jpg)',
        }}
      ></div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zuberi-navy/80 to-blue-800/70"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-4xl md:text-6xl font-bebas font-bold text-white mb-4 tracking-wider">
            SAFARI ZA KIFAHARI
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-bebas font-bold text-zuberi-lime mb-6 tracking-wide">
            TIKETI KWA URAHISI
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white mb-8 font-poppins font-light max-w-2xl mx-auto leading-relaxed">
            Experience luxury travel with Zuberi Buses. Premium comfort, reliable service, 
            and convenient online booking for all your travel needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const searchForm = document.querySelector('#search-form');
                if (searchForm) {
                  searchForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-zuberi-red hover:bg-red-600 text-white font-poppins font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              BOOK NOW
            </button>
            <button 
              onClick={() => {
                const searchForm = document.querySelector('#search-form');
                if (searchForm) {
                  searchForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-zuberi-navy font-poppins font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 w-full sm:w-auto"
            >
              VIEW ROUTES
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;