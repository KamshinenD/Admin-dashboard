import "./chart.scss";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// npm install recharts 
const Chart = ({ aspect, title }) => {
  const data = [
    { name: 'January', Total: 1200 },
    { name: 'February', Total: 2100 },
    { name: 'March', Total: 800 },
    { name: 'April', Total: 1600 },
    { name: 'May', Total: 900 },
    { name: 'June', Total: 700 },
    { name: 'July', Total: 1000 },
  ];
  return (
    <div className="chart">
      <div className="chartTitle" >{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        {/* note that aspect 2/1 means the whenever width is 2, height should be 1(height should be half f withd) */}
        <AreaChart width={500} height={400} data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}>
          <defs>
            <linearGradient id='total' xl='0' y1='0' x2='0' y2='1' >
              <stop offset='5%' stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset='95%' stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart