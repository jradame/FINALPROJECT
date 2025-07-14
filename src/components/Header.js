// src/components/Header.js
import React from 'react';
import '../App.css';  

const Header = ({ onHome, onAbout, onContact }) => (
  <header className="main-header">
    <nav className="navbar">
      <div className="logo">🎬 CineScope</div>
      <ul className="nav-links">
        <li><button onClick={onHome}>Home</button></li>
        <li><button onClick={onAbout}>About</button></li>
        <li><button onClick={onContact}>Contact</button></li>
      </ul>
    </nav>
  </header>
);

export default Header;





