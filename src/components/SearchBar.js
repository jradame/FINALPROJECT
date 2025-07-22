import React, { useState } from 'react';
import '../styles/Home.css';

export default function SearchBar({ onSearch, type, setType }) {
  const [query, setQuery] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form className="search-container" onSubmit={submit}>
      <input
        className="search-input"
        placeholder="Search title..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select className="search-select" value={type} onChange={e => setType(e.target.value)}>
        <option value="movie">Movie</option>
        <option value="tv">TV Show</option>
      </select>
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}



