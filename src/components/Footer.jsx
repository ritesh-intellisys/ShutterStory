import React from 'react'
import { FaCamera, FaInstagram, FaPinterest, FaFacebook, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { label: 'Home', action: () => scrollToSection('hero') },
      { label: 'Featured Weddings', action: () => scrollToSection('featured-weddings') },
      { label: 'Gallery', action: () => scrollToSection('gallery') },
      { label: 'Services', action: () => scrollToSection('services') },
      { label: 'About', action: () => scrollToSection('about') },
      { label: 'Testimonials', action: () => scrollToSection('testimonials') }
    ],
    services: [
      { label: 'Wedding Photography' },
      { label: 'Cinematic Videography' },
      { label: 'Engagement Sessions' },
      { label: 'Destination Coverage' },
      { label: 'Portrait Photography' },
      { label: 'Photo Editing' }
    ],
    company: [
      { label: 'Our Story' },
      { label: 'Meet The Team' },
      { label: 'Investment Guide' },
      { label: 'FAQ' },
      { label: 'Blog & Journal' },
      { label: 'Careers' }
    ],
    contact: [
      { icon: <FaPhone />, text: '+1 (888) 60-BITTU' },
      { icon: <FaEnvelope />, text: 'info@bittuc.com' },
      { icon: <FaMapMarkerAlt />, text: '123 Photography Ave, Toronto, ON' }
    ]
  }

  const socialLinks = [
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com' },
    { icon: <FaPinterest />, label: 'Pinterest', href: 'https://pinterest.com' },
    { icon: <FaFacebook />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Logo & Tagline */}
          <div className="footer-logo-section">
            <div className="footer-logo" onClick={() => scrollToSection('hero')}>
            <FaCamera className="logo-icon" />
              <div className="logo-text">
                <span className="logo-main">Shutter Story</span>
                <span className="logo-subtitle">PHOTOGRAPHY STUDIOS</span>
              </div>
            </div>
            <p className="footer-tagline">
              Capturing timeless moments with artistic vision and technical excellence since 2005
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3 className="newsletter-title">Stay Inspired</h3>
            <p className="newsletter-subtitle">
              Subscribe for exclusive content, photography tips, and special offers
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  <FaEnvelope />
                </button>
              </div>
            </form>
            <p className="newsletter-note">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="footer-middle">
          {/* Navigation Links */}
          <div className="footer-column">
            <h4 className="column-title">Navigation</h4>
            <ul className="footer-links">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.label.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault()
                      link.action()
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="column-title">Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link">{service.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4 className="column-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <span className="footer-link">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="column-title">Contact</h4>
            <ul className="footer-contact">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <span className="contact-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
          <div className="footer-bottom">
          <div className="bottom-content">
            <p className="copyright">
              © {currentYear} Shutter Story. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#" className="legal-link">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer