import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarCheck, FaHandsWash } from 'react-icons/fa';
import './HowItWorks.css';

const iconMap = {
  1: <FaWhatsapp />,
  2: <FaCalendarCheck />,
  3: <FaHandsWash />
};

const HowItWorks = ({ content }) => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </motion.div>

        <div className="process-grid">
          {content.steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="process-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="process-header">
                <span className="process-number">0{step.id}</span>
                <div className="process-icon">{iconMap[step.id] || <FaWhatsapp />}</div>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
