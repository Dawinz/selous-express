import React, { useState } from 'react';

const DownloadTicket = () => {
  const [bookingId, setBookingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!bookingId.trim()) {
      alert('Please enter your booking ID');
      return;
    }

    setIsLoading(true);
    
    // Simulate download process - in real app this would integrate with SafariPlus
    setTimeout(() => {
      alert(`Downloading ticket for Booking ID: ${bookingId}\n\nIn a real implementation, this would download your PDF ticket.`);
      setIsLoading(false);
      setBookingId('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="max-w-md mx-auto px-4">
        {/* Card Layout with Shadow and Padding */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          
          {/* Page Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bebas font-bold text-zuberi-navy mb-2 tracking-wide">
              📄 DOWNLOAD YOUR TICKET
            </h1>
          </div>

          {/* Download Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Booking ID Input */}
            <div>
              <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                🔢 Booking ID:
              </label>
              <input
                type="text"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                placeholder="Enter your booking ID or ticket code"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-zuberi-red focus:outline-none font-poppins"
                required
              />
            </div>

            {/* Download Button - Full Width, Red CTA */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-white font-poppins font-bold py-3 px-6 rounded-lg transition-colors duration-200 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-zuberi-red hover:bg-red-600'
              }`}
            >
              {isLoading ? 'DOWNLOADING...' : 'DOWNLOAD TICKET'}
            </button>
          </form>

          {/* Helper Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 font-poppins">
              ℹ️ Ulipata Booking ID kwenye SMS au email baada ya kukata tiketi.
            </p>
          </div>

          {/* Additional Support Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-500 font-poppins mb-2">
                Having trouble finding your Booking ID?
              </p>
              <a
                href="https://wa.me/255789456321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-poppins text-sm font-semibold"
              >
                Contact Support via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadTicket;