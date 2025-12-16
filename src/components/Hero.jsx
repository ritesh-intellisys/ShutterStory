import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
              <span className="title-line">Capturing India's</span>
              <span className="title-line highlight">Timeless Love Stories</span>
              <span className="title-line">Through Art & Emotion</span>
            </h1>
            
            <p className="hero-subtitle">
              Preserving your precious moments with artistic vision, technical excellence, 
              and a deep understanding of Indian wedding traditions since 2005.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="hero-btn primary"
                onClick={() => scrollToSection('contact')}
              >
                VIEW PACKAGES
              </button>
              <button 
                className="hero-btn secondary"
                onClick={() => scrollToSection('gallery')}
              >
                EXPLORE GALLERY
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;