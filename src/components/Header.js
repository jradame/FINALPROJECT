import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

export default function Header({ onAbout, onContact }) {
  return (
    <header className="header">
      <div className="logo-section">
        <FontAwesomeIcon icon={faFilm} className="logo-icon" />
        <span className="logo-text">CineScope</span>
      </div>
      <nav className="nav-links">
        <button onClick={() => window.scrollTo(0, 0)}>Home</button>
        <button onClick={onAbout}>About</button>
        <button onClick={onContact}>Contact</button>
      </nav>
    </header>
  );
}




