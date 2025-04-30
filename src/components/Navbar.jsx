import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">DevSpark</div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="#qui-somme">Qui sommes-nous</a>
          </li>
          <li>
            <a href="#postes">Postes</a>
          </li>
          {/* <li><a href="/contact">Contact</a></li> */}
        </ul>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
