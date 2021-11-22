import React, { useState } from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Navbar.css";
import Popup from "../Popup";
import Submission from "../../Submission/Submission";

function Navbar() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="navbar">
      <div className="avatar">
        <img
          src="https://avatars.githubusercontent.com/u/60286295?v=4"
          alt=""
        />
        <div className="info">
          <h4 className="title">Tarun Sastry</h4>
          <h6 className="status">Online</h6>
        </div>
      </div>
      <div className="quick">
        <button onClick={() => setOpenPopup(true)}>
          <VscArrowSwap className="svgIcon" />
          Quick Submit
        </button>
      </div>
      <Popup
        title="Fullstack e-Commerce Application"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Submission />
      </Popup>
      <div className="navbar__info">
        <button className="iconsBtn">
          <IoMdNotificationsOutline className="svgIcon" />
        </button>
        <button className="iconsBtn">
          <FiMail className="svgIcon" />
        </button>
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <FaSearch className="svgIcon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
