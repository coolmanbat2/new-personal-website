import React from "react";
import "../css/InformationCard.css";
import "../css/Main.css";

function InformationCard(props) {
  return (
    <div className="flex info-card" style={props.style}>
      <img className="image" src={props.src} alt="information" />
      <div className="main-color flex col-direction">
        <div className="info-title weight">{props.title}</div>
        <div className="date-title tertiary-color">{props.dates}</div>
        <div className="tertiary-color info">{props.children}</div>
        <a className="link-desc tertiary-color" href={props.link}>
         {props.linkViewText}
        </a>
        <div className="flex top-skills">{props.skills}</div>
      </div>
    </div>
  );
}

export default InformationCard;
