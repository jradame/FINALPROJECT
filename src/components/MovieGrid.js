import React from 'react';
import '../styles/MovieGrid.css';

export default function MovieGrid({ items, isSkeleton, onPosterClick }) {
  if (isSkeleton) {
    return (
      <div className='movie-grid'>
        {[...Array(6)].map((_, i) => <div className='movie-card skeleton-card' key={i}></div>)}
      </div>
    );
  }

  return (
    <div className='movie-grid'>
      {items.map(item => {
        const mediaType = item.media_type || (item.first_air_date ? 'tv' : 'movie');
        const title = item.title || item.name;
        const year = (item.release_date || item.first_air_date || '').slice(0, 4);
        const poster = item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}` : 'https://via.placeholder.com/160x240';

        return (
          <div key={item.id} className='movie-card' onClick={() => onPosterClick(item)}>
            <img src={poster} alt={title} />
            <div className='card-info'>
              <h3>{title}</h3>
              <p>{year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}




