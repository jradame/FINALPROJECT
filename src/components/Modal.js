import React from 'react';

const Modal = ({ modal, onClose }) => {
  if (!modal.isOpen) return null;

  const { content } = modal;

  return (
    <div className="modal slide in" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>

        {/* About Modal */}
        {content.about && (
          <>
            <h2>About CineScope</h2>
            <p>
              CineScope is your gateway to exploring the world of movies,
              series, and games. Search titles, view details, and stay
              entertained — all in one place.
            </p>
          </>
        )}

        {/* Contact Modal */}
        {content.contact && (
          <form onSubmit={e => { e.preventDefault(); onClose(); }}>
            <h2>Contact Us</h2>
            <label>Name<input type="text" required /></label>
            <label>Email<input type="email" required /></label>
            <label>Message<textarea rows="4" required /></label>
            <button type="submit">Send</button>
          </form>
        )}

        {/* Movie Details + Trailer */}
        {content.Title && (
          <div className="modal-details">
            <img src={content.Poster !== 'N/A' ? content.Poster : ''} alt={content.Title} />
            <h2>{content.Title} ({content.Year})</h2>
            <p><b>Genre:</b> {content.Genre}</p>
            <p><b>Rating:</b> {content.imdbRating}</p>
            <p>{content.Plot}</p>
            {content.trailerUrl && (
              <div className="trailer-container">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${new URL(content.trailerUrl).searchParams.get('v')}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Trailer"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
