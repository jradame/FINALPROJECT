import React from 'react';
import '../styles/Modal.css';

export default function Modal({ isOpen, type, content, onClose }) {
  if (!isOpen) return null;

  const closeOnBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  const {
    title, name, vote_average, runtime,
    episode_run_time, overview, release_date, first_air_date, poster_path
  } = content || {};

  const displayTitle = title || name || '';
  const displayRating = vote_average ? `${vote_average.toFixed(1)}/10` : 'N/A';
  const displayRuntime = runtime || (episode_run_time?.[0] || 'N/A');
  const displayDate = release_date || first_air_date || 'N/A';
  const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : null;

  return (
    <div className='modal-backdrop in' onClick={closeOnBackdrop}>
      <div className='modal-content'>
        <button className='close-btn' onClick={onClose}>×</button>

        {type === 'about' && (
          <>
            <h2>About CineScope</h2>
            <p>
              CineScope is your all-in-one gateway to movies, TV shows, and more. 
              Built with React and TMDB, it's fast, beautiful, and open for expansion.
            </p>
          </>
        )}

        {type === 'contact' && (
          <form className="contact-form" onSubmit={e => { e.preventDefault(); onClose(); alert('Thanks for reaching out!'); }}>
            <h2>Contact Us</h2>
            <label>
              <span>Name</span>
              <input type="text" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" required />
            </label>
            <label>
              <span>Message</span>
              <textarea rows="4" required />
            </label>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        )}

        {type === 'details' && content && (
          <>
            {posterUrl && <img src={posterUrl} alt={displayTitle} />}
            <h2>{displayTitle}</h2>
            <p><strong>⭐ Rating:</strong> {displayRating}</p>
            <p><strong>⏱ Runtime:</strong> {displayRuntime} min</p>
            <p><strong>📅 Released:</strong> {displayDate}</p>
            <p>{overview || 'No description available.'}</p>
          </>
        )}
      </div>
    </div>
  );
}










