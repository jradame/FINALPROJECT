import React from 'react';
import '../styles/MovieGrid.css';

export default function MovieGrid({ items, onPosterClick }) {
  return (
    <div className="result-grid">
      {items.slice(0, 6).map(item => {
        const title = item.title || item.name;
        const date = (item.release_date || item.first_air_date || '').slice(0,10);
        const rating = item.vote_average?.toFixed(1);
        const posterUrl = item.poster_path
          ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
          : 'https://via.placeholder.com/160x240';

        return (
          <div key={item.id} className="movie-card" onClick={() => onPosterClick(item)}>
            <img src={posterUrl} alt={title} />
            <div className="card-info">
              <h3>{title}</h3>
              {rating && <p>⭐ {rating}</p>}
              {date && <p>{date}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}







