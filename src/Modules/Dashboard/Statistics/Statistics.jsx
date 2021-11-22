import React from "react";
import { IoStatsChart } from "react-icons/io5";
import "./Statistics.css";

function Earnings() {
  return (
    <div className="EarningsCard">
      <div className="CardContent">
        <div className="Chart">
          <IoStatsChart className="Icon"/>
        </div>
        <div className="EarningsText">Earnings</div>
        <div className="Earning">$7,890</div>
        <div className="EarningsIncrease">+ 10% since last month</div>
      </div>
    </div>
  );
}

export default Earnings;
