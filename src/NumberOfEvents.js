import React, { useState } from 'react';
import { ErrorAlert } from './Alert';

export function NumberOfEvents({ eventCount, setEventCount }) {
  let [errorText, setErrorText] = useState('');

  const handleInputChange = (event) => {
    setErrorText('');

    const count = parseInt(event.target.value);

    count < 1 || !Number.isInteger(count)
      ? setErrorText('Please enter a valid number.')
      : setEventCount(count);
  };

  return (
    <>
      <input
        type="number"
        className="events-displayed-input"
        value={eventCount}
        // min="1"
        onChange={(e) => handleInputChange(e)}
      ></input>
      <ErrorAlert text={errorText} />
    </>
  );
}
