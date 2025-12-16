import React, { useEffect, useState } from 'react'
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './FeaturedWeddings.css'

const FeaturedWeddings = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredWeddings = [
    {
      id: 1,
      couple: 'Francesca & Luca',
      venue: 'Villa Astor | Amalfi Coast, Italy',
      date: 'September 2023',
      description: 'A romantic sunset ceremony overlooking the Mediterranean Sea, captured in golden hour light.',
      category: 'Destination Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 2,
      couple: 'Cristine & Jordan',
      venue: 'Arlington Estate | Toronto, Canada',
      date: 'August 2023',
      description: 'Elegant garden wedding with art deco influences and timeless black-tie celebrations.',
      category: 'Estate Wedding',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 3,
      couple: 'Noemie & Jason',
      venue: 'Four Seasons Hotel | Toronto, Canada',
      date: 'June 2023',
      description: 'Modern luxury wedding with panoramic city views and sophisticated minimalist design.',
      category: 'Luxury Hotel',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 4,
      couple: 'Meaghan & Carlo',
      venue: 'Maison Principale | Montreal, Canada',
      date: 'July 2023',
      description: 'Intimate French-inspired wedding in a historic mansion with vintage elegance.',
      category: 'Historic Venue',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 5,
      couple: 'Aymara & Giovanni',
      venue: 'Chateau Saint Martin | Provence, France',
      date: 'May 2023',
      description: 'Lavender field wedding in the French countryside with rustic Provençal charm.',
      category: 'Chateau Wedding',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1492684223066-e30210154b9f?w=800&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 6,
      couple: 'Shriya & Alex',
      venue: 'Guild Inn Estate | Toronto, Canada',
      date: 'October 2023',
      description: 'Fall wedding amidst historic ruins with warm autumn colors and romantic ambiance.',
      category: 'Seasonal Wedding',
      image: 'https://images.unsplash.com/photo-1492684223066-e30210154b9f?w=1600&auto=format&fit=crop&q=80',
      images: [
        'https://images.unsplash.com/photo-1492684223066-e30210154b9f?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80'
      ]
    }
  ]

  const nextWedding = () => {
    setActiveIndex((prev) => (prev + 1) % featuredWeddings.length)
  }

  const prevWedding = () => {
    setActiveIndex((prev) => (prev - 1 + featuredWeddings.length) % featuredWeddings.length)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="featured-weddings" className="featured-weddings section bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <FaHeart className="pre-title-icon" />
              <span>FEATURED WEDDINGS</span>
              <FaHeart className="pre-title-icon" />
            </div>
            <h2 className="section-title">
              <span className="title-line">Real Love</span>
              <span className="title-line gradient-text">Real Stories</span>
            </h2>
            <p className="section-subtitle">
              Celebrating beautiful unions captured with artistic vision and emotional depth
            </p>
          </div>
        </div>

        {/* Main Featured Wedding */}
        <div className="featured-main-wedding">
          <div className="featured-grid">
            {/* Featured Image */}
            <div className={`featured-image-container fade-in-left ${isVisible ? 'visible' : ''}`}>
              <div className="featured-image-wrapper">
                <img 
                  src={featuredWeddings[activeIndex].image} 
                  alt={featuredWeddings[activeIndex].couple}
                  className="featured-image img-cover"
                />
                <div className="image-overlay">
                  <div className="overlay-gradient"></div>
                </div>
                
                {/* Image Count */}
                <div className="image-count">
                  <span className="current-image">0{activeIndex + 1}</span>
                  <span className="total-images">/0{featuredWeddings.length}</span>
                </div>
                
                {/* Navigation Arrows */}
                <button className="nav-arrow prev-arrow" onClick={prevWedding}>
                  <FaChevronLeft />
                </button>
                <button className="nav-arrow next-arrow" onClick={nextWedding}>
                  <FaChevronRight />
                </button>
              </div>
              
              {/* Thumbnails */}
              <div className="wedding-thumbnails">
                {featuredWeddings.map((wedding, index) => (
                  <div 
                    key={wedding.id}
                    className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={wedding.images[0]} alt={wedding.couple} className="img-cover" />
                    <div className="thumbnail-overlay"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wedding Details */}
            <div className={`wedding-details fade-in-right ${isVisible ? 'visible' : ''}`}>
              <div className="details-header">
                <div className="wedding-category badge-gold">
                  {featuredWeddings[activeIndex].category}
                </div>
                <h3 className="wedding-couple font-serif text-dark">
                  {featuredWeddings[activeIndex].couple}
                </h3>
              </div>
              
              <div className="wedding-info">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon text-gold" />
                  <div className="info-content">
                    <div className="info-label text-gray">Venue</div>
                    <div className="info-value text-dark">{featuredWeddings[activeIndex].venue}</div>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaCalendarAlt className="info-icon text-gold" />
                  <div className="info-content">
                    <div className="info-label text-gray">Date</div>
                    <div className="info-value text-dark">{featuredWeddings[activeIndex].date}</div>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaHeart className="info-icon text-gold" />
                  <div className="info-content">
                    <div className="info-label text-gray">Story</div>
                    <div className="info-value text-dark">{featuredWeddings[activeIndex].description}</div>
                  </div>
                </div>
              </div>
              
              <div className="featured-cta">
                <button 
                  className="btn view-gallery-btn btn-full"
                  onClick={() => scrollToSection('gallery')}
                >
                  <span>VIEW FULL GALLERY</span>
                  <FaArrowRight className="btn-icon" />
                </button>
                <button 
                  className="btn btn-outline contact-btn btn-full"
                  onClick={() => scrollToSection('contact')}
                >
                  <span>BOOK SIMILAR STYLE</span>
                </button>
              </div>
              
              {/* Wedding Stats */}
              <div className="wedding-stats">
                <div className="stat">
                  <div className="stat-number text-gold">450+</div>
                  <div className="stat-label text-gray">Photos Delivered</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <div className="stat-number text-gold">12</div>
                  <div className="stat-label text-gray">Hours Coverage</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <div className="stat-number text-gold">2</div>
                  <div className="stat-label text-gray">Photographers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Weddings Grid */}
        <div className="weddings-grid-section">
          <div className="grid-header">
            <h3 className="grid-title font-serif text-dark">Recent Celebrations</h3>
            <button 
              className="view-all-btn"
              onClick={() => scrollToSection('gallery')}
            >
              VIEW ALL WEDDINGS
              <FaArrowRight />
            </button>
          </div>
          
          <div className="weddings-grid grid-4">
            {featuredWeddings.filter((_, index) => index !== activeIndex).slice(0, 4).map((wedding) => (
              <div key={wedding.id} className="wedding-grid-card card">
                <div className="grid-card-image aspect-square">
                  <img src={wedding.images[0]} alt={wedding.couple} className="img-cover" />
                  <div className="grid-card-overlay">
                    <div className="grid-card-content">
                      <h4 className="grid-couple font-serif text-light">{wedding.couple}</h4>
                      <p className="grid-venue text-light-secondary">{wedding.venue}</p>
                    </div>
                    <button 
                      className="grid-view-btn"
                      onClick={() => {
                        const weddingIndex = featuredWeddings.findIndex(w => w.id === wedding.id)
                        setActiveIndex(weddingIndex)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="grid-card-footer">
                  <span className="grid-category text-gold">{wedding.category}</span>
                  <span className="grid-date text-gray">{wedding.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWeddings