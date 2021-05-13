//Takes an events array and returns an array of location with duplicates excluded
export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];

  return locations;
};
