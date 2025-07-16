import React from 'react';
import '../styles/Modal.css';

export default function DetailsModal({ content, onClose }) {
  if (!content) return null;
  const { Title, imdbRating, Runtime, Released, Plot } = content;

  return (
    <div className="modal-backdrop in" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <h2>{Title}</h2>
        <p>⭐ Rating: {imdbRating}</p>
        <p>⏱️ Runtime: {Runtime}</p>
        <p>🗓️ Released: {Released}</p>
        <p>{Plot}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

