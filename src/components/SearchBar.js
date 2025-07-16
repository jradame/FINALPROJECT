import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, type, setType, filter, setFilter }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-wrapper" onSubmit={handleSubmit}>
      <input
        id="searchInput"
        type="text"
        placeholder="Search title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select id="typeSelect" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="movie">Movie</option>
        <option value="series">TV Series</option>
        <option value="game">Game</option>
      </select>
      <select id="filterSelect" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Years/Genres</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;


