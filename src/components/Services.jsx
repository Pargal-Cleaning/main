import React from 'react';
import { motion } from 'framer-motion';
import { FaBroom, FaMagic, FaBed, FaCouch } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'تنظيف شامل',
      icon: <FaBroom />,
      description: 'نظافة عميقة لجميع غرف المنزل، تشمل الأرضيات والجدران والأسطح المختلفة لتعود وكأنها جديدة.'
    },
    {
      id: 2,
      title: 'تلميع وتعقيم',
      icon: <FaMagic />,
      description: 'استخدام أحدث مواد التعقيم والتلميع الآمنة لضمان بيئة صحية خالية من الجراثيم لعائلتك.'
    },
    {
      id: 3,
      title: 'ترتيب الغرف',
      icon: <FaBed />,
      description: 'ترتيب أنيق ومنظم للغرف وغرف النوم مع تغيير المفروشات والاهتمام بأدق التفاصيل.'
    },
    {
      id: 4,
      title: 'تنظيف الأثاث',
      icon: <FaCouch />,
      description: 'تنظيف جاف وبالبخار للكنب والمجالس وإزالة البقع الصعبة مع المحافظة على جودة الأقمشة.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
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
          <h2>خدماتنا المتميزة</h2>
          <p>اكتشف باقة خدماتنا المصممة لتلبية كافة احتياجاتك</p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div key={service.id} className="service-card" variants={itemVariants}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
