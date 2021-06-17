import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function EventGenre({ events }) {
  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.split(/\.|,|-|JS|!| /).includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  };

  const colors = ['#006CCB', '#c52f57', '#CC9520', '#CC6634', '#9A74AD'];

  const styling = {
    borderRadius: '7.5px',
    outline: 'none',
    border: '1px solid #30333a',
    backgroundColor: '#1b1d24',
  };

  return (
    <div className="data-vis genre-data">
      <h4 className="data-title">Technologies</h4>
      <ResponsiveContainer height={300}>
        <PieChart>
          <h4>Technologies</h4>
          <Pie
            isAnimationActive={false}
            data={getData()}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            innerRadius={70}
            stroke="none"
            fill="#8884d8"
            dataKey="value"
          >
            {getData().map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend align="center" height={36} />
          <Tooltip contentStyle={styling} itemStyle={{ color: '#828d99' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
