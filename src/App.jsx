import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
import Body from "./components/body";
import QuiSommesnous from "./components/QuiSommesnous";
import Contact from "./components/contact";
import AjoutArticle from "./AjoutArticle";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionHero />
                <Body />
                <QuiSommesnous />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />

          <Route path="/créeblog" element={<AjoutArticle />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
