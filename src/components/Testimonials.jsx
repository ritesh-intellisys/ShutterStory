import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      couple: 'Raj & Simran',
      text: 'Shutter Story captured our Jaipur wedding with such elegance. Every photo feels like a piece of art that tells our love story.',
      rating: 5,
      location: 'Jaipur Heritage Wedding'
    },
    {
      id: 2,
      couple: 'Amit & Priya',
      text: 'The attention to detail and emotional connection in our photos is beyond what we imagined. Truly exceptional work!',
      rating: 5,
      location: 'Goa Beach Wedding'
    },
    {
      id: 3,
      couple: 'Vikram & Anjali',
      text: 'From traditional ceremonies to modern celebrations, they captured every moment with perfection. Highly recommended!',
      rating: 5,
      location: 'Delhi Grand Wedding'
    },
    {
      id: 4,
      couple: 'Rohan & Meera',
      text: 'Professional, creative, and incredibly talented. Our wedding album is a treasure we will cherish forever.',
      rating: 5,
      location: 'Mysore Palace Wedding'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Love Stories
            <span className="gradient-text"> We've Captured</span>
          </h2>
          <p className="section-subtitle">
            What our couples say about their experience
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-footer">
                <div className="couple-name">{testimonial.couple}</div>
                <div className="location">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;