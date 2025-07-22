import React, { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import SearchBar from '../components/SearchBar';
import '../styles/Home.css';

export default function Home({
  onPosterClick,
  onSearch,
  type,
  setType,
  searchResults,
  searching
}) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const TMDB_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const fetchPopular = async () => {
    const [moviesRes, seriesRes] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}`),
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_KEY}`)
    ]);
    const moviesData = await moviesRes.json();
    const seriesData = await seriesRes.json();
    setMovies(moviesData.results.slice(0, 6));
    setSeries(seriesData.results.slice(0, 6));
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <main className="home-content">
      <div className="search-row">
        <SearchBar
          onSearch={onSearch}
          type={type}
          setType={setType}
        />
      </div>

      {searching && <p className="loading">Loading…</p>}

      {searchResults.length > 0 ? (
        <>
          <h2>🎯 Search Results</h2>
          <MovieGrid items={searchResults} onPosterClick={onPosterClick} />
        </>
      ) : (
        <>
          <h2>🎬 Featured Movies</h2>
          <MovieGrid items={movies} onPosterClick={onPosterClick} />
          <h2>📺 Featured TV Shows</h2>
          <MovieGrid items={series} onPosterClick={onPosterClick} />
        </>
      )}
    </main>
  );
}











