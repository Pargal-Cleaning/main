import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ content, locale, setLocale }) => {
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
  const toggleLanguage = () => setLocale(locale === 'ar' ? 'en' : 'ar');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src="https://i.ibb.co/x8MRf7Z5/pargal-logo.png" alt="Barjal Cleaning Logo" />
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="lang-switch"
            onClick={toggleLanguage}
            aria-label={locale === 'ar' ? 'Switch to English' : 'Switch to Arabic'}
          >
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>

          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {menuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>{content.home}</a></li>
            <li><a href="#why" onClick={toggleMenu}>{content.why}</a></li>
            <li><a href="#services" onClick={toggleMenu}>{content.services}</a></li>
            <li><a href="#process" onClick={toggleMenu}>{content.process}</a></li>
            <li><a href="#areas" onClick={toggleMenu}>{content.areas}</a></li>
            <li className="mobile-btn-wrapper">
              <a href="#contact" onClick={toggleMenu} className="btn btn-primary nav-btn w-100 text-center">
                {content.ctaButton}
              </a>
            </li>
          </ul>

          <a href="#contact" className="btn btn-primary nav-btn desktop-btn">
            {content.ctaButton}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
