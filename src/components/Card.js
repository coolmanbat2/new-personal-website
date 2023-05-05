import "../css/Card.css";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Card(props) {
  function picButton() {
    return <img className="card" src={props.src} alt={props.alt} />;
  }

  return (
    <Popup trigger={picButton} position="right center" modal nested>
      <div className="card-project">
        <div style={{ lineHeight: "0.5vw", width: "16em" }}>
          <h2 style={{ width: "24vw" }}>{props.title}</h2>
          <h4>{props.organization}</h4>
        </div>
        <hr style={{ marginLeft: "3%" }} />
        <h4 style={{ textAlign: "left", width: "66%" }}>{props.languages}</h4>
      </div>
      <ul>{props.children}</ul>
    </Popup>
  );
}

export default Card;
