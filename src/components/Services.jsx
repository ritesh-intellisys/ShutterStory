import React from 'react';
import { FaCamera, FaVideo, FaImage, FaMagic, FaGlobe, FaPalette } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCamera />,
      title: 'Wedding Photography',
      description: 'Full-day coverage with artistic storytelling and candid moments',
      price: 'Starting at ₹1,50,000'
    },
    {
      icon: <FaVideo />,
      title: 'Cinematic Videography',
      description: '4K wedding films with emotional storytelling and drone coverage',
      price: 'Starting at ₹2,00,000'
    },
    {
      icon: <FaImage />,
      title: 'Pre-Wedding Shoots',
      description: 'Creative couple sessions at locations across India',
      price: 'Starting at ₹50,000'
    },
    {
      icon: <FaMagic />,
      title: 'Album Design',
      description: 'Custom-designed premium wedding albums',
      price: 'Starting at ₹75,000'
    },
    {
      icon: <FaGlobe />,
      title: 'Destination Weddings',
      description: 'Complete coverage for weddings across India and abroad',
      price: 'Custom Quote'
    },
    {
      icon: <FaPalette />,
      title: 'Custom Packages',
      description: 'Tailored packages to match your specific requirements',
      price: 'Contact Us'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our
            <span className="gradient-text"> Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive photography solutions for your special day
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <button className="service-btn">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;