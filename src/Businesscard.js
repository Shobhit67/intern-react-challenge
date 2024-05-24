import React from "react";
import "./Businesscard.css";
import profileImage from "../src/image1.jpeg"; 

const Businesscard = () => {
  return (
    <div className="business-card-container">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <h2 className="profile-name">Shobhit Goyal</h2>
      <p className="profile-intro">
        A passionate developer with a knack for building impactful solutions.
        Always eager to learn and grow.
      </p>
      <div className="skill-buttons">
        <button className="skill-button">React</button>
        <button className="skill-button">Tailwind CSS</button>
        <button className="skill-button">JavaScript</button>
      </div>
    </div>
  );
};

export default Businesscard;