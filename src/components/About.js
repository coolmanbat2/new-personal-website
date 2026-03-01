import "../css/About.css";
import "../css/Main.css";

import React from "react";

function About({ showHeader = true }) {
  return (
    <div className="about-section" id="about">
      {showHeader ? <div className="main-color header">About</div> : null}
      <div className="tertiary-color">
        <p>
          I am a Software Engineer driven by the logic of Mathematics and the pursuit
          of Engineering Excellence. Rather than chasing every new framework, I focus
          on the 'How' of software: I’m obsessed with high-integrity logging policies,
          robust change management, and the art of the perfect atomic commit.
        </p>
        <p>
          I don't just 'learn new things'; I integrate them into my DNA. Whether it's
          mastering distributed tracing or perfecting a CI/CD pipeline, I believe that
          the difference between a project and a product lies in the discipline of the
          process. In the 2026 landscape, I leverage Agentic AI as a force multiplier—
          using agents to automate the mundane so I can focus on the mission-critical:
          security, scalability, and system reliability.
        </p>
        <p>
          Outside the IDE, I apply that same curiosity to the real world. I’m a global
          palate explorer—I’ve never met a cuisine I wouldn't try, and I’m always
          looking for my next favorite travel destination. On a quiet Saturday, you’ll
          likely find me diving into a complex board game or a high-stakes video game—
          I’ve always loved systems, whether they’re built in Python or printed on
          cardstock.
        </p>
      </div>
    </div>
  );
}

export default About;
