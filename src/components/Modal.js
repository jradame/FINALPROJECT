import React from "react";
import "../styles/Modal.css";

const Modal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="modal-backdrop in" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={content.Poster} alt={content.Title} />
        <h2>{content.Title}</h2>
        <p>
          <strong>⭐ Rating:</strong> {content.Rated}
        </p>
        <p>
          <strong>⏱ Runtime:</strong> {content.Runtime}
        </p>
        <p>
          <strong>📅 Released:</strong> {content.Released}
        </p>
        <p>{content.Plot}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;





