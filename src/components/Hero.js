import React from 'react';
import SearchForm from './SearchForm';

const Hero = (props) => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/zuberi 2.jpg)',
        }}
      ></div>
      {/* Centered Booking/Search Form */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <SearchForm {...props} />
      </div>
    </div>
  );
};

export default Hero;