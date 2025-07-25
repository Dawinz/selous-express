import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import React, { useState } from 'react';
import Home from './pages/Home';
import RoutesPage from './pages/Routes';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Book from './pages/Book';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className={`min-h-screen font-poppins${isBookingDialogOpen ? ' blur-sm pointer-events-none select-none' : ''}`}>
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home setIsBookingDialogOpen={setIsBookingDialogOpen} />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Float */}
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}

export default App;
