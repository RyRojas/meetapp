import React, { useState } from 'react';

export function CitySearch({ locations }) {
  let [query, setQuery] = useState('');

  let suggestions = locations;

  if (query) {
    suggestions = locations.filter((location) =>
      location.toUpperCase().includes(query.toUpperCase())
    );
  }

  return (
    <div className="city-search">
      <input
        type="text"
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="suggestions">
        {suggestions.map((suggestion) => (
          <li key={suggestion} onClick={() => setQuery(suggestion)}>
            {suggestion}
          </li>
        ))}
        <li key="all">
          <b>See all cities</b>
        </li>
      </ul>
    </div>
  );
}
