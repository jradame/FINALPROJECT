import React from "react";
import "../styles/Header.css";

export default function Header({ onHome, onAbout, onContact }) {
  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="logo"><i className="fas fa-film"></i> CineScope</div>
        <ul className="nav-links">
          <li><a href="#" id="homeBtn" onClick={onHome}>Home</a></li>
          <li><a href="#" id="aboutBtn" onClick={onAbout}>About</a></li>
          <li><a href="#" id="contactBtn" onClick={onContact}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}








