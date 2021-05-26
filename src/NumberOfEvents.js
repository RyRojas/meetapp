import React from 'react';

export function NumberOfEvents({ eventCount, setEventCount }) {
  const handleInputChange = (event) => {
    const count = event.target.value;
    setEventCount(count);
  };

  return (
    <input
      type="number"
      className="events-displayed-input"
      value={eventCount}
      onChange={(e) => handleInputChange(e)}
    ></input>
  );
}
