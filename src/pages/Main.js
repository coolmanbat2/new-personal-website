import "../css/Main.css";
import React from "react";
import About from "../components/About";
import Skill from "../components/Skill";

function Main(props) {
  return (
    <div className="title" id="main">
      <div className="main font-design">
        <div className="big-main-text main-color">Hey, I'm <span className="secondary-color heavy-weight">Thanusun Thayaparan</span></div>
        <div className="main-color med-main-text">I build Full Stack Applications with <span className="secondary-color">React</span>, <span className="secondary-color">Django</span>, and <span className="secondary-color">SQLite</span></div>
        <div className="sub-small-main-text tertiary-color">I like to travel and eat at new restaurants</div>
        <div className="summary main-color">
          Full-stack developer with fintech and customer-facing experience.
          I build reliable web apps, improve UX, and ship features that move
          business metrics.
        </div>
        <div className="core-skills">
          <div className="core-skills-title secondary-color">Core Skills</div>
          <div className="core-skills-list">
            <Skill>React</Skill>
            <Skill>JavaScript</Skill>
            <Skill>Java</Skill>
            <Skill>PostgreSQL</Skill>
            <Skill>REST APIs</Skill>
            <Skill>Git</Skill>
          </div>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default Main;
