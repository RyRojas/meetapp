import React, { useState } from 'react';

export function Event({ eventData }) {
  let [isExpanded, setExpanded] = useState(false);

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };

  return (
    <div className="event-card">
      <h2 className="event-card__title">{eventData.summary}</h2>
      <p className="event-card__date">
        {new Date(eventData.start.dateTime).toLocaleDateString(
          undefined,
          dateOptions
        )}
      </p>
      <p className="event-card__location">{eventData.location}</p>
      <div className="event-card__buttons">
        {isExpanded && (
          <>
            <p className="event-card__description">{eventData.description}</p>
            <a href={eventData.htmlLink} className="event-card__calendar-link">
              <button>See Event in Calendar</button>
            </a>
          </>
        )}
        <button
          className="event-card__details-toggle"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
  );
}
