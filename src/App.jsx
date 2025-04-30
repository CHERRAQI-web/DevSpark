<<<<<<< HEAD
import "./App.css";
import Body from "./components/body";
import React from "react";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
import Navbar from "./components/Navbar/Navbar";
import { TbLayoutNavbar } from "react-icons/tb";

function App() {
  return (
    <div className="app">
    <Navbar/>
      <main>
        <SectionHero></SectionHero>
        <Body />
      </main>

      {/* Add the Footer component at the bottom of your page */}
      <Footer />
    </div>
=======
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
>>>>>>> BOUCHRA
  );
}

export default App;
