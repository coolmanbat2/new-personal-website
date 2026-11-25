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
        <Skill>MySQL</Skill>
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
            Engineered and deployed production fixes for recurring defects in
            an enterprise credit-application platform (Java/Spring Boot,
            MySQL), improving daily workflow stability for internal sales
            teams.
          </div>
          <div>
            Built an AI-assisted knowledge retrieval workflow indexing
            Confluence runbooks, accelerating root-cause lookup and operational
            triage during on-call rotations.
          </div>
          <div>
            Led production incident investigation and tracing using Splunk and
            Dynatrace across enterprise systems serving 50,000+ employees,
            coordinating root-cause analysis and escalation.
          </div>
          <div>
            Governed production release readiness across 10+ monthly
            deployments, validating change-management compliance, rollback
            procedures, and operational risk controls.
          </div>
          <div>
            Earned VP-level recognition for designing initiatives adopted by
            TD&apos;s enterprise-wide cybersecurity volunteer program, creating
            technical transition pathways for internal employees.
          </div>
        </InformationCard>
      </div>
      <Contact />
    </div>
  );
}

export default Experiences;
