import React, { useState } from 'react';

export function NumberOfEvents() {
  let [eventsDisplayed, setEventsDisplayed] = useState(32);

  return (
    <input
      type="number"
      className="events-displayed-input"
      value={eventsDisplayed}
      onChange={(e) => setEventsDisplayed(e.target.value)}
    ></input>
  );
}
