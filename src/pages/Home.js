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
  const [games, setGames] = useState([]);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const fetchTop = async () => {
    setLoading(true);
    const tops = {
      movie: ["Oppenheimer", "Barbie", "Dune", "John Wick", "Avatar"],
      series: ["The Boys", "Loki", "Stranger Things", "Breaking Bad", "Wednesday"],
      game: ["Halo", "Zelda", "Final Fantasy", "GTA V", "Cyberpunk"]
    };

    const fetchOne = async (title, t) => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}&type=${t}&plot=full`
      );
      const json = await res.json();
      return json.Response === "True" ? json : null;
    };

    const all = await Promise.all([
      ...tops.movie.map((t) => fetchOne(t, "movie")),
      ...tops.series.map((t) => fetchOne(t, "series")),
      ...tops.game.map((t) => fetchOne(t, "game"))
    ]);

    setMovies(all.slice(0, 5));
    setSeries(all.slice(5, 10));
    setGames(all.slice(10, 15));
    setLoading(false);
  };

  useEffect(() => {
    fetchTop();
  }, []);

  const handleSearch = async (q) => {
    setLoading(true);
    setHasSearched(true);

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(q)}&type=${type}`
    );
    const json = await res.json();
    if (json.Response === "True") {
      const details = await Promise.all(
        json.Search.slice(0, 5).map((item) =>
          fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${item.imdbID}&plot=short`
          ).then((r) => r.json())
        )
      );
      setResults(details.filter((item) => item.Response === "True"));
    } else {
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <main className="home">
      <div className="search-align">
        <SearchBar
          onSearch={handleSearch}
          type={type}
          setType={setType}
        />
      </div>

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
          <section className="section-movies">
            <h2>🎬 Featured Movies</h2>
            <MovieGrid items={movies} isSkeleton={loading} onPosterClick={onPosterClick} />
          </section>
          <section>
            <h2>📺 Featured TV Shows</h2>
            <MovieGrid items={series} isSkeleton={loading} onPosterClick={onPosterClick} />
          </section>
          <section>
            <h2>🎮 Featured Games</h2>
            <MovieGrid items={games} isSkeleton={loading} onPosterClick={onPosterClick} />
          </section>
        </>
      )}
    </main>
  );
}


