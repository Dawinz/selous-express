import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="relative w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/zuberi-2.jpg)',
        }}
      ></div>
    </div>
  );
};

export default Hero;