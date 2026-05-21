import React from 'react';
import { motion } from 'framer-motion';
import { FaCity, FaUmbrellaBeach, FaWater } from 'react-icons/fa';
import './Areas.css';

const iconMap = {
  city: <FaCity />,
  beach: <FaUmbrellaBeach />,
  water: <FaWater />
};

const Areas = ({ content }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="areas" className="areas-section">
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
          className="areas-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.list.map((area) => (
            <motion.div
              key={area.id}
              className="area-card"
              variants={itemVariants}
              style={{ backgroundImage: `url(${area.image})` }}
            >
              <div className="area-overlay"></div>
              <div className="area-content">
                <div className="area-icon">{iconMap[area.icon] || <FaCity />}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Areas;
