import React from 'react';

const SafariYetuOverlay = ({ isOpen, bookingData = {} }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white rounded-xl shadow-2xl p-8 mx-4 max-w-md w-full text-center">
        {/* Loading Spinner */}
        <div className="flex items-center justify-center mb-6">
          <svg 
            className="animate-spin h-16 w-16 text-zuberi-red" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bebas font-bold text-zuberi-navy mb-4 tracking-wide">
          OPENING SAFARIYETU
        </h2>

        {/* Description */}
        <p className="text-gray-600 font-poppins mb-6">
          Please wait while we open the SafariYetu booking system...
        </p>

        {/* Booking Details if provided */}
        {bookingData && Object.keys(bookingData).length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            {bookingData.origin && bookingData.destination && (
              <p className="text-sm font-poppins text-gray-700 mb-2">
                <strong>Route:</strong> {bookingData.origin} → {bookingData.destination}
              </p>
            )}
            {bookingData.passengersCount && (
              <p className="text-sm font-poppins text-gray-700 mb-2">
                <strong>Passengers:</strong> {bookingData.passengersCount}
              </p>
            )}
            {bookingData.departureDate && (
              <p className="text-sm font-poppins text-gray-700">
                <strong>Date:</strong> {new Date(bookingData.departureDate).toLocaleDateString()}
              </p>
            )}
            {bookingData.selectedSeats && bookingData.selectedSeats.length > 0 && (
              <p className="text-sm font-poppins text-gray-700">
                <strong>Seats:</strong> {bookingData.selectedSeats.join(', ')}
              </p>
            )}
          </div>
        )}

        {/* Warning Text */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-xs font-poppins text-yellow-800">
            ⚠️ Please do not close this window or navigate away while the booking system is loading.
            Your session will be secured once SafariYetu opens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafariYetuOverlay;