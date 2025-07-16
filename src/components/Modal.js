import React from "react";
import "../styles/Modal.css";

export default function Modal({ isOpen, type, content, onClose }) {
  if (!isOpen) return null;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop in" onClick={handleBackdrop}>
      <div className="modal-content">
        <button className="close-btn" style={{ position: 'absolute', top: 10, right: 10 }} onClick={onClose}>×</button>

        {type === 'about' && (
          <>
            <h2>About CineScope</h2>
            <p>CineScope is your gateway to exploring the world of movies, series, and games. Search titles, view details, and stay entertained — all in one place.</p>
          </>
        )}

        {type === 'contact' && (
          <form onSubmit={(e) => { e.preventDefault(); onClose(); alert('Thanks for reaching out!'); }}>
            <h2>Contact Us</h2>
            <label>Name<input type="text" required /></label>
            <label>Email<input type="email" required /></label>
            <label>Message<textarea rows="4" required /></label>
            <button type="submit">Send</button>
          </form>
        )}

        {type === 'details' && content && (
          <>
            <img src={content.Poster} alt={content.Title} />
            <h2>{content.Title}</h2>
            <p><strong>⭐ Rating:</strong> {content.imdbRating}</p>
            <p><strong>⏱ Runtime:</strong> {content.Runtime}</p>
            <p><strong>📅 Released:</strong> {content.Released}</p>
            <p>{content.Plot}</p>
          </>
        )}
      </div>
    </div>
  );
}






