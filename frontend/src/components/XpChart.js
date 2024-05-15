import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const XpChart = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height='90%' left='10'>
      <LineChart  data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis fontSize="10px" dataKey="name" />
        <YAxis fontSize="10px" />
        <Tooltip />
        <Line type="monotone" dataKey="xp" stroke="#B68A36" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default XpChart;
