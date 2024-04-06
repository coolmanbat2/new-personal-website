import "../css/Experiences.css";
import "../css/Main.css";

import InformationCard from "./InformationCard.js";

import Skill from "./Skill.js";

import React from "react";

function Experiences(params) {
  function allSkills() {
    return (
      <>
        <Skill>React</Skill>
        <Skill>JavaScript</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
      </>
    )
  }
  
  return (
    <div id="experience">
      <div className="main-color header">Experience</div>
      <div className="experiences">
        <InformationCard
          title="Front-end Developer - Hack The Valley"
          dates="September 2020 - February 2021"
          style={{ paddingLeft: "9vw" }}
          skills={allSkills()}
        >
          <div>
            Reduced query Times by 50% by refactoring the database and
            optimizing query structure.
          </div>
          <div>
            Engineered React Components for the Front-end Team by analyzing the
            product requirements and researching the best solutions in order to
            decrease development time.
          </div>
          <div>
            Improved conversion rate by 30% on Application and Login pages by
            building mobile-responsive pages using Sass and Bootstrap.
          </div>
          <div>
            Created a fast and user-friendly Application and Login page for over
            1000 applicants using HTML, CSS, and JavaScript.
          </div>
        </InformationCard>
      </div>
    </div>
  );
}

export default Experiences;
