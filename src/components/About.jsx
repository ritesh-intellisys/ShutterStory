import React from 'react';
import { FaAward, FaCamera, FaUsers, FaGlobe } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaCamera />, number: '1000+', label: 'Weddings Captured' },
    { icon: <FaAward />, number: '15+', label: 'Awards Won' },
    { icon: <FaUsers />, number: '500+', label: 'Happy Couples' },
    { icon: <FaGlobe />, number: '45+', label: 'Cities Covered' }
  ];

  const values = [
    { title: 'Artistic Excellence', description: 'Creating timeless visual stories' },
    { title: 'Emotional Connection', description: 'Capturing genuine moments' },
    { title: 'Technical Mastery', description: 'State-of-the-art equipment & editing' },
    { title: 'Personalized Service', description: 'Tailored to each couple\'s story' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <h2 className="section-title">
              Our
              <span className="gradient-text"> Story</span>
            </h2>
            
            <div className="about-text">
              <p>
                Founded in 2005, Shutter Story began with a simple vision: to transform 
                wedding photography from documentation to art. Over the years, we've 
                evolved into one of India's most sought-after photography studios.
              </p>
              <p>
                Specializing in Indian weddings, we blend traditional artistry with 
                contemporary techniques. Our team travels across India, capturing love 
                stories in palaces, beaches, mountains, and heritage sites.
              </p>
            </div>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-right">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="cta-section">
              <h3>Ready to Create Your Story?</h3>
              <p>Let's discuss your vision and create something beautiful together</p>
              <button className="cta-button">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;