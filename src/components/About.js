import "../css/About.css";
import "../css/Main.css";

import profilePic from "../static/profile.png";
import React from "react";

function About(params) {
  return (
    <div className="about-section" id="about">
      <img src={profilePic} alt="profile" className="profile-img"></img>
      <div className="main-color header">A little bit about me</div>
      <p className="tertiary-color text">
        I recently graduated at the University of Toronto for Mathematics. During that time, I took interest in two web development fields, front-end and back-end. For both fields, I learned that there are specific tools used to build projects on. And the combination of both is Full-Stack Development.

        As of now, I am looking for opportunities to meet like-minded individuals who share my passion of web development and to start my tech career as a full-stack developer.

        Aside from technology, I love to try new foods and travel to new places that I have not been to before.
      </p>
    </div>
  );
}

export default About;
