import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/zuberi 2.jpg)',
        }}
      ></div>
      {/* Remove overlay and all text, keep only booking/search form section here if present */}
      {/* If booking/search form is not here, leave this div empty for now */}
    </div>
  );
};

export default Hero;