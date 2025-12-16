import React, { useState } from 'react';
import { FaExpand, FaHeart } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'pre-wedding', label: 'Pre-Wedding' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'destination', label: 'Destination' }
  ];

  const galleryItems = [
    { id: 1, category: 'wedding', image: 'https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Udaipur Royal Wedding' },
    { id: 2, category: 'pre-wedding', image: 'https://images.unsplash.com/photo-1741201864710-8c031ebd13bc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Jaipur Pre-Wedding' },
    { id: 3, category: 'destination', image: 'https://images.unsplash.com/photo-1601121868898-4581104b29de?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Goa Beach Wedding' },
    { id: 4, category: 'wedding', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', title: 'Delhi Grand Wedding' },
    { id: 5, category: 'portrait', image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80', title: 'Couple Portraits' },
    { id: 6, category: 'destination', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', title: 'Kerala Backwaters' },
    { id: 7, category: 'wedding', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', title: 'Mysore Palace' },
    { id: 8, category: 'pre-wedding', image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Rajasthan Desert' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our
            <span className="gradient-text"> Gallery</span>
          </h2>
          <p className="section-subtitle">
            A visual journey through our finest work
          </p>
        </div>

        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="image-container">
                <img src={item.image} alt={item.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>{item.title}</h4>
                    <div className="image-actions">
                      <button className="action-btn">
                        <FaExpand />
                      </button>
                      <button className="action-btn">
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;