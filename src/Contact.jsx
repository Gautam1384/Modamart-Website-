import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaComments } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    review: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    setForm({ firstName: '', lastName: '', email: '', review: '' });
  };

  return (
    <div className="contact-container">
      {/* Left Side: Company Info in Individual Boxes */}
      <div className="contact-left">
        <div className="contact-boxes">
          <div className="contact-box">
            <h3>
              <FaPhoneAlt style={{ color: '#007bff' }} /> CALL US
            </h3>
            <p>+91-1234567890</p>
          </div>
          <div className="contact-box">
            <h3>
              <FaEnvelope style={{ color: '#007bff' }} /> EMAIL US
            </h3>
            <p>support@modamart.com</p>
          </div>
          <div className="contact-box">
            <h3>
              <FaWhatsapp style={{ color: '#25D366' }} /> WHATSAPP
            </h3>
            <p>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'underline' }}>
                Chat on WhatsApp
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h3>
              <FaComments style={{ color: '#007bff' }} /> CHAT WITH US
            </h3>
            <p>
              <a href="mailto:support@modamart.com?subject=Offline%20Chat%20Request" style={{ color: '#007bff', textDecoration: 'underline' }}>
                Offline Chat
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Customer Form */}
      <div className="contact-right">
        <h2>Send us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="review"
            placeholder="Your message"
            value={form.review}
            onChange={handleChange}
            required
            rows={4}
          />
          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;