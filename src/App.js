import React, { useEffect, useState } from 'react';
import './App.css';
import './nprogress.css';

//App Components
import { EventList } from './EventList';
import { CitySearch } from './CitySearch';
import { NumberOfEvents } from './NumberOfEvents';
import EventGenre from './EventGenre';
import EventsByCity from './EventsByCity';
import { WarningAlert } from './Alert';

//Api imports
import { getEvents, extractLocations } from './api';

export default function App() {
  let [events, setEvents] = useState([]),
    [locations, setLocations] = useState([]),
    [displayEvents, setDisplayEvents] = useState([]),
    [selectedLocation, setSelectedLocation] = useState(''),
    [eventCount, setEventCount] = useState(16),
    [warningText, setWarningText] = useState('');

  const handleOnlineStatus = () => {
    !navigator.onLine
      ? setWarningText(
          'You are currently offline, events may not be up-to-date.'
        )
      : setWarningText('');
  };

  useEffect(() => {
    handleOnlineStatus();

    getEvents().then((response) => {
      setEvents(response);
      setDisplayEvents(response);
      setLocations(extractLocations(response));
    });
  }, []);

  useEffect(() => {
    handleOnlineStatus();

    const relevantEvents = (
      selectedLocation === ''
        ? events
        : events.filter((event) => event.location === selectedLocation)
    ).slice(0, eventCount || 16);
    setDisplayEvents(relevantEvents);
  }, [selectedLocation, eventCount, events]);

  return (
    <div className="app">
      <CitySearch
        locations={locations}
        setSelectedLocation={setSelectedLocation}
      />
      <WarningAlert text={warningText} />

      <div className="data-vis-wrapper">
        <EventGenre events={events} />
        <EventsByCity events={events} locations={locations} />
      </div>
      <EventList events={displayEvents} />
      <NumberOfEvents eventCount={eventCount} setEventCount={setEventCount} />
    </div>
  );
}
