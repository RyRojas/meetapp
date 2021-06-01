import React, { useEffect, useState } from 'react';
import './App.css';
import './nprogress.css';

//App Components
import { EventList } from './EventList';
import { CitySearch } from './CitySearch';
import { NumberOfEvents } from './NumberOfEvents';

import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';

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
      <EventList events={displayEvents} />
      <NumberOfEvents eventCount={eventCount} setEventCount={setEventCount} />
    </div>
  );
}
