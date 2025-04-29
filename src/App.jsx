// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Contact from './components/Footer/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Page d'accueil temporaire */}
          <Route path="/" element={<h1>Bienvenue sur notre site !</h1>} />

          {/* Page Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer présent sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
