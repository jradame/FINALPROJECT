import React from 'react';
import '../styles/Modal.css';

export default function Modal({ isOpen, type, content, onClose }) {
  if (!isOpen) return null;
  if (type === 'details' && !content) return null;

  const closeOnBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  const {
    title, name, vote_average, runtime,
    episode_run_time, overview, release_date,
    first_air_date, poster_path
  } = content || {};

  const displayTitle = title || name || '';
  const displayRating = vote_average ? `${vote_average.toFixed(1)}/10` : 'N/A';
  const displayRuntime = runtime || (episode_run_time?.[0] || null);
  const displayDate = release_date || first_air_date || 'N/A';
  const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : null;

  return (
    <div className='modal-backdrop in' onClick={closeOnBackdrop}>
      <div className='modal-content'>
        <button className='close-btn' onClick={onClose}>×</button>

        {type === 'about' && (
          <>
            <h2>About CineScope</h2>
            <p>CineScope is your gateway to exploring the world of movies, series, and games.</p>
          </>
        )}

        {type === 'contact' && (
          <form onSubmit={e => {
            e.preventDefault();
            onClose();
            alert('Thanks!');
          }}>
            <h2>Contact Us</h2>
            <label>Name<input type='text' required /></label>
            <label>Email<input type='email' required /></label>
            <label>Message<textarea rows='4' required /></label>
            <button type='submit'>Send</button>
          </form>
        )}

        {type === 'details' && (
          <>
            {posterUrl && <img src={posterUrl} alt={displayTitle} />}
            <h2>{displayTitle}</h2>
            <p><strong>⭐ Rating:</strong> {displayRating}</p>
            <p><strong>⏱ Runtime:</strong> {displayRuntime ? `${displayRuntime} min` : 'N/A'}</p>
            <p><strong>📅 Released:</strong> {displayDate}</p>
            <p>{overview}</p>
          </>
        )}
      </div>
    </div>
  );
}








