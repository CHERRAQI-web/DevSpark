import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
import Body from "./components/body";
import QuiSommesnous from "./components/QuiSommesnous";
import Contact from "./components/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Router components

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the app in BrowserRouter */}
      <div className="app">
        <Navbar />
        <main>
          <SectionHero />
          <Body />
        </main>

        {/* Set up routing here */}
        <Routes>
          <Route path="/" element={<Body />} /> {/* This is your homepage */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* This will show the contact page */}
        </Routes>

        {/* Footer is common, so it remains at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
