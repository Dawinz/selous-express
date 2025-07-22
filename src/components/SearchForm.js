import React, { useState, useEffect, useRef } from 'react';
import SafariYetuScrollManager from '../utils/safariYetuScrollManager';
import SafariYetuOverlay from './SafariYetuOverlay';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [currentBookingData, setCurrentBookingData] = useState({});
  const scrollManagerRef = useRef(null);

  // Cleanup scroll manager on component unmount
  useEffect(() => {
    return () => {
      if (scrollManagerRef.current) {
        scrollManagerRef.current.cleanup();
        scrollManagerRef.current = null;
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.from) {
      setError('Please select departure city');
      return false;
    }
    if (!formData.to) {
      setError('Please select destination city');
      return false;
    }
    if (formData.from === formData.to) {
      setError('Departure and destination cities must be different');
      return false;
    }
    if (!formData.date) {
      setError('Please select travel date');
      return false;
    }
    if (!formData.passengers) {
      setError('Please select number of passengers');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate form data
    if (!validateForm()) {
      return;
    }

    // Clean up any existing scroll manager
    if (scrollManagerRef.current) {
      scrollManagerRef.current.cleanup();
    }

    try {
      // Prepare booking data
      const bookingData = {
        origin: formData.from,
        destination: formData.to,
        departureDate: formData.date,
        passengersCount: parseInt(formData.passengers),
        onClose: () => {
          // This callback might not be called by SafariYetu, 
          // so we rely on our monitoring system
          console.log('SafariYetu dialog closed via callback');
          setIsBookingDialogOpen(false);
          setIsLoading(false);
          setCurrentBookingData({});
        }
      };

      // Create new scroll manager instance and set states
      scrollManagerRef.current = SafariYetuScrollManager.createInstance();
      setIsLoading(true);
      setIsBookingDialogOpen(true);
      setCurrentBookingData(bookingData);

      // Check if SafariPlus is loaded, handle development vs production
      if (typeof window.safariplus === 'undefined') {
        if (process.env.NODE_ENV === 'development') {
          // Development mock - still use scroll manager for testing
          scrollManagerRef.current.disableScroll();
          
          setTimeout(() => {
            alert(`Mock Booking Dialog:\nFrom: ${formData.from}\nTo: ${formData.to}\nDate: ${formData.date}\nPassengers: ${formData.passengers}\n\nIn production, this would open SafariYetu booking system.`);
            
            // Simulate dialog closing
            if (scrollManagerRef.current) {
              scrollManagerRef.current.enableScroll();
              scrollManagerRef.current.cleanup();
            }
            setIsLoading(false);
            setIsBookingDialogOpen(false);
            setCurrentBookingData({});
          }, 1500);
          return;
        } else {
          throw new Error('SafariYetu booking system is loading. Please try again in a moment.');
        }
      }

      // Use scroll manager to open SafariYetu dialog
      await scrollManagerRef.current.openBookingDialog(bookingData);

    } catch (error) {
      console.error('SafariYetu booking error:', error);
      setError(error.message || 'Unable to load booking system. Please try again.');
      
      // Clean up on error
      if (scrollManagerRef.current) {
        scrollManagerRef.current.cleanup();
        scrollManagerRef.current = null;
      }
      setIsLoading(false);
      setIsBookingDialogOpen(false);
      setCurrentBookingData({});
    }
  };

  // Common Tanzania routes for Zuberi Luxury
  const popularRoutes = [
    'Dar es Salaam', 'Mwanza', 'Kahama', 'Moshi', 'Arusha', 
    'Dodoma', 'Mbeya', 'Tanga', 'Morogoro', 'Iringa'
  ];

  // Show overlay instead of hiding the form completely
  const showOverlay = isBookingDialogOpen;

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70">
          <svg className="animate-spin h-16 w-16 text-zuberi-red mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <h2 className="text-2xl font-bebas font-bold text-white mb-2 tracking-wide">Processing Booking...</h2>
          <p className="text-gray-200 font-poppins">Please wait while we process your booking.</p>
        </div>
      )}
      <div className={isLoading ? 'blur-sm pointer-events-none select-none' : ''}>
        <div id="search-form" className="bg-white rounded-xl shadow-2xl p-6 md:p-8 mx-4 -mt-12 relative z-20">
          <div className="max-w-6xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bebas font-bold text-zuberi-navy mb-2 tracking-wide">
                FIND YOUR JOURNEY
              </h3>
              <p className="text-gray-600 font-poppins">
                Search and book your premium bus travel
              </p>
              
              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-100 border-2 border-red-400 text-red-800 rounded-lg font-poppins text-base font-semibold">
                  ⚠️ {error}
                </div>
              )}
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* From */}
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-semibold text-gray-700">
                    FROM
                  </label>
                  <select
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-zuberi-red focus:outline-none font-poppins text-gray-700 bg-white text-base"
                    required
                  >
                    <option value="">Select departure</option>
                    {popularRoutes.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* To */}
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-semibold text-gray-700">
                    TO
                  </label>
                  <select
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-zuberi-red focus:outline-none font-poppins text-gray-700 bg-white text-base"
                    required
                  >
                    <option value="">Select destination</option>
                    {popularRoutes.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-semibold text-gray-700">
                    TRAVEL DATE
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-zuberi-red focus:outline-none font-poppins text-gray-700 text-base"
                    required
                  />
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-semibold text-gray-700">
                    PASSENGERS
                  </label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-zuberi-red focus:outline-none font-poppins text-gray-700 bg-white text-base"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <div className="space-y-2">
                  <label className="text-sm font-poppins font-semibold text-transparent">
                    SEARCH
                  </label>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full text-white font-poppins font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-zuberi-red hover:bg-red-600 transform hover:scale-105'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        TAFUTA SAFARI...
                      </div>
                    ) : (
                      'TAFUTA SAFARI'
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Popular Routes Quick Links */}
            <div className="mt-8 text-center">
              <p className="text-sm font-poppins text-gray-600 mb-3">Popular Routes:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { route: 'Dar es Salaam - Mwanza', from: 'Dar es Salaam', to: 'Mwanza' },
                  { route: 'Mwanza - Kahama', from: 'Mwanza', to: 'Kahama' },
                  { route: 'Mwanza - Moshi', from: 'Mwanza', to: 'Moshi' }
                ].map(({ route, from, to }) => (
                  <button
                    key={route}
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        from: from,
                        to: to,
                        date: new Date().toISOString().split('T')[0] // Today's date
                      }));
                      setError('');
                    }}
                    disabled={isLoading}
                    className="text-sm bg-gray-100 hover:bg-zuberi-navy hover:text-white text-gray-700 px-4 py-2 rounded-full font-poppins transition-colors duration-200 disabled:opacity-50"
                  >
                    {route}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* SafariYetu Overlay */}
        {/* <SafariYetuOverlay 
          isOpen={showOverlay} 
          bookingData={currentBookingData}
        /> */}
      </div>
    </div>
  );
};

export default SearchForm;