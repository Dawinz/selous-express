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
      title: t('modernFleet')
    },
    {
      id: 2,
      src: '/images/selous-3.jpg',
      alt: 'Selous Express Bus - Comfortable Interior',
      title: t('comfortableInterior')
    },
    {
      id: 3,
      src: '/images/selous-4.jpg',
      alt: 'Selous Express Bus - Professional Service',
      title: t('professionalService')
    },
    {
      id: 4,
      src: '/images/selous-5.jpg',
      alt: 'Selous Express Bus - Safe Travel',
      title: t('safeTravel')
    },
    {
      id: 5,
      src: '/images/selous-6.jpg',
      alt: 'Selous Express Bus - Premium Experience',
      title: t('premiumExperience')
    },
    {
      id: 6,
      src: '/images/selous-7.png',
      alt: 'Selous Express Bus - On the Road',
      title: t('onTheRoad')
    },
    {
      id: 7,
      src: '/images/selous-7-mobile.png',
      alt: 'Selous Express Bus - Mobile View',
      title: t('mobileView')
    },
    {
      id: 8,
      src: '/images/selous-8.jpg',
      alt: 'Selous Express Bus - Terminal',
      title: t('atTheTerminal')
    },
    {
      id: 9,
      src: '/images/selous-9.jpg',
      alt: 'Selous Express Bus - Fleet One',
      title: t('fleetOne')
    },
    {
      id: 10,
      src: '/images/selous-10.jpg',
      alt: 'Selous Express Bus - Fleet Two',
      title: t('fleetTwo')
    },
    {
      id: 11,
      src: '/images/selous-11.jpg',
      alt: 'Selous Express Bus - Fleet Three',
      title: t('fleetThree')
    },
    {
      id: 12,
      src: '/images/selous-12.jpg',
      alt: 'Selous Express Bus - Fleet Four',
      title: t('fleetFour')
    },
    {
      id: 13,
      src: '/images/selous-bus-model.jpg',
      alt: 'Selous Express Bus - Premium Bus Model',
      title: t('premiumBusModel')
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-selous-purple-100 via-selous-purple-50 to-selous-purple-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bebas font-bold text-selous-purple-800 mb-4 tracking-wide">
            {t('ourGallery')}
          </h1>
          <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
            {t('galleryDesc')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-white via-selous-gray-50 to-selous-blue-50 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bebas font-bold tracking-wide">
                      {image.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 text-white opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bebas font-bold text-selous-purple-800 mb-8 tracking-wide">
            {t('whyChooseSelousExpress')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-selous-gold-400 to-selous-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-selous-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bebas font-bold text-selous-blue mb-2 tracking-wide">
                {t('premiumComfort')}
              </h3>
              <p className="text-gray-600 font-poppins">
                {t('premiumComfortDesc')}
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-selous-purple-400 to-selous-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bebas font-bold text-selous-blue mb-2 tracking-wide">
                {t('onTimeDeparture')}
              </h3>
              <p className="text-gray-600 font-poppins">
                {t('onTimeDepartureDesc')}
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-selous-purple-600 to-selous-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bebas font-bold text-selous-blue mb-2 tracking-wide">
                {t('safeTravel')}
              </h3>
              <p className="text-gray-600 font-poppins">
                {t('safeTravelDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-selous-yellow transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-bebas font-bold text-white tracking-wide">
                {selectedImage.title}
              </h3>
              <p className="text-gray-200 font-poppins">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;