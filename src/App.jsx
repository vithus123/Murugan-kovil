import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pooja from './pages/Pooja';
import Events from './pages/Events';
import Donations from './pages/Donations';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pooja" element={<Pooja />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
