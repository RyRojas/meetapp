import React, { useState } from 'react';

export function CitySearch({ locations, setSelectedLocation }) {
  let [query, setQuery] = useState(''),
    [isVisible, setIsVisible] = useState(false);

  const filterSuggestions = (suggestions) => {
    return query
      ? suggestions.filter((location) =>
          location.toUpperCase().includes(query.toUpperCase())
        )
      : suggestions;
  };

  const handleItemClick = (suggestion) => {
    setQuery(suggestion);
    setIsVisible(false);
    setSelectedLocation(suggestion);
  };

  return (
    <div className="city-search">
      <input
        type="text"
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsVisible(true)}
      />
      <ul className="suggestions" style={isVisible ? {} : { display: 'none' }}>
        {filterSuggestions(locations).map((suggestion) => (
          <li key={suggestion} onClick={() => handleItemClick(suggestion)}>
            {suggestion}
          </li>
        ))}
        <li key="all" onClick={() => handleItemClick('')}>
          <b>See all cities</b>
        </li>
      </ul>
    </div>
  );
}
