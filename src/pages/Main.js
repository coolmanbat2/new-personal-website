import "../css/Main.css";
import React from "react";
import Skill from "../components/Skill";
import About from "../components/About";
import Image from "../components/Image";

function Main() {
  return (
    <div className="title" id="main">
      <div className="main font-design">
        <div className="big-main-text main-color">
          Hey, I'm <span className="secondary-color heavy-weight">Thanusun Thayaparan</span>
        </div>
        <div className="main-color med-main-text">
          Backend Engineering | Production Reliability | Applied AI Systems
        </div>
        <div className="core-skills">
          <div className="core-skills-title secondary-color">Core Skills</div>
          <div className="core-skills-list">
            <Skill>Java (Spring Boot)</Skill>
            <Skill>Python</Skill>
            <Skill>SQL (MySQL)</Skill>
            <Skill>REST APIs</Skill>
            <Skill>Microservices</Skill>
            <Skill>Docker</Skill>
            <Skill>Linux</Skill>
            <Skill>Agentic AI / RAG</Skill>
            <Skill>Ollama</Skill>
            <Skill>Dynatrace</Skill>
            <Skill>Splunk</Skill>
            <Skill>Git</Skill>
          </div>
        </div>
        <Image />
        <About />
      </div>
    </div>
  );
}

export default Main;
