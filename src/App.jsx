import "./App.css";
import Body from "./components/body";
import React from "react";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
import Navbar from "./components/Navbar/Navbar";
import { TbLayoutNavbar } from "react-icons/tb";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SectionHero></SectionHero>

        <div>
          <Routes>
            {/* Page d'accueil temporaire */}
            <Route path="/" element={<h1>Bienvenue sur notre site !</h1>} />

            {/* Page Contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Body />

          {/* Footer présent sur toutes les pages */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
