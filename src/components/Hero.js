import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/zuberi 2.jpg)',
        }}
      ></div>
    </div>
  );
};

export default Hero;