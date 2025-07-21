import React from 'react';

const Routes = () => {
  const routes = [
    { from: 'Dar es Salaam', to: 'Mwanza', price: 'TSh 45,000', duration: '12 hours' },
    { from: 'Mwanza', to: 'Dar es Salaam', price: 'TSh 45,000', duration: '12 hours' },
    { from: 'Mwanza', to: 'Kahama', price: 'TSh 15,000', duration: '4 hours' },
    { from: 'Kahama', to: 'Mwanza', price: 'TSh 15,000', duration: '4 hours' },
    { from: 'Mwanza', to: 'Moshi', price: 'TSh 35,000', duration: '10 hours' },
    { from: 'Moshi', to: 'Mwanza', price: 'TSh 35,000', duration: '10 hours' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bebas font-bold text-zuberi-navy mb-4 tracking-wide">
            OUR ROUTES
          </h1>
          <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
            Discover all the destinations we serve with our premium bus services
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
                  <div className="w-3 h-3 bg-zuberi-red rounded-full"></div>
                  <span className="font-poppins font-semibold text-gray-800">{route.from}</span>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                <div className="flex items-center space-x-2">
                  <span className="font-poppins font-semibold text-gray-800">{route.to}</span>
                  <div className="w-3 h-3 bg-zuberi-lime rounded-full"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-poppins text-gray-600">Price:</span>
                  <span className="text-lg font-bebas font-bold text-zuberi-red">{route.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-poppins text-gray-600">Duration:</span>
                  <span className="text-sm font-poppins font-semibold text-gray-800">{route.duration}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-zuberi-navy hover:bg-blue-800 text-white font-poppins font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                Book This Route
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bebas font-bold text-zuberi-navy mb-6 tracking-wide text-center">
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