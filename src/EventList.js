import React from 'react';
import { Event } from './Event';

export function EventList({ events }) {
  return (
    <ul className="event-list">
      {events.map((event) => (
        <li key={event.id} className="event-list__item">
          <Event eventData={event} />
        </li>
      ))}
    </ul>
  );
}
