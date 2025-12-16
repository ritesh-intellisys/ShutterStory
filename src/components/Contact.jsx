import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Email', details: ['info@shutterstory.com', 'bookings@shutterstory.com'] },
    { icon: <FaPhone />, title: 'Phone', details: ['+91 98765 43210', '+91 98765 43211'] },
    { icon: <FaMapMarkerAlt />, title: 'Studio', details: ['123 Photography Lane', 'Mumbai, Maharashtra 400001'] }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In
            <span className="gradient-text"> Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's discuss your photography needs
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <h4>{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="working-hours">
              <h4>Working Hours</h4>
              <p>Monday - Saturday: 10 AM - 7 PM</p>
              <p>Sunday: By Appointment Only</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Wedding Date</label>
                  <input
                    type="date"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group full-width">
                  <label>Venue/Location</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="Wedding venue or city"
                  />
                </div>
                
                <div className="form-group full-width">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your wedding plans and photography needs..."
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>
              
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;