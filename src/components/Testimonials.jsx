import React, { useEffect, useState } from 'react'
import { FaStar, FaQuoteLeft, FaMapMarkerAlt, FaCalendarAlt, FaHeart } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Testimonials.css'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      id: 1,
      couple: 'Marie & Rob',
      quote: "An all-star team that captured our day with perfect intimacy and artistry.",
      text: "From day one, Shutter Story demonstrated unparalleled professionalism and creativity. Our photographers became more than vendors - they were trusted friends who understood our vision. The moments they captured feel more precious than we could have imagined.",
      rating: 5,
      venue: 'Villa Balbianello | Lake Como, Italy',
      date: 'September 2023',
      featured: true
    },
    {
      id: 2,
      couple: 'Lucas & Michael',
      quote: "They were the perfect part of our perfect day - worth every moment of anticipation.",
      text: "After postponing twice, our expectations were astronomical. Shutter Story not only met them but exceeded every dream. They captured both the grand moments and subtle glances with equal artistry, creating a visual narrative that feels like poetry.",
      rating: 5,
      venue: 'Château de Chantilly | Paris, France',
      date: 'August 2023',
      featured: false
    },
    {
      id: 3,
      couple: 'Amy & Chris',
      quote: "From nervous beginnings to comfortable friends - Shutter Story made magic happen.",
      text: "Our engagement session completely transformed our comfort in front of the camera. By our wedding day, we felt like we were creating art with old friends. The balance of candid moments and artistic direction resulted in a gallery that feels authentically us.",
      rating: 5,
      venue: 'Fairmont Banff Springs | Alberta, Canada',
      date: 'July 2023',
      featured: false
    },
    {
      id: 4,
      couple: 'Alessia & Lucas',
      quote: "Attention to detail that transformed our dream wedding into lasting memories.",
      text: "Every aspect of our destination wedding was captured with cinematic precision. From the golden hour portraits to the intimate reception moments, each photograph tells a story. We're not just pleased - we're moved by the artistry and emotion in every frame.",
      rating: 5,
      venue: 'Amangiri Resort | Utah, USA',
      date: 'June 2023',
      featured: false
    },
    {
      id: 5,
      couple: 'Sarah & James',
      quote: "Professionalism meets creativity in the most extraordinary way possible.",
      text: "The Shutter Story team worked seamlessly together, capturing moments we didn't even notice on the day. Their ability to blend into the background while creating masterpiece images is a true testament to their skill. Our album tells our love story better than words ever could.",
      rating: 5,
      venue: 'The Plaza Hotel | New York, USA',
      date: 'May 2023',
      featured: true
    },
    {
      id: 6,
      couple: 'Priya & Arjun',
      quote: "Cultural celebration captured with sensitivity and spectacular artistry.",
      text: "As an Indian-Canadian couple, we needed photographers who understood both cultures. Shutter Story embraced every tradition with respect and creativity, resulting in a gallery that honors our heritage while feeling completely modern and timeless.",
      rating: 5,
      venue: 'Royal York Hotel | Toronto, Canada',
      date: 'April 2023',
      featured: false
    }
  ]

  const featuredTestimonials = testimonials.filter(t => t.featured)

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <FaHeart className="pre-title-icon" />
              <span>CLIENT LOVE</span>
              <FaHeart className="pre-title-icon" />
            </div>
            <h2 className="section-title">
              <span className="title-line">Where Dreams</span>
              <span className="title-line gradient-text">Become Memories</span>
            </h2>
            <p className="section-subtitle">
              Hear from couples who entrusted us with their most precious moments
            </p>
          </div>
        </div>

        {/* Featured Testimonials Slider */}
        <div className={`featured-testimonials fade-in-up ${isVisible ? 'visible' : ''}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="featured-slider"
          >
            {featuredTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="featured-testimonial-card">
                  <div className="featured-content">
                    <div className="quote-header">
                      <FaQuoteLeft className="quote-icon large" />
                      <div className="couple-rating">
                        <h3 className="couple-name">{testimonial.couple}</h3>
                        <div className="rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="star-icon" />
                          ))}
                          <span className="rating-number">{testimonial.rating}.0</span>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="featured-quote">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <p className="featured-text">{testimonial.text}</p>
                    
                    <div className="testimonial-details">
                      <div className="detail">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>{testimonial.venue}</span>
                      </div>
                      <div className="detail">
                        <FaCalendarAlt className="detail-icon" />
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* All Testimonials Grid */}
        <div className="testimonials-grid-section">
          <div className="grid-header">
            <h3 className="grid-title">More Love Stories</h3>
            <div className="average-rating">
              <div className="rating-badge">
                <div className="rating-number">5.0</div>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon small" />
                  ))}
                </div>
                <div className="rating-label">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.filter(t => !t.featured).map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card fade-in-up ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${testimonial.id * 0.1}s` }}
              >
                <div className="card-header">
                  <div className="card-couple">
                    <div className="couple-icon">
                      <FaHeart />
                    </div>
                    <h4 className="couple-name-small">{testimonial.couple}</h4>
                  </div>
                  <div className="card-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon tiny" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="card-footer">
                  <div className="footer-details">
                    <span className="footer-venue">{testimonial.venue}</span>
                    <span className="footer-date">{testimonial.date}</span>
                  </div>
                  <div className="footer-actions">
                    <button className="read-more-btn">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`testimonials-cta fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Ready to Create Your Story?</h3>
                  <p className="cta-subtitle">
                Join hundreds of happy couples who chose Shutter Story for their special day
              </p>
            </div>
            <button 
              className="btn cta-btn"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span>START YOUR JOURNEY</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials