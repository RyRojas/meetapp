import React, { useState } from 'react';

export function Event({ eventData }) {
  let [isExpanded, setExpanded] = useState(false);

  return (
    <div className="event-card">
      <div className="event-card__title">{eventData.summary}</div>
      <div className="event-card__date">{eventData.start.dateTime}</div>
      <div className="event-card__location">{eventData.location}</div>
      {isExpanded && (
        <>
          <div className="event-card__description">{eventData.description}</div>
          <a href={eventData.htmlLink} className="event-card__calendar-link">
            <button>See Event in Calendar</button>
          </a>
        </>
      )}
      <button
        className="event-card__details-toggle"
        onClick={() => setExpanded(!isExpanded)}
      >
        Show Details
      </button>
    </div>
  );
}
