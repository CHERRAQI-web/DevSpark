import React, { useState } from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">ElevateMind</h3>
            <p className="footer-text">nous n',écrivons pas seulement du code - nous construisions le future, linge par line.</p>
            <div className="social-icons">
            <a href="" style={{ color: "#190bb5" }}>
  <FaFacebook size={25} />
</a>

              <a href="" style={{ color: "#190bb5" }}><FaXTwitter size={25}/></a>
              <a href="" style={{ color: "#190bb5" }}><FaInstagram size={25}/></a>
              <a href="" style={{ color: "#190bb5" }}><CiLinkedin size={25}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">lien rapide</h3>
            <ul className="footer-links">
              <li><a href="#">accueil</a></li>
              <li><a href="#">á prpos se nous</a></li>
              <li><Link to="/contact">Contact</Link></li>  {/* Link to the contact page */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">contacté nous</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@company.com">ElevateMind@.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+1234567890">+121 676985063</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 techno Park, SAFI, Morocco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} ElevateMind. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
