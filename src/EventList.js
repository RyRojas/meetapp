import React from 'react';
import { Event } from './Event';

export function EventList(props) {
  return (
    <ul className="event-list">
      {props.events.map((event) => (
        <li key={event.id} className="event-list__item">
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
}
