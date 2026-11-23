import "../css/About.css";
import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="main-color header">About</div>
      <div className="tertiary-color about-copy">
        <p>
          I&apos;m a software engineer at TD Bank focused on production
          reliability, workflow automation, and practical AI tooling. I develop
          fixes for internal banking applications, investigate incidents
          affecting systems used by more than 50,000 employees, and configure
          AI-assisted knowledge workflows that help teams retrieve operational
          information more effectively.
        </p>
        <p>
          My technical work includes Java and Spring Boot, Python, Docker,
          Linux, SQL, Git, and observability tools. With a mathematics
          background from the University of Toronto, I approach engineering
          problems analytically and focus on building reliable systems,
          improving team workflows, and applying AI where it provides practical
          value. Outside of work, I enjoy traveling, exploring new places and
          opportunities, and experiencing cuisines from different cultures.
          Most of all, I love learning.
        </p>
      </div>
    </section>
  );
}

export default About;
