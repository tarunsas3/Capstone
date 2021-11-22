import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BsThreeDots } from "react-icons/bs";
import "./Activity.css";

const data = [
  {
    name: "Mon",
    TotalTime: 4000,
    TimeSpent: 2400,
  },
  {
    name: "Tue",
    TotalTime: 3000,
    TimeSpent: 1398,
  },
  {
    name: "Wed",
    TotalTime: 2000,
    TimeSpent: 9800,
  },
  {
    name: "Thu",
    TotalTime: 2780,
    TimeSpent: 3908,
  },
  {
    name: "Fri",
    TotalTime: 1890,
    TimeSpent: 4800,
  },
  {
    name: "Sat",
    TotalTime: 2390,
    TimeSpent: 3800,
  },
  {
    name: "Sun",
    TotalTime: 3490,
    TimeSpent: 4300,
  },
];

function Activity() {
  return (
    <div className="user__activity">
      <div className="user__activity__info">
        <div>
          <h3>
            User Activity<span>: Time Spent on Projects</span>
          </h3>
        </div>
        <div className="icon">
          <BsThreeDots className="activityIcon" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="TotalTime" stackId="a" fill="#4361ee" />
          <Bar
            radius={[7, 7, 0, 0]}
            dataKey="TimeSpent"
            stackId="a"
            fill="#48bfe3"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;
