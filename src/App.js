import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoutesPage from './pages/Routes';
import Contact from './pages/Contact';
import DownloadTicket from './pages/DownloadTicket';
import Book from './pages/Book';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
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
