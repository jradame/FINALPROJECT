// MovieGrid.js
import React from "react";
import "../styles/MovieGrid.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w342";

const MovieGrid = ({ items = [], onPosterClick }) => {
  return (
    <div className="result-grid">
      {items
        .filter((item) => item && item.poster_path && item.poster_path !== "N/A")
        .map((item, index) => {
          const title = item.title || item.name;
          return (
            <div
              key={index}
              className="movie-card"
              onClick={() =>
                onPosterClick({
                  Title: title,
                  Poster: `${IMAGE_BASE}${item.poster_path}`,
                  Year: item.release_date || item.first_air_date || "N/A",
                  Overview: item.overview,
                  Rating: item.vote_average,
                  Type: item.media_type || "unknown",
                })
              }
            >
              <img src={`${IMAGE_BASE}${item.poster_path}`} alt={title} />
              <div className="card-info">
                <h3>{title}</h3>
                <p>{(item.release_date || item.first_air_date || "").slice(0, 4)}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MovieGrid;




