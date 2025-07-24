import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Routes = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const routes = [
    { from: t('darEsSalaam'), to: t('mwanza'), price: 'TSh 65,000', duration: '12 hours', fromValue: 'dar-es-salaam', toValue: 'mwanza' },
    { from: t('mwanza'), to: t('darEsSalaam'), price: 'TSh 65,000', duration: '12 hours', fromValue: 'mwanza', toValue: 'dar-es-salaam' },
    { from: t('mwanza'), to: t('kahama'), price: 'TSh 14,000', duration: '4 hours', fromValue: 'mwanza', toValue: 'kahama' },
    { from: t('kahama'), to: t('mwanza'), price: 'TSh 14,000', duration: '4 hours', fromValue: 'kahama', toValue: 'mwanza' },
    { from: t('mwanza'), to: t('moshi'), price: 'TSh 48,000', duration: '8 hours', fromValue: 'mwanza', toValue: 'moshi' },
    { from: t('moshi'), to: t('mwanza'), price: 'TSh 48,000', duration: '8 hours', fromValue: 'moshi', toValue: 'mwanza' },
  ];

  const handleBookRoute = (route) => {
    // Navigate to home page with route parameters
    navigate(`/?from=${route.fromValue}&to=${route.toValue}`);
  };

  return (
    <div className="min-h-screen bg-kisesa-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bebas font-bold text-kisesa-blue mb-4 tracking-wide">
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
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-kisesa-orange rounded-full"></div>
                  <span className="font-poppins font-semibold text-gray-800">{route.from}</span>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                <div className="flex items-center space-x-2">
                  <span className="font-poppins font-semibold text-gray-800">{route.to}</span>
                  <div className="w-3 h-3 bg-kisesa-orange rounded-full"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-poppins text-gray-600">{t('price')}</span>
                  <span className="text-lg font-bebas font-bold text-kisesa-orange">{route.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-poppins text-gray-600">{t('duration')}</span>
                  <span className="text-sm font-poppins font-semibold text-gray-800">{route.duration}</span>
                </div>
              </div>

              <button 
                onClick={() => handleBookRoute(route)}
                className="w-full mt-4 bg-kisesa-yellow hover:bg-yellow-500 text-kisesa-blue font-poppins font-bold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                {t('bookThisRoute')}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bebas font-bold text-kisesa-navy mb-6 tracking-wide text-center">
            ROUTE INFORMATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bebas font-bold text-gray-800 mb-3">DEPARTURE TIMES</h3>
              <ul className="space-y-2 font-poppins text-gray-600">
                <li>• Morning: 6:00 AM - 8:00 AM</li>
                <li>• Afternoon: 2:00 PM - 4:00 PM</li>
                <li>• Evening: 8:00 PM - 10:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bebas font-bold text-gray-800 mb-3">AMENITIES</h3>
              <ul className="space-y-2 font-poppins text-gray-600">
                <li>• Air Conditioning</li>
                <li>• Comfortable Reclining Seats</li>
                <li>• Free WiFi</li>
                <li>• Charging Ports</li>
                <li>• Entertainment System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;