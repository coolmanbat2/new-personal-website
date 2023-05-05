import "../css/Experiences.css";
import Experience from "../components/Experience.js";

import preemptorAi from "../static/preemptorai.jpeg";
import hackthevalley from "../static/htv.jpeg";
import React from "react";

function Experiences(params) {
  return (
    <div id="experience">
      <div className="header">Experience</div>
      <hr className="line-break" />
      <div className="experiences">
        <Experience
          imagePath={preemptorAi}
          imageName="preemptorai"
          job="Software Engineer - PreemptorAI"
          dates="December 2022 - March 2023"
        >
          <ul>
            Reduced the development time of a drive page by 80% by creating a
            RESTful API using Django REST Framework, making API calls using
            Axios, and using React to create a more dynamic user interface.
          </ul>
          <ul>
            Built a backend API that makes database queries in less than two
            weeks by working with five software engineers.
          </ul>
          <ul>
            Led a project to build landing page designs to improve mobile
            conversion by 10%. Used HTML, CSS, Javascript, and Photoshop to
            create a working landing page prototype and present to the CTO for
            approval.
          </ul>
        </Experience>
        <Experience
          imagePath={hackthevalley}
          imageName="hackthevalley"
          job="Front-end Developer - Hack The Valley"
          dates="September 2020 - February 2021"
        >
          <ul>
            Reduced query Times by 50% by refactoring the database and
            optimizing query structure.
          </ul>
          <ul>
            Engineered React Components for the Front-end Team by analyzing the
            product requirements and researching the best solutions in order to
            decrease development time.
          </ul>
          <ul>
            Improved conversion rate by 30% on Application and Login pages by
            building mobile-responsive pages using Sass and Bootstrap.
          </ul>
          <ul>
            Created a fast and user-friendly Application and Login page for over
            1000 applicants using HTML, CSS, and JavaScript.
          </ul>
        </Experience>
      </div>
    </div>
  );
}

export default Experiences;
