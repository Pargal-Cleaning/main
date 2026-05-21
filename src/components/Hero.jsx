import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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
          <img src="https://i.ibb.co/x8MRf7Z5/pargal-logo.png" alt="Pargal Cleaning" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          النظافة المثالية لمنزلك تبدأ من هنا
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          نقدم خدمات الهاوس كيبينج الاحترافية في القاهرة، الإسكندرية، وخط الساحل بالكامل. دعنا نعتني بمنزلك ليبقى نظيفاً ومشرقاً.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://wa.me/201270920863" target="_blank" rel="noreferrer" className="btn btn-primary animate-float">
            تواصل معنا عبر الواتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
