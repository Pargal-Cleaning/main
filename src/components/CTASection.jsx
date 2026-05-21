import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import './CTASection.css';

const CTASection = ({ content }) => {
  return (
    <section id="contact" className="cta-section">
      <div className="container cta-container">
        <div>
          <p className="cta-small">{content.small}</p>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className="cta-actions">
          <a href="tel:+201270920863" className="icon-btn call-btn" title="Call directly">
            <FaPhone />
          </a>
          <a href="https://wa.me/201270920863" target="_blank" rel="noreferrer" className="icon-btn whatsapp-btn" title="WhatsApp now">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
