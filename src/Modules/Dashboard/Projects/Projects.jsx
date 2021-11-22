import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="YourProjects">
      Pending Projects
      <div className="Project">
        <div className="Avatar">
          <img
            src="https://avatars.githubusercontent.com/u/60286295?v=4"
            alt=""
          />
        </div>
        <div className="Detail">
          <div className="Title">Fullstack e-Commerce Application</div>
          <div className="SubTitle">
            ReactJS, Express, MongoDB, NodeJS
          </div>
          <div className="SubTitleBold">1 day remaining</div>
        </div>
      </div>
      <div className="Project">
        <div className="Avatar">
          <img
            src="https://avatars.githubusercontent.com/u/60286295?v=4"
            alt=""
          />
        </div>
        <div className="Detail">
          <div className="Title">MERN Stack Chat Application</div>
          <div className="SubTitle">
            ReactJS, Express, MongoDB, NodeJS
          </div>
          <div className="SubTitleBold">4 days remaining</div>
        </div>
      </div>
      {/* <div className="Project">
        <div className="Avatar">
          <img
            src="https://avatars.githubusercontent.com/u/60286295?v=4"
            alt=""
          />
        </div>
        <div className="Detail">
          <div className="Title">
            Task : To Design a Fullstack Blog Application
          </div>
          <div className="SubTitle">
            Technologies : ReactJS, NextJS, ChakraUI, Tailwind CSS, Express,
            MongoDB, NodeJS
          </div>
          <div className="SubTitleBold">6 day remaining</div>
        </div>
      </div> */}
      <div className="AllProjects">See all projects</div>
    </div>
  );
}

export default Projects;
