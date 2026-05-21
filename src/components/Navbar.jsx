import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src="https://i.ibb.co/x8MRf7Z5/pargal-logo.png" alt="Pargal Cleaning Logo" />
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>الرئيسية</a></li>
          <li><a href="#services" onClick={toggleMenu}>خدماتنا</a></li>
          <li><a href="#areas" onClick={toggleMenu}>مناطق التغطية</a></li>
          <li className="mobile-btn-wrapper">
            <a href="https://wa.me/201270920863" target="_blank" rel="noreferrer" className="btn btn-primary nav-btn w-100 text-center">
              احجز الآن
            </a>
          </li>
        </ul>
        
        <a href="https://wa.me/201270920863" target="_blank" rel="noreferrer" className="btn btn-primary nav-btn desktop-btn">
          احجز الآن
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
