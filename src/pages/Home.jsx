import React from 'react';
import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import Gallery from '../components/Gallery';

const Home = ({ setIsBookingDialogOpen }) => {
  return (
    <div className="min-h-screen bg-zuberi-navy">
      {/* Hero Section with Overlay Form on Mobile */}
      <section className="relative">
        <Hero />
        {/* Mobile Form Overlay */}
        <div className="absolute top-1/3 left-0 right-0 flex justify-center md:hidden">
          <div className="w-full max-w-48 mx-6">
            <SearchForm setIsBookingDialogOpen={setIsBookingDialogOpen} />
          </div>
        </div>
      </section>
      {/* Search Form Section - Hidden on Mobile, Visible on Desktop */}
      <section className="hidden md:block pt-4 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SearchForm setIsBookingDialogOpen={setIsBookingDialogOpen} />
        </div>
      </section>
      {/* Features Section */}
      <section className="py-8 bg-zuberi-silver mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bebas font-bold text-zuberi-navy mb-4 tracking-wide">
              WHY CHOOSE ZUBERI EXPRESS
            </h2>
            <p className="text-lg text-zuberi-navy font-poppins max-w-2xl mx-auto">
              Experience the difference with our premium bus services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg bg-white border border-zuberi-silver hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-zuberi-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bebas font-bold text-zuberi-navy mb-2 tracking-wide">
                PREMIUM COMFORT
              </h3>
              <p className="text-zuberi-navy font-poppins">
                Luxury seats, air conditioning, and spacious interiors for your comfort
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg bg-white border border-zuberi-silver hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-zuberi-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zuberi-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bebas font-bold text-zuberi-navy mb-2 tracking-wide">
                ON-TIME DEPARTURE
              </h3>
              <p className="text-zuberi-navy font-poppins">
                Reliable schedules and punctual service you can depend on
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg bg-white border border-zuberi-silver hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-zuberi-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bebas font-bold text-zuberi-navy mb-2 tracking-wide">
                SAFE TRAVEL
              </h3>
              <p className="text-zuberi-navy font-poppins">
                Professional drivers and well-maintained vehicles for your safety
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <Gallery />
    </div>
  );
};

export default Home;