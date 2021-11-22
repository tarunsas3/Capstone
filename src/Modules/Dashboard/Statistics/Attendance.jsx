import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import "./Attendance.css";

const data = [
  {
    ViewTime: 1000,
  },
  {
    ViewTime: 1200,
  },
  {
    ViewTime: 1500,
  },
  {
    ViewTime: 1780,
  },
  {
    ViewTime: 1990,
  },
  {
    ViewTime: 2190,
  },
  {
    ViewTime: 2490,
  },
  {
    ViewTime: 2200,
  },
  {
    ViewTime: 2300,
  },
  {
    ViewTime: 2500,
  },
  {
    ViewTime: 2380,
  },
  {
    ViewTime: 2290,
  },
  {
    ViewTime: 2190,
  },
  {
    ViewTime: 1990,
  },
  {
    ViewTime: 2200,
  },
  {
    ViewTime: 2400,
  },
  {
    ViewTime: 2200,
  },
  {
    ViewTime: 2580,
  },
  {
    ViewTime: 2790,
  },
  {
    ViewTime: 3090,
  },
  {
    ViewTime: 3290,
  },
  {
    ViewTime: 3300,
  },
  {
    ViewTime: 3400,
  },
  {
    ViewTime: 3500,
  },
  {
    ViewTime: 3780,
  },
  {
    ViewTime: 3390,
  },
  {
    ViewTime: 3190,
  },
  {
    ViewTime: 2490,
  },
];

function Attendance() {
  return (
    <div className="top__Card">
      <h3>
        Attendance<span>: Nov 2021</span>
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ViewTime"
            stroke="#8884d8"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorView)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Attendance;
