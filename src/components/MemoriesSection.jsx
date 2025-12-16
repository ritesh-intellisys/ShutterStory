import React from 'react';
import { FaCamera, FaVideo, FaImages, FaBookOpen } from 'react-icons/fa';
import './MemoriesSection.css';

const MemoriesSection = () => {
  const services = [
    {
      icon: <FaCamera />,
      title: 'Wedding Photography',
      description: 'Full-day coverage with artistic storytelling'
    },
    {
      icon: <FaVideo />,
      title: 'Cinematic Films',
      description: 'Emotional wedding films in 4K'
    },
    {
      icon: <FaImages />,
      title: 'Pre-Wedding Shoots',
      description: 'Creative couple sessions across India'
    },
    {
      icon: <FaBookOpen />,
      title: 'Premium Albums',
      description: 'Handcrafted heirloom albums'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Weddings Captured' },
    { number: '15+', label: 'Years Experience' },
    { number: '45+', label: 'Cities Covered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="memories">
      <div className="container">
        <div className="memories-header">
          <h2 className="section-title">
            Turning Moments Into
            <span className="gradient-text"> Timeless Memories</span>
          </h2>
          <p className="section-subtitle">
            Preserving your love story with artistry and emotion
          </p>
        </div>

        <div className="memories-content">
          <div className="memories-left">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="memories-right">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="cta-box">
              <h3>Ready to Begin Your Journey?</h3>
              <p>Book a complimentary consultation with our photography experts</p>
              <button className="cta-button">
                SCHEDULE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;