import React from "react";
import Skill from "./Skill";
import "../css/Experience.css";
import "../css/Main.css";

function Experience(props) {
  return (
    <div className="experience">
      <div className="subtitles" style={props.style}>
        <div className="main-color weight">
          <div className="job-title">{props.job}</div>
          <div className="date-title">{props.dates}</div>
        </div>
        <div className="tertiary-color info">{props.children}</div>
        <div className="top-skills">
          <Skill>Hej </Skill>
        </div>
      </div>
    </div>
  );
}

export default Experience;
