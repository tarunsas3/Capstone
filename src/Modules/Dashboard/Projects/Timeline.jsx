import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "./Timeline.css";

function Timeline() {
  const data = [
    {
      day: "Sun",
      date: "11/21 7:11pm",
      name: "Lyrix Match",
      status: "Submitted",
    },
    {
      day: "Fri",
      date: "11/17 1:11am",
      name: "Know MARS",
      status: "Submitted",
    },
    {
      day: "Mon",
      date: "11/13 3:07pm",
      name: "Currency Universe",
      status: "Submitted",
    },
  ];
  return (
    <div className="activity">
      <div className="activity__info">
        <h4>Timeline</h4>
        <BsThreeDots />
      </div>
      <div className="activity__container">
        {data.map((transaction) => {
          return (
            <div className="transaction">
              <div className="timestamp">
                <h5>{transaction.day}</h5>
                <h6>{transaction.date}</h6>
              </div>
              <div className="dot"></div>
              <div className="details">
                <h5>{transaction.name}</h5>
                <h5>{transaction.status}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
