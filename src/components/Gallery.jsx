import React, { useState, useEffect } from 'react'
import { FaSearch, FaExpand, FaHeart, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import './Gallery.css'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'wedding', name: 'Wedding Stories' },
    { id: 'engagement', name: 'Engagements' },
    { id: 'portrait', name: 'Portrait Sessions' },
    { id: 'destination', name: 'Destination' },
    { id: 'editorial', name: 'Editorial' }
  ]

  const galleryItems = [
    { 
      id: 1, 
      category: 'wedding', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80',
      title: 'Romantic Sunset Vows',
      location: 'Lake Como, Italy',
      couple: 'Francesca & Luca'
    },
    { 
      id: 2, 
      category: 'engagement', 
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80',
      title: 'Urban Love Story',
      location: 'Toronto, Canada',
      couple: 'Sarah & James'
    },
    { 
      id: 3, 
      category: 'destination', 
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80',
      title: 'Chateau Celebration',
      location: 'Provence, France',
      couple: 'Marie & Pierre'
    },
    { 
      id: 4, 
      category: 'portrait', 
      image: 'https://images.unsplash.com/photo-1492684223066-e30210154b9f?w=1200&auto=format&fit=crop&q=80',
      title: 'Golden Hour Portraits',
      location: 'Banff, Canada',
      couple: 'Emma & Ryan'
    },
    { 
      id: 5, 
      category: 'wedding', 
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&auto=format&fit=crop&q=80',
      title: 'Garden Ceremony',
      location: 'Napa Valley, USA',
      couple: 'Isabella & Carlos'
    },
    { 
      id: 6, 
      category: 'editorial', 
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&auto=format&fit=crop&q=80',
      title: 'Fashion Editorial',
      location: 'Studio Session',
      couple: 'Model Portfolio'
    },
    { 
      id: 7, 
      category: 'engagement', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&auto=format&fit=crop&q=80',
      title: 'Winter Proposal',
      location: 'Swiss Alps',
      couple: 'Anna & Marco'
    },
    { 
      id: 8, 
      category: 'destination', 
      image: 'https://images.unsplash.com/photo-1530639860212-7d5d95a9b67c?w=1200&auto=format&fit=crop&q=80',
      title: 'Befront Celebration',
      location: 'Santorini, Greece',
      couple: 'Elena & Nikos'
    },
    { 
      id: 9, 
      category: 'wedding', 
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200&auto=format&fit=crop&q=80',
      title: 'Modern Minimalist',
      location: 'New York, USA',
      couple: 'Jessica & Michael'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const slides = filteredItems.map(item => ({
    src: item.image,
    alt: item.title
  }))

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <FaHeart className="pre-title-icon" />
              <span>OUR GALLERY</span>
              <FaHeart className="pre-title-icon" />
            </div>
            <h2 className="section-title">
              <span className="title-line">Visual</span>
              <span className="title-line gradient-text">Storytelling</span>
            </h2>
            <p className="section-subtitle">
              A curated collection of our finest work, each image telling a unique love story
            </p>
          </div>
        </div>

        {/* Gallery Filters */}
        <div className="gallery-filters-container">
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-text">{category.name}</span>
                <span className="filter-count">
                  {category.id === 'all' 
                    ? galleryItems.length 
                    : galleryItems.filter(item => item.category === category.id).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <div className="image-info">
                      <h3 className="image-title">{item.title}</h3>
                      <p className="image-couple">{item.couple}</p>
                      <p className="image-location">{item.location}</p>
                    </div>
                    <div className="image-actions">
                      <button className="action-btn" onClick={(e) => {
                        e.stopPropagation()
                        openLightbox(index)
                      }}>
                        <FaExpand />
                      </button>
                      <button className="action-btn">
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="category-badge">
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="gallery-stats">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">{galleryItems.length}+</div>
              <div className="stat-label">Featured Images</div>
            </div>
            <div className="stat">
              <div className="stat-number">6</div>
              <div className="stat-label">Collections</div>
            </div>
            <div className="stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Approval</div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={lightboxIndex}
          render={{
            buttonPrev: filteredItems.length <= 1 ? () => null : undefined,
            buttonNext: filteredItems.length <= 1 ? () => null : undefined,
          }}
        />
      </div>
    </section>
  )
}

export default Gallery