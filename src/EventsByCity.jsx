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

  const styling = {
    borderRadius: '7.5px',
    outline: 'none',
    border: '1px solid #30333a',
    backgroundColor: '#1b1d24',
  };

  return (
    <div className="data-vis city-data">
      <h4 className="data-title">Cities</h4>
      <ResponsiveContainer height={400}>
        <ScatterChart margin={{ top: 16, left: -40 }}>
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
            contentStyle={styling}
            itemStyle={{ color: '#828d99' }}
          />
          <Scatter data={getData()} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
