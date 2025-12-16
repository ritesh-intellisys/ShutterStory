import React from 'react';
import { FaInstagram, FaFacebook, FaPinterest, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Gallery', href: '#gallery' }
    ],
    services: [
      { label: 'Wedding Photography' },
      { label: 'Pre-Wedding Shoots' },
      { label: 'Cinematic Films' },
      { label: 'Album Design' }
    ],
    legal: [
      { label: 'Privacy Policy' },
      { label: 'Terms of Service' },
      { label: 'Cookie Policy' }
    ]
  };

  const socialLinks = [
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaFacebook />, label: 'Facebook' },
    { icon: <FaPinterest />, label: 'Pinterest' },
    { icon: <FaYoutube />, label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Shutter Story</h3>
            <p className="footer-tagline">
              Capturing India's most beautiful love stories since 2005
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href="#" className="social-link" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe for photography tips and offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">
                <FaEnvelope />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((service, index) => (
                <li key={index}>{service.label}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>info@shutterstory.com</p>
            <p>+91 98765 43210</p>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Shutter Story. All rights reserved.</p>
          <p>Capturing moments, creating memories</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;