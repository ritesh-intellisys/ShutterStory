import React from 'react';
import { FaAward, FaStar, FaUsers, FaHeart, FaQuoteLeft } from 'react-icons/fa';
import './WhyWorkWithUs.css';

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: <FaAward />,
      title: 'Award Winning',
      description: '15+ international photography awards'
    },
    {
      icon: <FaStar />,
      title: 'Premium Quality',
      description: 'Cinematic storytelling & artistic editing'
    },
    {
      icon: <FaUsers />,
      title: 'Experienced Team',
      description: '50+ Indian weddings captured annually'
    },
    {
      icon: <FaHeart />,
      title: 'Personalized',
      description: 'Custom packages for every couple'
    }
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="why-content">
          <div className="why-left">
            <h2 className="section-title">
              Why Choose
              <span className="gradient-text"> Shutter Story</span>
            </h2>
            
            <p className="why-description">
              With over 15 years of expertise in Indian wedding photography, we blend 
              traditional artistry with contemporary techniques to create timeless memories.
            </p>
            
            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <div key={index} className="reason-card">
                  <div className="reason-icon">
                    {reason.icon}
                  </div>
                  <div className="reason-content">
                    <h4>{reason.title}</h4>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-right">
            <div className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">
                Shutter Story captured our Udaipur wedding with such beauty and emotion. 
                Every photo tells a story that brings tears to our eyes.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Aarav & Priya</div>
                <div className="author-detail">Udaipur Palace Wedding, 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;