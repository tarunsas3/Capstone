import React from "react";
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import "./Sidebar.css";

export default function Sidebar() {
  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.localStorage.clear();
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="sidebar">
      <div className="brand">
        <h2>
          ZEN<span>LEARN</span>
        </h2>
      </div>
      <ul className="links">
        <li>
          <a href="#">
            <SiGoogleanalytics />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillAppstore />
            Courses
          </a>
        </li>
        <li>
          <a href="#">
            <BiNews />
            Updates
          </a>
        </li>
        <li>
          <a href="#">
            <BiRocket />
            Challenges
          </a>
        </li>
        <li>
          <a href="#">
            <BsCashStack />
            Queries
          </a>
        </li>
        <li>
          <a href="#">
            <FaWallet />
            Projects
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillSetting />
            Settings
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick}>
            <MdOutlineLogout />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
