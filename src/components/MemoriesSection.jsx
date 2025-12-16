import React, { useEffect, useState } from 'react'
import { FaCamera, FaVideo, FaEdit, FaGlobeAmericas, FaCalendarAlt, FaAward } from 'react-icons/fa'
import { GiStoneCrafting } from 'react-icons/gi'
import './MemoriesSection.css'

const MemoriesSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "19", label: "Years of Excellence", icon: <FaCalendarAlt /> },
    { number: "45+", label: "Countries Covered", icon: <FaGlobeAmericas /> },
    { number: "1000+", label: "Weddings Captured", icon: <FaCamera /> },
    { number: "85", label: "Industry Awards", icon: <FaAward /> }
  ]

  const services = [
    {
      icon: <FaCamera />,
      title: "Premium Photography",
      description: "Artistic imagery with cinematic quality"
    },
    {
      icon: <FaVideo />,
      title: "Cinematic Videography",
      description: "Story-driven films that capture emotion"
    },
    {
      icon: <FaEdit />,
      title: "Expert Editing",
      description: "Meticulous post-production perfection"
    },
    {
      icon: <GiStoneCrafting />,
      title: "Custom Albums",
      description: "Handcrafted heirlooms for generations"
    }
  ]

  return (
    <section className="memories-section section bg-dark overlay-dark">
      <div className="memories-background"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header content-overlay">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <FaAward className="pre-title-icon" />
              <span>OUR LEGACY</span>
              <FaAward className="pre-title-icon" />
            </div>
            <h2 className="section-title section-title-light">
              <span className="title-line">Transforming Moments</span>
              <span className="title-line gradient-text">Into Timeless Art</span>
            </h2>
            <p className="section-subtitle section-subtitle-light">
              Crafting visual heirlooms since 2005 with passion, precision, and artistry
            </p>
          </div>
        </div>

        <div className="memories-content content-overlay">
          {/* Left Column - Stats */}
          <div className={`memories-stats fade-in-left ${isVisible ? 'visible' : ''}`}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <div className="stat-number text-gold">{stat.number}</div>
                    <div className="stat-label text-light-secondary">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="stats-divider"></div>
            
            <div className="excellence-badge">
              <div className="badge-icon">
                <GiStoneCrafting />
              </div>
              <div className="badge-content">
                <h4 className="badge-title font-serif text-light">Industry Pioneer</h4>
                <p className="badge-desc text-light-secondary">Setting standards since 2005</p>
              </div>
            </div>
          </div>

          {/* Center Column - Main Content */}
          <div className={`memories-main fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="memories-text">
              <h3 className="memories-mission font-serif text-light">
                Where <span className="gradient-text">Artistry</span> Meets<br />
                <span className="gradient-text">Excellence</span>
              </h3>
              
              <div className="mission-text">
                <p className="text-light-secondary">
                  For nearly two decades, BittuC has been at the forefront of wedding photography, 
                  pioneering techniques and standards that have redefined the industry. Our journey 
                  began with a simple belief: every love story deserves to be told with the same 
                  passion and artistry as the greatest cinematic productions.
                </p>
                <p className="text-light-secondary">
                  Today, our curated team of world-class photographers, cinematographers, and 
                  artisans work collaboratively to create not just photographs, but enduring works 
                  of art that capture the essence of your love with unparalleled depth and emotion.
                </p>
              </div>

              {/* Services Grid */}
              <div className="services-grid grid-2">
                {services.map((service, index) => (
                  <div key={index} className="service-card card-dark">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <div className="service-content">
                      <h4 className="service-title font-display text-light">{service.title}</h4>
                      <p className="service-desc text-light-secondary">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className={`memories-cta fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="cta-wrapper card-dark">
              <div className="cta-header">
                <h3 className="cta-title font-serif text-light">Begin Your Journey</h3>
                <p className="cta-subtitle text-light-secondary">
                  Let's create something extraordinary together
                </p>
              </div>
              
              <div className="cta-features">
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <span className="text-light-secondary">Complimentary Consultation</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <span className="text-light-secondary">Customized Packages</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <span className="text-light-secondary">Flexible Payment Plans</span>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <span className="text-light-secondary">Worldwide Coverage</span>
                </div>
              </div>
              
              <div className="cta-buttons">
                <button 
                  className="btn cta-primary btn-full"
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>VIEW INVESTMENT GUIDE</span>
                </button>
                <button 
                  className="btn btn-outline cta-secondary btn-full"
                  onClick={() => {
                    const element = document.getElementById('gallery')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>EXPLORE OUR WORK</span>
                </button>
              </div>
              
              <div className="cta-note">
                <p className="text-gold">Limited availability for 2024-2025 seasons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemoriesSection