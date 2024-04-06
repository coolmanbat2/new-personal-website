import React from "react";
import "../css/InformationCard.css";
import "../css/Main.css";

function InformationCard(props) {
  return (
      <div className="subtitles" style={props.style}>
        <div className="main-color weight">
          <div className="info-title">{props.title}</div>
          <div className="date-title">{props.dates}</div>
        </div>
        <div className="tertiary-color info">{props.children}</div>
        <div className="flex top-skills">
          {props.skills}
        </div>
      </div>
  );
}

export default InformationCard;
