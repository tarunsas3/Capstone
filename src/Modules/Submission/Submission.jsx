import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "../../redux/apiCalls";
import "./Submission.css";
import Popup from "../Dashboard/Popup";
import Success from "./Success";

function Submission() {
  const [openPopup, setOpenPopup] = useState(false);
  const [sourceUrl, setCodeUrl] = useState("");
  const [deploymentUrl, setDeployUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    submit(dispatch, { sourceUrl, deploymentUrl, description });
    setTimeout(() => {
      setOpenPopup(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 1000);
  };

  return (
    <div className="submissionWrapper">
      <div class="submissionContainer">
        {/* <div class="brand-titleText">Fullstack e-Commerce Application</div> */}
        <div class="submissionInputContainer">
          <input
            className="submissionInput"
            type="text"
            placeholder="Source Code Url"
            onChange={(e) => setCodeUrl(e.target.value)}
          />
          <input
            className="submissionInput"
            type="text"
            placeholder="Deployment Url"
            onChange={(e) => setDeployUrl(e.target.value)}
          />
          <textarea
            rows="8"
            cols="40"
            className="submissionInput description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="submissionBtn" type="submit" onClick={handleClick}>
            Submit
          </button>
          <Popup
            title="Fullstack e-Commerce Application"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <Success />
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Submission;
