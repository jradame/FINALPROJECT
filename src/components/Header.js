import React from 'react';
import '../styles/Header.css';

export default function Header({ onHome, onAbout, onContact }) {
  return (
    <header className="main-header">
      <div className="logo">🎬 CineScope</div>
      <nav className="nav-links">
        <button onClick={onHome}>Home</button>
        <button onClick={onAbout}>About</button>
        <button onClick={onContact}>Contact</button>
      </nav>
    </header>
  );
}
















