import "../css/Experiences.css";
import "../css/Main.css";

import InformationCard from "../components/InformationCard.js";
import Skill from "../components/Skill.js";
import Contact from "../components/Contact.js";
import React from "react";
import tdLogo from "../static/td-logo.png";

function Experiences() {
  function softwareEngineerSkills() {
    return (
      <>
        <Skill>Java (Spring Boot)</Skill>
        <Skill>Python</Skill>
        <Skill>Docker</Skill>
        <Skill>Linux</Skill>
        <Skill>Dynatrace</Skill>
        <Skill>Splunk</Skill>
        <Skill>Jira</Skill>
        <Skill>Confluence</Skill>
      </>
    );
  }

  return (
    <div id="experience">
      <div className="main-color header">Experience</div>
      <div className="experiences">
        <InformationCard
          title="Software Engineer - TD Bank"
          dates="January 2025 - Present"
          src={tdLogo}
          skills={softwareEngineerSkills()}
        >
          <div>
            Developed production fixes for recurring defects in an internal
            credit-application tool used by sales employees, supporting reliable
            day-to-day workflows.
          </div>
          <div>
            Configured AI-assisted knowledge workflows using Confluence content
            to support incident handling and make relevant operational
            information easier to retrieve.
          </div>
          <div>
            Investigated production incidents during on-call for systems used by
            more than 50,000 employees, tracing issues and supporting incident
            response and escalation.
          </div>
          <div>
            Reviewed more than 10 changes per month for compliance with
            change-management procedures and audit requirements.
          </div>
          <div>
            Received VP-level recognition for ideas adopted by TD&apos;s
            enterprise-wide cybersecurity volunteer program, which helps
            employees from other departments transition into cybersecurity.
          </div>
          <div>
            Participated in off-site training programs and mentorship
            opportunities to develop software-engineering skills and broaden
            technical practice.
          </div>
        </InformationCard>
      </div>
      <Contact />
    </div>
  );
}

export default Experiences;
