import "../css/Main.css";
import React from "react";
import Projects from "./Projects";

function Main(props) {
  return (
    <div className="title" id="main">
      <div className="main font-design">
        <div className="big-main-text main-color">Hey, I'm <span className="secondary-color">Thanusun Thayaparan</span></div>
        <div className="main-color med-main-text">I build Full Stack Applications with <span className="secondary-color">React</span>, <span className="secondary-color">Django</span>, and <span className="secondary-color">SQLite</span></div>
        <div className="sub-small-main-text tertiary-color">I like to travel and eat at new restaurants</div>
      </div>
    </div>
  );
}

export default Main;
