import React, { useEffect, useState } from 'react'
import { FaAward, FaCamera, FaUsers, FaHeart, FaGlobe, FaStar, FaTrophy, FaRibbon } from 'react-icons/fa'
import { GiStoneCrafting, GiDiamondTrophy } from 'react-icons/gi'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { 
      icon: <FaCamera />, 
      number: '19', 
      label: 'Years Excellence',
      description: 'Industry leadership since 2005'
    },
    { 
      icon: <FaUsers />, 
      number: '1000+', 
      label: 'Happy Couples',
      description: 'Trusted by couples worldwide'
    },
    { 
      icon: <FaAward />, 
      number: '85', 
      label: 'Awards Won',
      description: 'International recognition'
    },
    { 
      icon: <FaGlobe />, 
      number: '45+', 
      label: 'Countries',
      description: 'Global destination coverage'
    }
  ]

  const achievements = [
    {
      icon: <GiDiamondTrophy />,
      title: 'International Wedding Photographer of the Year',
      year: '2023'
    },
    {
      icon: <FaStar />,
      title: 'Wedding Industry Awards - Platinum Winner',
      year: '2022'
    },
    {
      icon: <GiStoneCrafting />,
      title: 'Best Destination Wedding Photography',
      year: '2021'
    },
    {
      icon: <FaRibbon />,
      title: 'Editor\'s Choice - Vogue Weddings',
      year: '2020'
    }
  ]

  const teamValues = [
    {
      title: 'Artistic Vision',
      description: 'Combining technical mastery with creative storytelling'
    },
    {
      title: 'Emotional Intelligence',
      description: 'Understanding and capturing authentic moments'
    },
    {
      title: 'Technical Excellence',
      description: 'State-of-the-art equipment and techniques'
    },
    {
      title: 'Client Partnership',
      description: 'Collaborative approach to every project'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-background"></div>
      <div className="about-overlay"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <FaHeart className="pre-title-icon" />
              <span>OUR STORY</span>
              <FaHeart className="pre-title-icon" />
            </div>
            <h2 className="section-title">
              <span className="title-line">Defining Excellence</span>
              <span className="title-line gradient-text">Since 2005</span>
            </h2>
            <p className="section-subtitle">
              A legacy built on passion, artistry, and unwavering commitment to capturing love stories
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Our Story */}
          <div className={`about-story fade-in-left ${isVisible ? 'visible' : ''}`}>
            <div className="story-content">
              <h3 className="story-title">
                The <span className="gradient-text">Shutter Story</span> Journey
              </h3>
              
              <div className="story-text">
                <p>
                  Founded in 2005, Shutter Story began as a passionate vision to transform wedding photography 
                  into an art form. What started as a one-person studio has evolved into an internationally 
                  acclaimed team of artists, storytellers, and visionaries.
                </p>
                <p>
                  Our journey has taken us across continents, from intimate city hall ceremonies to lavish 
                  destination weddings. Each experience has shaped our approach, refined our technique, and 
                  deepened our understanding of what it means to truly capture love.
                </p>
                <p>
                  Today, we stand as industry leaders not by following trends, but by setting them—always 
                  guided by our core belief that photography should be more than documentation; it should be 
                  art that moves you.
                </p>
              </div>
              
              {/* Team Values */}
              <div className="values-grid">
                {teamValues.map((value, index) => (
                  <div key={index} className="value-card">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-desc">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Stats */}
          <div className={`about-stats fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="stats-circle">
              <div className="circle-background">
                <div className="circle-content">
                  <div className="circle-main">
                    <span className="circle-number">19</span>
                    <span className="circle-label">Years of Excellence</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon-wrapper">
                      <div className="stat-icon">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                      <div className="stat-desc">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className={`about-achievements fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="achievements-header">
              <h3 className="achievements-title">Recognition & Awards</h3>
              <p className="achievements-subtitle">
                International acclaim for exceptional artistry
              </p>
            </div>
            
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <div className="achievement-year">{achievement.year}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Philosophy */}
            <div className="philosophy-section">
              <h3 className="philosophy-title">Our Philosophy</h3>
              <p className="philosophy-text">
                We believe that great photography isn't just about capturing moments—it's about creating 
                visual poetry that tells your unique story with authenticity, emotion, and timeless elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className={`about-team-cta fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="team-cta-content">
            <div className="team-cta-text">
              <h3 className="team-cta-title">Meet Our Creative Team</h3>
              <p className="team-cta-subtitle">
                Discover the artists behind the lens
              </p>
            </div>
            <button 
              className="btn team-cta-btn"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>MEET THE TEAM</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About