import React from 'react';

const PosterGrid = ({ items, onPosterClick }) => (
  <div className="result-grid">
    {items.map(item => (
      <div
        key={item.imdbID}
        className="movie-card"
        onClick={() => onPosterClick(item)}
      >
        <img
          src={item.Poster !== 'N/A' ? item.Poster : '/placeholder.png'}
          alt={item.Title}
        />
        <div className="card-info">
          <h3>{item.Title}</h3>
          <p>{item.Year}</p>
        </div>
      </div>
    ))}
  </div>
);

export default PosterGrid;
