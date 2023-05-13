import "../css/About.css";

import profilePic from "../static/profile.png";
import React from "react";

function About(params) {
  return (
    <div className="about" id="about">
      <div className="about-section">
        <div className="about-header">
          <div className="header">About me</div>
          <hr className="line-break" />
          <p className="text">
            I am a recent graduate at the University of Toronto for Mathematics.
            During my time at university, I took an interest in building
            Full-Stack personal projects such as: Group Music Controller,
            OrderUP, and NetCon. During my spare time, I like to explore new
            places and eat new foods from different restaurants.
          </p>
        </div>
        <img src={profilePic} alt="profile" className="profile-img"></img>
      </div>
    </div>
  );
}

export default About;
