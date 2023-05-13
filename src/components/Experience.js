import React from "react";
import "../css/Experience.css";

function Experience(props) {
  return (
    <div className="experience">
      <div>
        <img
          className="img-exp"
          src={props.imagePath}
          alt={props.imageName}
        ></img>
      </div>
      <div className="subtitles" style={props.style}>
        <div className="weight">
          <div className="job-title">{props.job}</div>
          <div className="date-title">{props.dates}</div>
        </div>
        <div className="info">{props.children}</div>
      </div>
    </div>
  );
}

export default Experience;
