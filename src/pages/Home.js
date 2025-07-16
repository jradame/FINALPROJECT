// Home.js
import React, { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";

export default function Home({ onPosterClick }) {
  const [results, setResults] = useState([]);
  const [type, setType] = useState("movie");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  // const [games, setGames] = useState([]); // future RAWG support

  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const fetchTMDB = async (endpoint) => {
    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${TMDB_API_KEY}`);
    const data = await res.json();
    return data.results || [];
  };

  const fetchTop = async () => {
    setLoading(true);
    const [movieResults, seriesResults] = await Promise.all([
      fetchTMDB("movie/popular"),
      fetchTMDB("tv/popular"),
    ]);
    setMovies(movieResults.slice(0, 10));
    setSeries(seriesResults.slice(0, 10));
    // setGames([]); // For future RAWG setup
    setLoading(false);
  };

  useEffect(() => { fetchTop(); }, []);

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    setHasSearched(true);
    const endpoint = type === "movie" ? "search/movie" : "search/tv";
    const res = await fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  };

  return (
    <main className="home">
      <SearchBar onSearch={handleSearch} type={type} setType={setType} />

      {hasSearched && !loading && results.length === 0 && (
        <p className="no-results">No results found. Try a different title.</p>
      )}

      {results.length > 0 ? (
        <>
          <h2>🎯 Search Results</h2>
          <MovieGrid items={results} isSkeleton={loading} onPosterClick={onPosterClick} />
        </>
      ) : (
        <>
          <h2>🎬 Featured Movies</h2>
          <MovieGrid items={movies} isSkeleton={loading} onPosterClick={onPosterClick} />
          <h2>📺 Featured TV Shows</h2>
          <MovieGrid items={series} isSkeleton={loading} onPosterClick={onPosterClick} />
          {/* <h2>🎮 Featured Games</h2>
          <MovieGrid items={games} isSkeleton={loading} onPosterClick={onPosterClick} /> */}
        </>
      )}
    </main>
  );
}




