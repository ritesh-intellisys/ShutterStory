// Hero.jsx - Premium Version
import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span>CAPTURING</span>
            <span className="gradient-highlight">TIMELESS MOMENTS</span>
            <span>OF ETERNAL LOVE</span>
          </h1>
          
          <p className="hero-subtitle">
            With an artistic eye for detail and a passion for storytelling, 
            we transform your precious moments into breathtaking visual narratives 
            that stand the test of time.
          </p>
          
          <div className="hero-cta">
            <button 
              className="hero-cta-btn" 
              onClick={() => scrollToSection('contact')}
            >
              VIEW PRICING & AVAILABILITY
            </button>
            <button 
              className="hero-cta-btn outline"
              onClick={() => scrollToSection('gallery')}
            >
              EXPLORE OUR PORTFOLIO
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Weddings Captured</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">15</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">50+</div>
              <div className="hero-stat-label">Awards Won</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to Explore</div>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero