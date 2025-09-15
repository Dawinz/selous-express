import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="relative w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/selous-3.jpg')",
        }}
      >
        {/* Logo Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center">
            <img 
              src="/images/selous-logo.png" 
              alt="Selous Express Logo" 
              className="h-24 w-24 mx-auto mb-4 drop-shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-bebas font-bold text-white tracking-wider drop-shadow-lg">
              SELOUS EXPRESS
            </h1>
            <p className="text-xl md:text-2xl text-white font-poppins mt-2 drop-shadow-lg">
              Premium Travel Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;