import React, { useState, useEffect, useRef } from 'react';
import SafariYetuScrollManager from '../utils/safariYetuScrollManager';
import SafariYetuOverlay from '../components/SafariYetuOverlay';

const Book = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pickupStation, setPickupStation] = useState('');
  const [dropOffStation, setDropOffStation] = useState('');
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [currentBookingData, setCurrentBookingData] = useState({});
  const [operatorId] = useState('430510003');
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

  // Station data for pickup and drop-off
  const darStations = ['Ubungo Terminal', 'Kariakoo Station', 'Magomeni Terminal'];
  const mwanzaStations = ['Mwanza Central Station', 'Nyegezi Terminal', 'Buzuruga Station'];

  // Mock seat data - in a real app this would come from the booking system
  const generateSeats = () => {
    const seats = [];
    const totalSeats = 40; // Typical luxury bus capacity
    const unavailableSeats = [5, 12, 18, 23, 27, 31]; // Mock unavailable seats

    for (let i = 1; i <= totalSeats; i++) {
      seats.push({
        number: i,
        isAvailable: !unavailableSeats.includes(i),
        isSelected: selectedSeats.includes(i)
      });
    }
    return seats;
  };

  const seats = generateSeats();

  const handleSeatClick = (seatNumber) => {
    const seat = seats.find(s => s.number === seatNumber);
    if (!seat.isAvailable) return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleProceedToPayment = async () => {
    // Validation
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }
    
    if (!pickupStation) {
      alert('Please select a pickup station');
      return;
    }
    
    if (!dropOffStation) {
      alert('Please select a drop-off station');
      return;
    }

    // Clean up any existing scroll manager
    if (scrollManagerRef.current) {
      scrollManagerRef.current.cleanup();
    }

    try {
      // Prepare booking data for SafariYetu
      const bookingData = {
        operatorId: operatorId,
        origin: pickupStation,
        destination: dropOffStation,
        departureDate: new Date().toISOString().split('T')[0], // Today's date as fallback
        passengersCount: selectedSeats.length,
        selectedSeats: selectedSeats,
        onClose: () => {
          console.log('SafariYetu payment dialog closed via callback');
          setIsLoading(false);
          setIsBookingDialogOpen(false);
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
          // Development mock - use scroll manager for testing
          scrollManagerRef.current.disableScroll();
          
          setTimeout(() => {
            alert(`Mock SafariYetu Payment:\nSeats: ${selectedSeats.join(', ')}\nPickup: ${pickupStation}\nDrop-off: ${dropOffStation}\nPassengers: ${selectedSeats.length}`);
            
            // Simulate payment dialog closing
            if (scrollManagerRef.current) {
              scrollManagerRef.current.enableScroll();
              scrollManagerRef.current.cleanup();
            }
            setIsLoading(false);
            setIsBookingDialogOpen(false);
            setCurrentBookingData({});
          }, 2000);
          return;
        } else {
          throw new Error('SafariYetu payment system is loading. Please try again in a moment.');
        }
      }

      // Use scroll manager to open SafariYetu payment dialog
      await scrollManagerRef.current.openBookingDialog(bookingData);

    } catch (error) {
      console.error('SafariYetu payment error:', error);
      alert(error.message || 'Unable to load payment system. Please try again.');
      
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

  const getSeatClass = (seat) => {
    if (!seat.isAvailable) {
      return 'bg-gray-300 cursor-not-allowed';
    }
    if (seat.isSelected) {
      return 'bg-selous-orange text-white cursor-pointer';
    }
    return 'bg-white border-2 border-gray-300 hover:border-selous-orange cursor-pointer';
  };

  // Show overlay instead of completely replacing the UI
  const showOverlay = isBookingDialogOpen;

  return (
    <div className="min-h-screen bg-gradient-to-br from-selous-purple-100 via-selous-purple-50 to-selous-purple-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/images/selous-logo.png" 
              alt="Selous Express Logo" 
              className="h-16 w-16"
            />
            <h1 className="text-4xl md:text-5xl font-bebas font-bold text-selous-purple-800 tracking-wide">
              SELECT YOUR SEATS
            </h1>
          </div>
          <p className="text-lg text-gray-600 font-poppins">
            Choose your preferred seats for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat Map */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-8">
              {/* Driver Section */}
              <div className="flex justify-center mb-6">
                <div className="bg-selous-navy text-white px-4 py-2 rounded-lg font-bebas font-bold">
                  DRIVER
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center space-x-6 mb-8 text-sm font-poppins">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-selous-orange rounded"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>Unavailable</span>
                </div>
              </div>

              {/* Seat Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
                {seats.map((seat) => (
                  <button
                    key={seat.number}
                    onClick={() => handleSeatClick(seat.number)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-bebas font-bold text-xs sm:text-sm transition-all duration-200 ${getSeatClass(seat)}`}
                    disabled={!seat.isAvailable}
                  >
                    {seat.number}
                  </button>
                ))}
              </div>

              {/* Aisle Indication */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500 font-poppins">
                  Seats 1-2 and 3-4 are separated by an aisle
                </p>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            {/* Trip Details */}
            <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bebas font-bold text-selous-navy mb-4 tracking-wide">
                TRIP DETAILS
              </h3>
              <div className="space-y-3 text-sm font-poppins">
                <div className="flex justify-between">
                  <span className="text-gray-600">Route:</span>
                  <span className="font-semibold">Dar es Salaam → Mwanza</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">Today, Dec 20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Departure:</span>
                  <span className="font-semibold">8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Arrival:</span>
                  <span className="font-semibold">6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Selected Seats */}
            <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bebas font-bold text-selous-navy mb-4 tracking-wide">
                SELECTED SEATS
              </h3>
              {selectedSeats.length === 0 ? (
                <p className="text-gray-500 font-poppins text-sm">No seats selected</p>
              ) : (
                <div className="space-y-2">
                  {selectedSeats.map(seatNumber => (
                    <div key={seatNumber} className="flex justify-between items-center">
                      <span className="font-poppins">Seat {seatNumber}</span>
                      <span className="font-bebas font-bold text-selous-orange">TSh 45,000</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Station Selection */}
            <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bebas font-bold text-selous-navy mb-4 tracking-wide">
                PICKUP & DROP-OFF
              </h3>
              <div className="space-y-4">
                {/* Pickup Station */}
                <div>
                  <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                    📍 Pickup Station
                  </label>
                  <select
                    value={pickupStation}
                    onChange={(e) => setPickupStation(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-selous-orange focus:outline-none font-poppins text-sm"
                    required
                  >
                    <option value="">Select pickup station</option>
                    {darStations.map(station => (
                      <option key={station} value={station}>{station}</option>
                    ))}
                  </select>
                </div>

                {/* Drop-off Station */}
                <div>
                  <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                    📍 Drop-off Station
                  </label>
                  <select
                    value={dropOffStation}
                    onChange={(e) => setDropOffStation(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-selous-orange focus:outline-none font-poppins text-sm"
                    required
                  >
                    <option value="">Select drop-off station</option>
                    {mwanzaStations.map(station => (
                      <option key={station} value={station}>{station}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bebas font-bold text-selous-navy mb-4 tracking-wide">
                PRICE SUMMARY
              </h3>
              <div className="space-y-2 text-sm font-poppins">
                <div className="flex justify-between">
                  <span>Seats ({selectedSeats.length}):</span>
                  <span>TSh {(selectedSeats.length * 45000).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee:</span>
                  <span>TSh 2,000</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-selous-orange">
                    TSh {(selectedSeats.length * 45000 + 2000).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleProceedToPayment}
              disabled={selectedSeats.length === 0 || !pickupStation || !dropOffStation || isLoading}
              className={`w-full text-white font-poppins font-bold py-4 px-6 rounded-lg transition-all duration-200 ${
                selectedSeats.length === 0 || !pickupStation || !dropOffStation || isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-selous-orange hover:bg-orange-600 transform hover:scale-105'
              } shadow-lg`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSING...
                </div>
              ) : (
                'PROCEED TO PAYMENT'
              )}
            </button>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <p className="text-sm font-poppins font-semibold text-green-800">Secure Payment</p>
                  <p className="text-xs font-poppins text-green-700">
                    Your payment is processed securely with 256-bit SSL encryption
                  </p>
                </div>
              </div>
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
  );
};

export default Book;