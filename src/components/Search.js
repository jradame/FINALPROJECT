import React from 'react';

const SearchBar = ({
  query, setQuery,
  type, setType,
  yearGenre, setYearGenre,
  onSearch
}) => (
  <div className="search-align">
    <div className="search-wrapper">
      <input
        id="searchInput"
        type="text"
        placeholder="Search title..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSearch()}
      />

      <select
        id="typeSelect"
        value={type}
        onChange={e => setType(e.target.value)}
      >
        <option value="movie">Movie</option>
        <option value="series">TV Series</option>
        <option value="game">Game</option>
      </select>

      <input
        id="filterSelect"
        type="text"
        placeholder="All Years/Genres"
        value={yearGenre}
        onChange={e => setYearGenre(e.target.value)}
      />

      <button onClick={onSearch}>Search</button>
    </div>
  </div>
);

export default SearchBar;





