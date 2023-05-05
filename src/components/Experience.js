import React from "react";

function Experience(props) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          style={{ height: "21vw" }}
          src={props.imagePath}
          alt={props.imageName}
        ></img>
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ paddingLeft: "7.3vw", fontWeight: "600" }}>
          <div style={{ fontSize: "2.2vw" }}>{props.job}</div>
          <div style={{ fontSize: "1.5vw" }}>{props.dates}</div>
        </div>
        <ul
          style={{
            paddingRight: "9vw",
            paddingLeft: "4.2vw",
            fontSize: "1.4vw",
          }}
        >
          {props.children}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
