import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Routes = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const routes = [
    // All routes from Songea to destinations
    { from: 'Songea', to: t('moshi'), fromValue: 'songea', toValue: 'moshi', price: 'TSh 85,000' },
    { from: 'Songea', to: 'Dodoma', fromValue: 'songea', toValue: 'dodoma', price: 'TSh 65,000' },
    { from: 'Songea', to: t('mwanza'), fromValue: 'songea', toValue: 'mwanza', price: 'TSh 75,000' },
    { from: 'Songea', to: t('darEsSalaam'), fromValue: 'songea', toValue: 'dar-es-salaam', price: 'TSh 95,000' },
    { from: 'Songea', to: 'Kyela', fromValue: 'songea', toValue: 'kyela', price: 'TSh 45,000' },
    { from: 'Songea', to: 'Tunduma', fromValue: 'songea', toValue: 'tunduma', price: 'TSh 50,000' },
    { from: 'Songea', to: 'Mbeya', fromValue: 'songea', toValue: 'mbeya', price: 'TSh 55,000' },
    { from: 'Songea', to: 'Makambako', fromValue: 'songea', toValue: 'makambako', price: 'TSh 40,000' },
    { from: 'Songea', to: 'Iringa', fromValue: 'songea', toValue: 'iringa', price: 'TSh 50,000' },
    { from: 'Songea', to: 'Njombe', fromValue: 'songea', toValue: 'njombe', price: 'TSh 35,000' },
    { from: 'Songea', to: 'Mtwara', fromValue: 'songea', toValue: 'mtwara', price: 'TSh 80,000' },
    { from: 'Songea', to: 'Masasi', fromValue: 'songea', toValue: 'masasi', price: 'TSh 70,000' },
    { from: 'Songea', to: 'Tunduru', fromValue: 'songea', toValue: 'tunduru', price: 'TSh 60,000' },
    { from: 'Songea', to: 'Mbinga', fromValue: 'songea', toValue: 'mbinga', price: 'TSh 55,000' },
    { from: 'Songea', to: 'Mbambabay', fromValue: 'songea', toValue: 'mbambabay', price: 'TSh 75,000' },
    
    // All routes from destinations to Songea (return routes)
    { from: t('moshi'), to: 'Songea', fromValue: 'moshi', toValue: 'songea', price: 'TSh 85,000' },
    { from: 'Dodoma', to: 'Songea', fromValue: 'dodoma', toValue: 'songea', price: 'TSh 65,000' },
    { from: t('mwanza'), to: 'Songea', fromValue: 'mwanza', toValue: 'songea', price: 'TSh 75,000' },
    { from: t('darEsSalaam'), to: 'Songea', fromValue: 'dar-es-salaam', toValue: 'songea', price: 'TSh 95,000' },
    { from: 'Kyela', to: 'Songea', fromValue: 'kyela', toValue: 'songea', price: 'TSh 45,000' },
    { from: 'Tunduma', to: 'Songea', fromValue: 'tunduma', toValue: 'songea', price: 'TSh 50,000' },
    { from: 'Mbeya', to: 'Songea', fromValue: 'mbeya', toValue: 'songea', price: 'TSh 31,000' },
    { from: 'Makambako', to: 'Songea', fromValue: 'makambako', toValue: 'songea', price: 'TSh 40,000' },
    { from: 'Iringa', to: 'Songea', fromValue: 'iringa', toValue: 'songea', price: 'TSh 50,000' },
    { from: 'Njombe', to: 'Songea', fromValue: 'njombe', toValue: 'songea', price: 'TSh 35,000' },
    { from: 'Mtwara', to: 'Songea', fromValue: 'mtwara', toValue: 'songea', price: 'TSh 80,000' },
    { from: 'Masasi', to: 'Songea', fromValue: 'masasi', toValue: 'songea', price: 'TSh 70,000' },
    { from: 'Tunduru', to: 'Songea', fromValue: 'tunduru', toValue: 'songea', price: 'TSh 60,000' },
    { from: 'Mbinga', to: 'Songea', fromValue: 'mbinga', toValue: 'songea', price: 'TSh 55,000' },
    { from: 'Mbambabay', to: 'Songea', fromValue: 'mbambabay', toValue: 'songea', price: 'TSh 75,000' },
    
    // All routes from Mbeya to destinations
    { from: 'Mbeya', to: 'Mtwara', fromValue: 'mbeya', toValue: 'mtwara', price: 'TSh 75,000' },
    { from: 'Mbeya', to: t('kiuma'), fromValue: 'mbeya', toValue: 'kiuma', price: 'TSh 42,000' },
    { from: 'Mbeya', to: 'Tunduru', fromValue: 'mbeya', toValue: 'tunduru', price: 'TSh 49,000' },
    { from: 'Mbeya', to: t('mangaka'), fromValue: 'mbeya', toValue: 'mangaka', price: 'TSh 58,000' },
    { from: 'Mbeya', to: 'Masasi', fromValue: 'mbeya', toValue: 'masasi', price: 'TSh 61,000' },
    { from: 'Mbeya', to: t('ndanda'), fromValue: 'mbeya', toValue: 'ndanda', price: 'TSh 65,000' },
    { from: 'Mbeya', to: t('mtama'), fromValue: 'mbeya', toValue: 'mtama', price: 'TSh 65,000' },
    { from: 'Mbeya', to: t('mnaziMmoja'), fromValue: 'mbeya', toValue: 'mnazi-mmoja', price: 'TSh 65,000' },
    { from: 'Mbeya', to: 'Makambako', fromValue: 'mbeya', toValue: 'makambako', price: 'TSh 30,000' },
    { from: 'Mbeya', to: t('masasiMjini'), fromValue: 'mbeya', toValue: 'masasi-mjini', price: 'TSh 62,000' },
    { from: 'Mbeya', to: t('namtumbo'), fromValue: 'mbeya', toValue: 'namtumbo', price: 'TSh 45,000' },
    { from: 'Mbeya', to: 'Njombe', fromValue: 'mbeya', toValue: 'njombe', price: 'TSh 38,000' },
  ];

  const handleBookRoute = (route) => {
    // Navigate to home page with route parameters
    navigate(`/?from=${route.fromValue}&to=${route.toValue}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-selous-purple-100 via-selous-purple-50 to-selous-purple-200 py-8">
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
              className="bg-gradient-to-br from-selous-purple-50 via-white to-selous-purple-100 rounded-xl shadow-lg p-6 border border-selous-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-br from-selous-purple-500 to-selous-purple-600 rounded-full shadow-sm"></div>
                  <span className="font-poppins font-semibold text-gray-800">{route.from}</span>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                <div className="flex items-center space-x-2">
                  <span className="font-poppins font-semibold text-gray-800">{route.to}</span>
                  <div className="w-3 h-3 bg-gradient-to-br from-selous-purple-500 to-selous-purple-600 rounded-full shadow-sm"></div>
                </div>
              </div>

              {/* Price Display */}
              {route.price && (
                <div className="mb-4 text-center">
                  <span className="text-lg font-bebas font-bold text-selous-purple-700">{route.price}</span>
                </div>
              )}

              <button 
                onClick={() => handleBookRoute(route)}
                className="w-full mt-4 bg-gradient-to-r from-selous-purple-600 to-selous-purple-700 hover:from-selous-purple-700 hover:to-selous-purple-800 text-white font-poppins font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t('bookThisRoute')}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-br from-selous-purple-50 via-white to-selous-purple-100 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bebas font-bold text-selous-purple-800 mb-6 tracking-wide text-center">
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