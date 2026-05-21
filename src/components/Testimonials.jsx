import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'دعاء محمد',
    feedback: 'خدمة سريعة وفريق محترف. نظفوا الشقة بالكامل وتركوها جاهزة للضيوف.',
    rating: 5
  },
  {
    id: 2,
    name: 'علي السيد',
    feedback: 'أكثر من ممتاز. المواد المستخدمة آمنة، والنتيجة فوق التوقعات.',
    rating: 5
  },
  {
    id: 3,
    name: 'هنا عبده',
    feedback: 'تجربة احترافية من أول اتصال حتى التسليم. أوصي بهم لكل منزل.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>آراء العملاء</h2>
          <p>مراجعات حقيقية من عملائنا عن جودة الخدمة وسرعة التنفيذ.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-quote">
                <FaQuoteLeft />
              </div>
              <p>{item.feedback}</p>
              <div className="testimonial-rating">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
