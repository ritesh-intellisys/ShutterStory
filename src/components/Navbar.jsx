import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaPhone } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-wrapper">
          {/* Logo */}
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-main">Shutter Story</span>
            <span className="logo-subtitle">STUDIOS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <div className="nav-left">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                ABOUT
              </a>
              <div className="nav-dropdown">
                <span onClick={() => toggleDropdown('services')}>
                  SERVICES <FaChevronDown className={`dropdown-icon ${activeDropdown === 'services' ? 'rotated' : ''}`} />
                </span>
                {activeDropdown === 'services' && (
                  <div className="dropdown-menu">
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Wedding Photography</a>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Pre-Wedding Shoots</a>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Videography</a>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Album Design</a>
                  </div>
                )}
              </div>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
                GALLERY
              </a>
            </div>

            <div className="nav-right">
              <a href="#featured" onClick={(e) => { e.preventDefault(); scrollToSection('featured-weddings'); }}>
                FEATURED
              </a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
                TESTIMONIALS
              </a>
              <button className="nav-cta" onClick={() => scrollToSection('contact')}>
                BOOK CONSULTATION
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-content">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); setIsMobileMenuOpen(false); }}>
                ABOUT
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); setIsMobileMenuOpen(false); }}>
                SERVICES
              </a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); setIsMobileMenuOpen(false); }}>
                GALLERY
              </a>
              <a href="#featured" onClick={(e) => { e.preventDefault(); scrollToSection('featured-weddings'); setIsMobileMenuOpen(false); }}>
                FEATURED WEDDINGS
              </a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); setIsMobileMenuOpen(false); }}>
                TESTIMONIALS
              </a>
              <button className="mobile-cta" onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}>
                BOOK CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;