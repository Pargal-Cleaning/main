import React from 'react';
import { motion } from 'framer-motion';
import { FaCity, FaUmbrellaBeach, FaWater } from 'react-icons/fa';
import './Areas.css';

const Areas = () => {
  const areas = [
    {
      id: 1,
      title: 'القاهرة',
      icon: <FaCity />,
      description: 'نغطي جميع أنحاء القاهرة الكبرى بخدمات تنظيف فورية وموثوقة.'
    },
    {
      id: 2,
      title: 'الإسكندرية',
      icon: <FaWater />,
      description: 'نصل إليك في عروس البحر المتوسط لنضمن لك منزلاً نظيفاً بأعلى جودة.'
    },
    {
      id: 3,
      title: 'خط الساحل',
      icon: <FaUmbrellaBeach />,
      description: 'خدماتنا تمتد على طول الساحل الشمالي لراحتك أثناء عطلتك الصيفية.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
          <h2>مناطق التغطية</h2>
          <p>نحن دائمًا بالقرب منك في أهم المدن والمناطق</p>
        </motion.div>
        
        <motion.div 
          className="areas-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {areas.map((area) => (
            <motion.div key={area.id} className="area-card" variants={cardVariants}>
              <div className="area-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Areas;
