import React, { useEffect, useState } from 'react'
import { FaStar, FaAward, FaRibbon, FaHeart, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './WhyWorkWithUs.css'

const WhyWorkWithUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const reasons = [
    {
      icon: <FaStar />,
      title: "19 Years Excellence",
      description: "Industry-leading experience since 2005"
    },
    {
      icon: <FaAward />,
      title: "50+ Awards",
      description: "Internationally recognized quality"
    },
    {
      icon: <FaRibbon />,
      title: "Proven Method",
      description: "The 'BittuC Method' gold standard"
    },
    {
      icon: <FaHeart />,
      title: "100% Satisfaction",
      description: "Client-first approach guaranteed"
    }
  ]

  return (
    <section className="why-work-with-us section bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <FaHeart className="pre-title-icon" />
              <span>WHY CHOOSE BITTUC</span>
              <FaHeart className="pre-title-icon" />
            </div>
            <h2 className="section-title">
              <span className="title-line">The Premium</span>
              <span className="title-line gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle">
              Where artistry meets excellence in wedding photography
            </p>
          </div>
        </div>

        <div className="why-content grid-2">
          {/* Testimonial Section */}
          <div className={`why-testimonial fade-in-left ${isVisible ? 'visible' : ''}`}>
            <div className="testimonial-wrapper card-dark">
              <div className="quote-decoration">
                <FaQuoteLeft className="quote-icon left text-gold" />
                <div className="quote-line"></div>
                <FaQuoteRight className="quote-icon right text-gold" />
              </div>
              
              <blockquote className="testimonial-quote text-light">
                "You captured the essence of our love in ways we couldn't have imagined. Every photo feels like a piece of art that tells our story."
              </blockquote>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name font-serif text-light">Jenn & Eric</h4>
                  <p className="author-details text-light-secondary">Lake Como Destination Wedding, 2023</p>
                </div>
                <div className="author-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star-icon text-gold" />
                    ))}
                  </div>
                  <span className="rating-text text-light-secondary">5/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Reasons */}
          <div className={`why-description fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="description-content">
              <h3 className="description-title font-serif text-dark">
                The <span className="gradient-text">BittuC Method</span>
              </h3>
              
              <div className="description-text">
                <p className="text-gray">
                  Over nearly two decades, we've meticulously crafted our signature approach to wedding photography—a fusion of artistic vision, technical mastery, and emotional intelligence that has become the industry's gold standard.
                </p>
                <p className="text-gray">
                  Our method begins with understanding your unique love story, drawing inspiration from the music that moves you, the cities that inspire you, and the moments that define your relationship.
                </p>
              </div>

              {/* Reasons Grid */}
              <div className="reasons-grid grid-2">
                {reasons.map((reason, index) => (
                  <div 
                    key={index} 
                    className="reason-card card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="reason-icon-wrapper">
                      <div className="reason-icon">
                        {reason.icon}
                      </div>
                      <div className="icon-glow"></div>
                    </div>
                    <div className="reason-content">
                      <h4 className="reason-title font-display text-dark">{reason.title}</h4>
                      <p className="reason-desc text-gray">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="why-cta">
                <button 
                  className="btn why-cta-btn btn-full"
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <span>EXPLORE OUR PROCESS</span>
                </button>
                <p className="cta-note text-gray">
                  Book a complimentary consultation to discuss your vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs