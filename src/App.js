import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import Home from './pages/Home';
import RoutesPage from './pages/Routes';
import Contact from './pages/Contact';
import DownloadTicket from './pages/DownloadTicket';
import Book from './pages/Book';

function App() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-50 font-poppins${isBookingDialogOpen ? ' blur-sm pointer-events-none select-none' : ''}`}>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home setIsBookingDialogOpen={setIsBookingDialogOpen} />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download-ticket" element={<DownloadTicket />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
