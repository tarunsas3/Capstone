import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./Main.css";
import Navbar from "./Navbar/Navbar";
import Statistics from "./Statistics/Statistics";
import Rankings from "./Statistics/Rankings";
import Projects from "./Projects/Projects";
import Activity from "./Statistics/Activity";
import Timeline from "./Projects/Timeline";
import Pies from "./Statistics/Pies";
import Attendance from "./Statistics/Attendance";

function Main() {
  return ( 
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="innerContainer">
          <Statistics />
          <Rankings />
          <div className="metrics">
            <Pies />
          </div>
          <div className="projects">
            <Projects />
          </div>
        </div>
        <div className="lowerContainer">
          <div className="activity">
            <Activity />
          </div>
          <div className="timeline">
            <Timeline />
          </div>
          <div className="attendance">
            <Attendance />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
