import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import './Hero.css';

const socialLinks = [
  { id: 1, href: 'https://wa.me/201270920863', icon: <FaWhatsapp />, label: 'WhatsApp' },
  { id: 2, href: 'https://www.instagram.com/pargal_clean?igsh=MW9lZjVlaDNidXczNQ==', icon: <FaInstagram />, label: 'Instagram' },
  { id: 3, href: 'https://www.tiktok.com/@pargalclean?_r=1&_t=ZS-96VUO0ANNFX', icon: <FaTiktok />, label: 'TikTok' },
  { id: 4, href: 'https://www.facebook.com/share/1GLaCPLTJ3/', icon: <FaFacebookF />, label: 'Facebook' }
];

const Hero = ({ content }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div
          className="hero-logo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="https://i.ibb.co/x8MRf7Z5/pargal-logo.png" alt="Barjal Cleaning" />
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socialLinks.map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="hero-social-icon">
              {item.icon}
            </a>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {content.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.text}
        </motion.p>
        <motion.div
          className="hero-benefits"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {content.benefits.map((item, index) => (
            <div key={index} className="hero-benefit">
              {item}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="btn btn-primary animate-float hero-cta">
            {content.cta}
          </a>
        </motion.div>
        <motion.div
          className="hero-gallery"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {content.gallery.map((item) => (
            <div key={item.id} className="hero-gallery-card">
              <div className="hero-gallery-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <p>{item.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
