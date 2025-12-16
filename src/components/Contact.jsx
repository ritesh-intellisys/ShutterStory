import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaPaperPlane } from 'react-icons/fa'
import { GiWorld } from 'react-icons/gi'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venue: '',
    guests: '',
    message: '',
    referral: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        venue: '',
        guests: '',
        message: '',
        referral: '',
        budget: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+1 (888) 60-BITTU', '+1 (416) 555-0199'],
      description: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@bittuc.com', 'bookings@bittuc.com'],
      description: 'Response within 24 hours'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Studio',
      details: ['123 Photography Ave', 'Toronto, ON M5V 2T6'],
      description: 'By appointment only'
    },
    {
      icon: <GiWorld />,
      title: 'Worldwide',
      details: ['Available for travel', 'Global coverage'],
      description: 'Passports ready!'
    }
  ]

  const eventTypes = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'engagement', label: 'Engagement Session' },
    { value: 'elopement', label: 'Elopement' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'portrait', label: 'Portrait Session' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper fade-in-up visible">
            <div className="section-pre-title">
              <FaPaperPlane className="pre-title-icon" />
              <span>GET IN TOUCH</span>
              <FaPaperPlane className="pre-title-icon" />
            </div>
            <h2 className="section-title">
              <span className="title-line">Begin Your</span>
              <span className="title-line gradient-text">Photography Journey</span>
            </h2>
            <p className="section-subtitle">
              Ready to capture your story? Let's discuss your vision and create something extraordinary together
            </p>
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-sidebar">
            <div className="info-header">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-subtitle">
                We're here to guide you through every step of your photography experience
              </p>
            </div>
            
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h4 className="info-card-title">{info.title}</h4>
                    <div className="info-details">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="info-detail">{detail}</p>
                      ))}
                    </div>
                    <p className="info-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="contact-note">
              <div className="note-icon">💫</div>
              <div className="note-content">
                <h4 className="note-title">Premium Experience Guaranteed</h4>
                <p className="note-text">
                  Every inquiry receives a personalized response and complimentary initial consultation
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitSuccess && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <div className="success-content">
                    <h4>Thank you for your inquiry!</h4>
                    <p>We'll get back to you within 24 hours to schedule your consultation.</p>
                  </div>
                </div>
              )}
              
              <div className="form-header">
                <h3 className="form-title">Inquiry Form</h3>
                <p className="form-subtitle">
                  Please provide details about your event for a personalized quote
                </p>
              </div>
              
              <div className="form-grid">
                {/* Personal Information */}
                <div className="form-group">
                  <label className="form-label">
                    <FaUser className="label-icon" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <FaEnvelope className="label-icon" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <FaPhone className="label-icon" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                {/* Event Information */}
                <div className="form-group">
                  <label className="form-label">
                    <FaCalendarAlt className="label-icon" />
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <FaCalendarAlt className="label-icon" />
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <FaMapMarkerAlt className="label-icon" />
                    Estimated Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    placeholder="Approximate number"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-input"
                    min="1"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <FaMapMarkerAlt className="label-icon" />
                    Venue/Location
                  </label>
                  <input
                    type="text"
                    name="venue"
                    placeholder="Venue name or city"
                    value={formData.venue}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    💰
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-3000">Under $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000-8000">$5,000 - $8,000</option>
                    <option value="8000-12000">$8,000 - $12,000</option>
                    <option value="over-12000">$12,000+</option>
                  </select>
                </div>
              </div>
              
              {/* Message */}
              <div className="form-group full-width">
                <label className="form-label">
                  ✍️
                  Tell Us About Your Vision *
                </label>
                <textarea
                  name="message"
                  placeholder="Share details about your event, specific shots you want, and any special requirements..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              
              {/* Referral */}
              <div className="form-group full-width">
                <label className="form-label">
                  🤝
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  name="referral"
                  placeholder="Friend referral, Instagram, Google search, etc."
                  value={formData.referral}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              {/* Submit */}
              <div className="form-submit">
                <button 
                  type="submit" 
                  className="btn submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="submit-icon" />
                      SEND INQUIRY
                    </>
                  )}
                </button>
                <p className="submit-note">
                  We respect your privacy and will never share your information
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact