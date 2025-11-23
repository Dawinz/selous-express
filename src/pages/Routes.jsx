import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Routes = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const routes = [
    // All routes from Songea to destinations
    { from: 'Songea', to: t('moshi'), fromValue: 'songea', toValue: 'moshi' },
    { from: 'Songea', to: 'Dodoma', fromValue: 'songea', toValue: 'dodoma' },
    { from: 'Songea', to: t('mwanza'), fromValue: 'songea', toValue: 'mwanza' },
    { from: 'Songea', to: t('darEsSalaam'), fromValue: 'songea', toValue: 'dar-es-salaam' },
    { from: 'Songea', to: 'Kyela', fromValue: 'songea', toValue: 'kyela' },
    { from: 'Songea', to: 'Tunduma', fromValue: 'songea', toValue: 'tunduma' },
    { from: 'Songea', to: 'Mbeya', fromValue: 'songea', toValue: 'mbeya' },
    { from: 'Songea', to: 'Makambako', fromValue: 'songea', toValue: 'makambako' },
    { from: 'Songea', to: 'Iringa', fromValue: 'songea', toValue: 'iringa' },
    { from: 'Songea', to: 'Njombe', fromValue: 'songea', toValue: 'njombe' },
    { from: 'Songea', to: 'Mtwara', fromValue: 'songea', toValue: 'mtwara' },
    { from: 'Songea', to: 'Masasi', fromValue: 'songea', toValue: 'masasi' },
    { from: 'Songea', to: 'Tunduru', fromValue: 'songea', toValue: 'tunduru' },
    { from: 'Songea', to: 'Mbinga', fromValue: 'songea', toValue: 'mbinga' },
    { from: 'Songea', to: 'Mbambabay', fromValue: 'songea', toValue: 'mbambabay' },
    
    // All routes from Mbeya to destinations
    { from: 'Mbeya', to: 'Mtwara', fromValue: 'mbeya', toValue: 'mtwara' },
    { from: 'Mbeya', to: 'Songea', fromValue: 'mbeya', toValue: 'songea' },
    { from: 'Mbeya', to: t('kiuma'), fromValue: 'mbeya', toValue: 'kiuma' },
    { from: 'Mbeya', to: 'Tunduru', fromValue: 'mbeya', toValue: 'tunduru' },
    { from: 'Mbeya', to: t('mangaka'), fromValue: 'mbeya', toValue: 'mangaka' },
    { from: 'Mbeya', to: 'Masasi', fromValue: 'mbeya', toValue: 'masasi' },
    { from: 'Mbeya', to: t('ndanda'), fromValue: 'mbeya', toValue: 'ndanda' },
    { from: 'Mbeya', to: t('mtama'), fromValue: 'mbeya', toValue: 'mtama' },
    { from: 'Mbeya', to: t('mnaziMmoja'), fromValue: 'mbeya', toValue: 'mnazi-mmoja' },
    { from: 'Mbeya', to: 'Makambako', fromValue: 'mbeya', toValue: 'makambako' },
    { from: 'Mbeya', to: t('masasiMjini'), fromValue: 'mbeya', toValue: 'masasi-mjini' },
    { from: 'Mbeya', to: t('namtumbo'), fromValue: 'mbeya', toValue: 'namtumbo' },
    { from: 'Mbeya', to: 'Njombe', fromValue: 'mbeya', toValue: 'njombe' },
  ];

  const handleBookRoute = (route) => {
    // Navigate to home page with route parameters
    navigate(`/?from=${route.fromValue}&to=${route.toValue}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-selous-purple-100 via-selous-gray-100 to-selous-gold-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bebas font-bold text-selous-purple-800 mb-4 tracking-wide">
            {t('ourRoutes')}
          </h1>
          <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
            {t('routesDesc')}
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-6 border border-selous-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-selous-gold-400 to-selous-gold-500 rounded-full shadow-sm"></div>
                  <span className="font-poppins font-semibold text-gray-800">{route.from}</span>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                <div className="flex items-center space-x-2">
                  <span className="font-poppins font-semibold text-gray-800">{route.to}</span>
                  <div className="w-3 h-3 bg-gradient-to-br from-selous-gold-400 to-selous-gold-500 rounded-full shadow-sm"></div>
                </div>
              </div>


              <button 
                onClick={() => handleBookRoute(route)}
                className="w-full mt-4 bg-gradient-to-r from-selous-gold-400 to-selous-gold-500 hover:from-selous-gold-500 hover:to-selous-gold-600 text-selous-gray-800 font-poppins font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t('bookThisRoute')}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bebas font-bold text-selous-navy mb-6 tracking-wide text-center">
            ROUTE INFORMATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bebas font-bold text-gray-800 mb-3">{t('departureTimes')}</h3>
              <ul className="space-y-2 font-poppins text-gray-600">
                <li>• {t('morningTime')}</li>
                <li>• {t('afternoonTime')}</li>
                <li>• {t('eveningTime')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bebas font-bold text-gray-800 mb-3">{t('amenities')}</h3>
              <ul className="space-y-2 font-poppins text-gray-600">
                <li>• {t('airConditioning')}</li>
                <li>• {t('comfortableSeats')}</li>
                <li>• {t('freeWifi')}</li>
                <li>• {t('chargingPorts')}</li>
                <li>• {t('entertainmentSystem')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;