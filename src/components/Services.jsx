import React, { useEffect, useState } from 'react'
import { FaCamera, FaVideo, FaImages, FaRing, FaCalendarAlt, FaMagic, FaPlus } from 'react-icons/fa'
import { GiFilmSpool, GiPhotoCamera } from 'react-icons/gi'
import './Services.css'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <GiPhotoCamera />,
      title: 'Premium Wedding Photography',
      description: 'Comprehensive coverage of your special day with artistic direction and cinematic storytelling.',
      features: ['Full Day Coverage (12+ hours)', 'Two Professional Photographers', 'Pre-Wedding Consultation', 'Engagement Session', 'Digital Gallery with Print Rights'],
      price: 'Starting at $4,500',
      popular: true
    },
    {
      icon: <GiFilmSpool />,
      title: 'Cinematic Videography',
      description: 'Cinematic wedding films that capture the emotion and beauty of your celebration in motion.',
      features: ['4K Ultra HD Footage', 'Highlight Film (5-7 mins)', 'Feature Film (20-30 mins)', 'Drone Aerials', 'Same-Day Edit Available'],
      price: 'Starting at $3,800',
      popular: false
    },
    {
      icon: <FaImages />,
      title: 'Event Photography',
      description: 'Professional coverage for corporate events, celebrations, and special occasions.',
      features: ['Corporate Events', 'Birthday Celebrations', 'Anniversary Parties', 'Social Gatherings', 'Brand Campaigns'],
      price: 'Starting at $1,200',
      popular: false
    },
    {
      icon: <FaMagic />,
      title: 'Advanced Editing',
      description: 'Expert post-processing and retouching services for flawless final images.',
      features: ['Professional Color Grading', 'Advanced Retouching', 'Album Design Service', 'Same-Day Previews', 'Unlimited Revisions'],
      price: 'Starting at $800',
      popular: false
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Destination Coverage',
      description: 'Worldwide destination wedding photography and videography services.',
      features: ['International Travel', 'Multi-Day Coverage', 'Location Scouting', 'Cultural Consultation', 'Travel Coordination'],
      price: 'Custom Quote',
      popular: true
    },
    {
      icon: <FaPlus />,
      title: 'Custom Packages',
      description: 'Tailored packages designed specifically for your unique vision and requirements.',
      features: ['Mix & Match Services', 'Custom Timeline', 'Flexible Payment Plans', 'Priority Booking', 'Extended Coverage'],
      price: 'Contact for Quote',
      popular: false
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <GiPhotoCamera className="pre-title-icon" />
              <span>OUR SERVICES</span>
              <GiPhotoCamera className="pre-title-icon" />
            </div>
            <h2 className="section-title">
              <span className="title-line">Comprehensive</span>
              <span className="title-line gradient-text">Photography Solutions</span>
            </h2>
            <p className="section-subtitle">
              Tailored packages designed to capture your unique story with artistic excellence
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {service.popular && (
                <div className="popular-badge">
                  <span>MOST POPULAR</span>
                </div>
              )}
              
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  <div className={`service-icon ${hoveredService === index ? 'hovered' : ''}`}>
                    {service.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className="service-header-content">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-price">{service.price}</div>
                </div>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <div className="feature-check">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="service-actions">
                <button 
                  className="btn service-enquire-btn"
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>ENQUIRE NOW</span>
                </button>
                <button className="service-details-btn">
                  VIEW DETAILS →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`services-cta fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Need a Custom Solution?</h3>
              <p className="cta-subtitle">
                Let's create a personalized package that perfectly matches your vision and budget
              </p>
            </div>
            <button 
              className="btn cta-btn"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>REQUEST CUSTOM QUOTE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services