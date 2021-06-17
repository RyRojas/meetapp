import React, { useState } from 'react';
import { ErrorAlert } from './Alert';

export function NumberOfEvents({ eventCount, setEventCount }) {
  let [errorText, setErrorText] = useState('');

  const handleInputChange = (event) => {
    setErrorText('');

    const count = parseInt(event.target.value);

    if (count) {
      count < 1 || !Number.isInteger(count)
        ? setErrorText('Please enter a valid number.')
        : setEventCount(count);
    } else {
      setEventCount('');
    }
  };

  return (
    <div className="events-displayed">
      <p>Number of Events</p>
      <input
        type="number"
        className="events-displayed__input"
        value={eventCount}
        min="1"
        onChange={(e) => handleInputChange(e)}
      ></input>
      <ErrorAlert text={errorText} />
    </div>
  );
}
