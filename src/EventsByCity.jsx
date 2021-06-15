import React from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function EventsByCity({ locations, events }) {
  const getData = () => {
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  return (
    <>
      <h4>Cities</h4>
      <ResponsiveContainer height={400} className="data-vis city-data">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="city"
            name="City"
            type="category"
            angle={-45}
            textAnchor="end"
          />
          <YAxis
            dataKey="number"
            name="Number of Events"
            type="number"
            allowDecimals={false}
          />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            labelFormatter={() => ''}
          />
          <Scatter data={getData()} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
}
