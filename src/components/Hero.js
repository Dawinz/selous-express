import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="relative w-full h-full bg-contain bg-center bg-no-repeat md:bg-cover"
        style={{
          backgroundImage: 'url(/images/zuberi-2.jpg)',
        }}
      ></div>
    </div>
  );
};

export default Hero;