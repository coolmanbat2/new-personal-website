import "../css/Experiences.css";
import "../css/Main.css";
import Experience from "../components/Experience.js";

import hackthevalley from "../static/htv.jpg";
import React from "react";

function Experiences(params) {
  return (
    <div id="experience">
      <div className="main-color header">Experience</div>
      <div className="experiences">
        <Experience
          job="Front-end Developer - Hack The Valley"
          dates="September 2020 - February 2021"
          style={{paddingLeft: "9vw"}}
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
        </Experience>
      </div>
    </div>
  );
}

export default Experiences;
