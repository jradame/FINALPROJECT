// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import PosterGrid from './components/PosterGrid';
import SearchBar from './components/Search';
import getTrailer from './getTrailer';

function App() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('movie');
  const [yearGenre, setYearGenre] = useState('');
  const [results, setResults] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, content: {} });

  const [landingMovies, setLandingMovies] = useState([]);
  const [landingShows, setLandingShows] = useState([]);
  const [landingGames, setLandingGames] = useState([]);

  const openModal = content => setModal({ isOpen: true, content });
  const closeModal = () => setModal({ isOpen: false, content: {} });

  const OMDB_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${query}&type=${type}&y=${yearGenre}`
      );
      const data = await res.json();
      if (data.Search) {
        setResults(data.Search);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error('OMDb error:', error);
    }
  };

  const handlePosterClick = async (movie) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${movie.imdbID}&plot=full`
      );
      const details = await res.json();

      const trailerUrl = await getTrailer(details.Title);
      openModal({ ...details, trailerUrl });
    } catch (err) {
      console.error('Failed to load movie details or trailer:', err);
    }
  };

  const fetchLanding = async (type) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_KEY}&type=${type}&s=the`
      );
      const json = await res.json();
      return (json.Search || []).slice(0, 6);
    } catch (error) {
      console.error(`Failed to fetch ${type}:`, error);
      return [];
    }
  };

  useEffect(() => {
    (async () => {
      const [movies, shows, games] = await Promise.all([
        fetchLanding('movie'),
        fetchLanding('series'),
        fetchLanding('game'),
      ]);
      setLandingMovies(movies);
      setLandingShows(shows);
      setLandingGames(games);
    })();
  }, []);

  return (
    <>
      <Header
        onHome={() => {
          setResults([]);
        }}
        onAbout={() => openModal({ about: true })}
        onContact={() => openModal({ contact: true })}
      />

      <div className="search-align">
        <SearchBar
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          yearGenre={yearGenre}
          setYearGenre={setYearGenre}
          onSearch={handleSearch}
        />
      </div>

      <main>
        {results.length > 0 ? (
          <section>
            <h2>Results</h2>
            <PosterGrid items={results} onPosterClick={handlePosterClick} />
          </section>
        ) : (
          <section>
            <h2>Featured Movies</h2>
            <PosterGrid items={landingMovies} onPosterClick={handlePosterClick} />
            <h2>Featured TV Shows</h2>
            <PosterGrid items={landingShows} onPosterClick={handlePosterClick} />
            <h2>Featured Games</h2>
            <PosterGrid items={landingGames} onPosterClick={handlePosterClick} />
          </section>
        )}
      </main>

      <Modal modal={modal} onClose={closeModal} />
    </>
  );
}

export default App;
