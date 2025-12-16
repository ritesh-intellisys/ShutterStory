import React, { useState, useEffect } from 'react';
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import './FeaturedWeddings.css';

const FeaturedWeddings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const featuredWeddings = [
    {
      id: 1,
      couple: 'Aarav & Priya',
      venue: 'The Leela Palace | Udaipur',
      date: 'December 2023',
      description: 'A royal wedding celebration in the city of lakes, blending traditional Rajasthani ceremonies with contemporary elegance.',
      image: 'https://images.unsplash.com/photo-1640953148126-1962ec17a92b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1677770100922-469d56602938?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      couple: 'Rohan & Meera',
      venue: 'Taj Falaknuma Palace | Hyderabad',
      date: 'November 2023',
      description: 'Nizami splendor meets modern romance in this breathtaking palace wedding.',
      image: 'https://images.unsplash.com/photo-1677770100922-469d56602938?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      couple: 'Arjun & Ananya',
      venue: 'Amanbagh | Rajasthan',
      date: 'February 2024',
      description: 'Desert oasis celebration with intimate ceremonies under the starlit sky.',
      image: 'https://images.unsplash.com/photo-1583878545126-2f1ca0142714?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      couple: 'Vikram & Sneha',
      venue: 'Kumarakom Lake Resort | Kerala',
      date: 'January 2024',
      description: 'Backwater wedding with traditional Kerala rituals and serene natural beauty.',
      image: 'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const nextWedding = () => {
    setActiveIndex((prev) => (prev + 1) % featuredWeddings.length);
  };

  const prevWedding = () => {
    setActiveIndex((prev) => (prev - 1 + featuredWeddings.length) % featuredWeddings.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="featured-weddings" className="featured-weddings">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span>Featured</span>
            <span className="gradient-text"> Weddings</span>
          </h2>
          <p className="section-subtitle">
            Celebrating love stories from across India
          </p>
        </div>

        <div className="featured-content">
          {/* Main Featured Wedding */}
          <div className="featured-main">
            <div className="featured-image-container">
              <img 
                src={featuredWeddings[activeIndex].image} 
                alt={featuredWeddings[activeIndex].couple}
                className="featured-image"
              />
              
              <div className="image-overlay">
                <div className="overlay-content">
                  <div className="wedding-couple">{featuredWeddings[activeIndex].couple}</div>
                  <div className="wedding-location">
                    <FaMapMarkerAlt /> {featuredWeddings[activeIndex].venue}
                  </div>
                </div>
              </div>
              
              <div className="nav-controls">
                <button className="nav-btn prev" onClick={prevWedding}>
                  ←
                </button>
                <button className="nav-btn next" onClick={nextWedding}>
                  →
                </button>
              </div>
              
              <div className="image-counter">
                <span className="current">0{activeIndex + 1}</span>
                <span className="total">/0{featuredWeddings.length}</span>
              </div>
            </div>
            
            <div className="featured-details">
              <div className="details-header">
                <div className="wedding-date">
                  <FaCalendarAlt /> {featuredWeddings[activeIndex].date}
                </div>
                <div className="wedding-type">Royal Wedding</div>
              </div>
              
              <p className="wedding-description">
                {featuredWeddings[activeIndex].description}
              </p>
              
              <div className="wedding-stats">
                <div className="stat">
                  <div className="stat-number">800+</div>
                  <div className="stat-label">Photos</div>
                </div>
                <div className="stat">
                  <div className="stat-number">14</div>
                  <div className="stat-label">Hours</div>
                </div>
                <div className="stat">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Photographers</div>
                </div>
              </div>
              
              <button 
                className="view-gallery-btn"
                onClick={() => scrollToSection('gallery')}
              >
                VIEW FULL GALLERY <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="featured-thumbnails">
            {featuredWeddings.map((wedding, index) => (
              <div 
                key={wedding.id}
                className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={wedding.image} alt={wedding.couple} />
                <div className="thumbnail-overlay">
                  <span>{wedding.couple}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWeddings;