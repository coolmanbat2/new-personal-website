import "../css/Card.css";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Card(props) {
  function picButton() {
    return <img className="card pic-button" src={props.src} alt={props.alt} />;
  }

  return (
    <Popup trigger={picButton} position="right center" modal nested contentStyle={{width: "80%"}}>
      <div className="card-project">
        <div className="card-titles">
          <div style={{ width: "16em" }}>
            <h2 style={{ width: "24vw" }}>{props.title}</h2>
            <h5>{props.organization}</h5>
          </div>
          <hr />
          <div className="card-titles">
            <h6 className="languages">{props.languages}</h6>
          </div>
        </div>

        <ul>{props.children}</ul>
      </div>
    </Popup>
  );
}

export default Card;
