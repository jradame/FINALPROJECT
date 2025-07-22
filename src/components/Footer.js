import React from 'react';
import './Footer.css';

// ============================
// Footer Component
// ============================
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">🎬 CineScope</div>

      <div className="social-icons">
        <i className="fab fa-facebook-f" title="Facebook"></i>
        <i className="fab fa-twitter" title="Twitter"></i>
        <i className="fab fa-instagram" title="Instagram"></i>
        <i className="fab fa-linkedin-in" title="LinkedIn"></i>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} CineScope. All rights reserved.
      </p>
    </footer>
  );
}




