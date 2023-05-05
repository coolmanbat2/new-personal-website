import "../css/Menubar.css";
import React from "react";

function Menubar(params) {
  return (
    <div className="menubar">
      <div className="logo">
        <div>TT</div>
      </div>
      <div className="web-info">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Menubar;
