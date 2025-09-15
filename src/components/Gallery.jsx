import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: '/images/selous-2.jpg',
      alt: 'Selous Express Bus - Modern Fleet',
      title: 'Premium Fleet'
    },
    {
      id: 2,
      src: '/images/selous-3.jpg',
      alt: 'Selous Express Bus - Front View with Route Destinations',
      title: 'Modern Buses'
    },
    {
      id: 3,
      src: '/images/selous-4.jpg',
      alt: 'Selous Express Bus - Professional Service',
      title: 'Reliable Service'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-selous-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bebas font-bold text-white mb-4 tracking-wide">
            {t('ourFleet')}
          </h2>
          <p className="text-lg text-selous-white font-poppins max-w-2xl mx-auto">
            {t('fleetDescription')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-selous-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bebas font-bold text-xl tracking-wide">
                    {image.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm font-poppins">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    Click to view
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-5xl w-full max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-selous-orange transition-colors duration-200 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />

              {/* Image Title */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-bebas font-bold text-2xl tracking-wide">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80 font-poppins text-sm mt-1">
                    {selectedImage.alt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;