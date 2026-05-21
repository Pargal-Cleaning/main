import React from 'react';
import { FaShieldAlt, FaHandsHelping, FaClock, FaLeaf } from 'react-icons/fa';
import './WhyChooseUs.css';

const iconMap = {
  1: <FaShieldAlt />,
  2: <FaHandsHelping />,
  3: <FaClock />,
  4: <FaLeaf />
};

const WhyChooseUs = ({ content }) => {
  return (
    <section id="why" className="why-section">
      <div className="container">
        <div className="section-header">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="why-grid">
          {content.cards.map((benefit, index) => (
            <div key={benefit.id} className="why-card">
              <div className="why-icon">{iconMap[benefit.id] || <FaShieldAlt />}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
