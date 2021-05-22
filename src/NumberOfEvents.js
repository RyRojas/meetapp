import React, { useState } from 'react';

export function NumberOfEvents({ setEventCount }) {
  let [eventsDisplayed, setEventsDisplayed] = useState(16);

  const handleInputChange = (event) => {
    const count = event.target.value;
    setEventsDisplayed(count);
    setEventCount(count);
  };

  return (
    <input
      type="number"
      className="events-displayed-input"
      value={eventsDisplayed}
      onChange={(e) => handleInputChange(e)}
    ></input>
  );
}
