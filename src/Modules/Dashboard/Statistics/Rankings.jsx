import React from "react";
import Badge from "./Badge";
import "./Rankings.css";

function Info() {
  return (
    <div className="InfoCard">
      <div className="Card">
        <div className="CardContent">
          <div className="Row">
            <div className="Digit">98</div>
            <div className="InfoContainer">
              <div className="Title">Rank</div>
              <div className="SubTitle">In top 20%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Card">
        <div className="CardContent">
          <div className="Row">
            <div className="Digit">32</div>
            <div className="InfoContainer">
              <div className="Title">Projects</div>
              <div className="SubTitle">8 this month</div>
            </div>
          </div>
          <div className="Row" justify>
            <Badge content="Full Stack Development" glow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
