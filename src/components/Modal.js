import React, { useState } from 'react';
import './Modal.css';

// ============================
// Modal Component
// ============================
export default function Modal({ isOpen, type, content, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Placeholder: replace with email API, backend, etc
    console.log('Contact Form Submitted:', formData);

    // Clear form if needed
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>

        {type === 'about' && (
          <>
            <h2>About CineScope</h2>
            <p>
              CineScope is your portal for discovering movies and series.<br />
              Built with React and the latest movie APIs.<br /><br />
              Enjoy browsing and happy watching!
            </p>
          </>
        )}

        {type === 'contact' && (
          <>
            <h2>Contact Us</h2>
            {submitted ? (
              <p className="form-success">Thanks for reaching out! We'll get back to you soon. 🎉</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            )}
          </>
        )}

        {type === 'details' && content && (
          <>
            <h2>{content.title || content.name}</h2>
            <p>{content.overview || 'No overview available.'}</p>
          </>
        )}
      </div>
    </div>
  );
}













