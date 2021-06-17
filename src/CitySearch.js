import React, { useState, useEffect } from 'react';
import { InfoAlert } from './Alert';
import SearchIcon from './assets/search.svg';

export function CitySearch({ locations, setSelectedLocation }) {
  let [query, setQuery] = useState(''),
    [isVisible, setIsVisible] = useState(false),
    [infoText, setInfoText] = useState(''),
    [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (userInput) => {
    const results = userInput
      ? locations.filter((location) =>
          location.toUpperCase().includes(userInput.toUpperCase())
        )
      : locations;

    results.length === 0
      ? setInfoText(
          'We cannot find the city you are looking for. Please try another city.'
        )
      : setInfoText('');

    setSuggestions(results);
    setQuery(userInput);
  };

  const handleItemClick = (suggestion) => {
    handleInputChange(suggestion);
    setIsVisible(false);
    setSelectedLocation(suggestion);
  };

  const handleOnBlur = (event) => {
    if (
      !event.relatedTarget ||
      event.relatedTarget.className !== 'suggestions__item'
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    setSuggestions(locations);
  }, [locations]);

  return (
    <div className="city-search">
      <div className="search-bar">
        <span>
          <img
            src={SearchIcon}
            aria-hidden="true"
            className="search-bar__icon"
            alt=""
          />
        </span>
        <input
          type="text"
          className="search-bar__input"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsVisible(true)}
          onBlur={(e) => handleOnBlur(e)}
          placeholder="Search by city"
        />
      </div>
      <ul className="suggestions" style={isVisible ? {} : { display: 'none' }}>
        {suggestions.map((suggestion) => (
          <li
            className="suggestions__item"
            key={suggestion}
            tabIndex="0"
            onClick={() => handleItemClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}

        {infoText && (
          <li>
            <InfoAlert text={infoText} />
          </li>
        )}

        <li
          key="all"
          className="suggestions__item"
          tabIndex="0"
          onClick={() => handleItemClick('')}
        >
          <b>See all cities</b>
        </li>
      </ul>
    </div>
  );
}
