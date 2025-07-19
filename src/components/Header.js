import React from "react";
import "../styles/Header.css";

export default function Header({ onHome, onAbout, onContact }) {
  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="logo"><i className="fas fa-film"></i> CineScope</div>
        <ul className="nav-links">
          <li><button className="nav-btn" onClick={onHome}>Home</button></li>
          <li><button className="nav-btn" onClick={onAbout}>About</button></li>
          <li><button className="nav-btn" onClick={onContact}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}










