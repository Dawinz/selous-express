import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Mobile Background Image */}
      <div 
        className="relative w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/images/zuberi%204.png')",
        }}
      ></div>
      {/* Desktop Background Image */}
      <div 
        className="relative w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: 'url(/images/zuberi-2.jpg)',
        }}
      ></div>
    </div>
  );
};

export default Hero;