import "../css/Main.css";
import React from "react";
import About from "../components/About";
import Skill from "../components/Skill";
import CollapsibleSection from "../components/CollapsibleSection";
import { getMainSections } from "../services/sectionService";

function Main(props) {
  const sections = getMainSections();
  const sectionContent = {
    about: <About showHeader={false} />,
  };

  return (
    <div className="title" id="main">
      <div className="main font-design">
        <div className="big-main-text main-color">Hey, I'm <span className="secondary-color heavy-weight">Thanusun Thayaparan</span></div>
        <div className="main-color med-main-text">Software Engineer | Backend & Security | Agentic AI</div>
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
      {sections.map((section) => (
        <CollapsibleSection key={section.id} title={section.title}>
          {sectionContent[section.id]}
        </CollapsibleSection>
      ))}
    </div>
  );
}

export default Main;
