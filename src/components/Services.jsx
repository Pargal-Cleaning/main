import React from 'react';
import { motion } from 'framer-motion';
import { FaBroom, FaMagic, FaHammer, FaCouch } from 'react-icons/fa';
import './Services.css';

const iconMap = {
  1: <FaBroom />,
  2: <FaHammer />,
  3: <FaCouch />,
  4: <FaMagic />
};

const Services = ({ content }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="services-section">
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

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.cards.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="service-card-overlay"></div>
              <div className="service-card-content">
                <div className="service-icon">{iconMap[service.id] || <FaBroom />}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
