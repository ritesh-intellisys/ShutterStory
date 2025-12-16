import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaChevronDown, FaPhone } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      setActiveDropdown(null)
    }
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-main">
        <div className="container">
          <div className="nav-wrapper">
          <div className="nav-left">
            <div className="nav-dropdown">
              <span onClick={() => toggleDropdown('about')}>
                ABOUT US <FaChevronDown className={`dropdown-icon ${activeDropdown === 'about' ? 'rotated' : ''}`} />
              </span>
              {activeDropdown === 'about' && (
                <div className="dropdown-menu">
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>Our Story</a>
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>FAQ</a>
                </div>
              )}
            </div>
            
            <div className="nav-dropdown">
              <span onClick={() => toggleDropdown('services')}>
                OUR SERVICES <FaChevronDown className={`dropdown-icon ${activeDropdown === 'services' ? 'rotated' : ''}`} />
              </span>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu">
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Wedding Photography</a>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Event Photography</a>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Videography</a>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Photo Editing</a>
                </div>
              )}
            </div>
          </div>

          <div className="logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">Shutter Story</span>
            <span className="logo-subtitle">STUDIOS</span>
          </div>

          <div className="nav-right">
            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}>PORTFOLIO</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>JOURNAL</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>CONTACT</a>
            <button className="nav-pricing-btn" onClick={() => scrollToSection('contact')}>
              PRICING & AVAILABILITY
            </button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <div className="nav-left mobile-nav">
                <div className="nav-dropdown">
                  <span onClick={() => toggleDropdown('about')}>
                    ABOUT US <FaChevronDown className={`dropdown-icon ${activeDropdown === 'about' ? 'rotated' : ''}`} />
                  </span>
                  {activeDropdown === 'about' && (
                    <div className="dropdown-menu">
                      <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>Our Story</a>
                      <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>FAQ</a>
                    </div>
                  )}
                </div>
                
                <div className="nav-dropdown">
                  <span onClick={() => toggleDropdown('services')}>
                    OUR SERVICES <FaChevronDown className={`dropdown-icon ${activeDropdown === 'services' ? 'rotated' : ''}`} />
                  </span>
                  {activeDropdown === 'services' && (
                    <div className="dropdown-menu">
                      <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Wedding Photography</a>
                      <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Event Photography</a>
                      <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Videography</a>
                      <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Photo Editing</a>
                    </div>
                  )}
                </div>
              </div>
              <div className="nav-right mobile-nav">
                <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}>PORTFOLIO</a>
                <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>JOURNAL</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>CONTACT</a>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

