import React from "react";
import "../styles/MovieGrid.css";

const MovieGrid = ({ items = [], onPosterClick }) => {
  return (
    <div className="result-grid">
      {items
        .filter(
          (movie) =>
            movie &&
            movie.Poster &&
            movie.Poster !== "N/A" &&
            movie.Title
        )
        .map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() =>
              onPosterClick({
                Title: movie.Title,
                Poster: movie.Poster,
                Year: movie.Year,
                Rated: movie.Rated,
                Runtime: movie.Runtime,
                Released: movie.Released,
                Plot: movie.Plot,
                Type: movie.Type,
              })
            }
          >
            <img src={movie.Poster} alt={movie.Title} />
            <div className="card-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieGrid;



