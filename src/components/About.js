import "../css/About.css";
import "../css/Main.css";

import React from "react";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="main-color header">About</div>
      <div className="tertiary-color">
        <p>
          University of Toronto Math graduate focused on full-stack web
          development and product impact.
        </p>
        <p>
          I care about clean UX, reliable systems, and shipping improvements
          that make customers happier.
        </p>
      </div>
    </div>
  );
}

export default About;
