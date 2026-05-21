import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src="https://i.ibb.co/x8MRf7Z5/pargal-logo.png" alt="Barjal Cleaning Logo" className="footer-logo" />
          <p>{content.description}</p>
          <p className="footer-note">{content.note}</p>
        </div>

        <div className="footer-social">
          <h3>{content.contactTitle}</h3>
          <div className="social-icons">
            <a href="https://wa.me/201270920863" target="_blank" rel="noreferrer" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/pargal_clean?igsh=MW9lZjVlaDNidXczNQ==" target="_blank" rel="noreferrer" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@pargalclean?_r=1&_t=ZS-96VUO0ANNFX" target="_blank" rel="noreferrer" className="social-icon tiktok">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/share/1GLaCPLTJ3/" target="_blank" rel="noreferrer" className="social-icon facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} برجل. {content.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
