import "../css/Projects.css";
import "../css/Main.css";

import houseparty from "../static/houseparty.jpg";
import netcon from "../static/netcon.jpg";
import orderup from "../static/orderup.jpg";
import Skill from "./Skill";
import React from "react";
import InformationCard from "./InformationCard";


function Projects(params) {
function skillsOne() {
  return (
    <>
      <Skill>React</Skill> 
      <Skill>Django</Skill> 
      <Skill>PostgreSQL</Skill> 
    </>
  )
}

function skillsTwo() {
  return (
      <>
        <Skill>Docker</Skill>
        <Skill>React</Skill>
        <Skill>Spring Boot</Skill>
        <Skill>MySQL</Skill>
      </>
  )
}

function skillsThree() {
  return (
    <>
      <Skill>Spring Boot</Skill> 
      <Skill>Docker</Skill> 
      <Skill>MySQL</Skill> 
    </>
  )
}
  return (
    <div id="projects">
      <div className="main-color header">Projects</div>
      <div className="projects">
        <InformationCard title="Group Music Controller" skills={skillsOne()}>
          A web app that allows users to create rooms and invite other users to listen to the same music that the original creator had made.
        </InformationCard>
        <InformationCard title="URL Shortener" skills={skillsTwo()}>
          This project is designed to help users to simplify a long link into a shortened version of the link, and to be shared with others.
        </InformationCard>
        <InformationCard title="Video Game Discovery API" skills={skillsThree()}>
          This project is designed to help users to simplify a long link into a shortened version of the link, and to be shared with others.
        </InformationCard>
      </div>
    </div>
  );
}

export default Projects;
