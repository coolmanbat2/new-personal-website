import "../css/Experiences.css";
import "../css/Main.css";
import hackthevalley from "../static/htv.jpg";

import InformationCard from "../components/InformationCard.js";

import Skill from "../components/Skill.js";
import Contact from "../components/Contact.js";

import React from "react";
import tdLogo from "../static/td-logo.png";
import tjxLogo from "../static/tjx-canada-logo.png";

function Experiences() {
  function softwareEngineerSkills() {
    return (
      <>
        <Skill>Java</Skill>
        <Skill>PostgreSQL</Skill>
        <Skill>REST APIs</Skill>
        <Skill>Git</Skill>
        <Skill>Jira</Skill>
      </>
    );
  }

  function bankingAssociateSkills() {
    return (
      <>
        <Skill>Agile</Skill>
        <Skill>Salesforce</Skill>
        <Skill>Product Demos</Skill>
        <Skill>Presentation</Skill>
      </>
    );
  }

  function customerExperienceSkills() {
    return (
      <>
        <Skill>Customer Service</Skill>
        <Skill>Sales</Skill>
        <Skill>Microsoft Office</Skill>
      </>
    );
  }

  function salesAssociateSkills() {
    return (
      <>
        <Skill>Customer Service</Skill>
        <Skill>Sales</Skill>
        <Skill>Merchandising</Skill>
      </>
    );
  }

  function hackTheValleySkills() {
    return (
      <>
        <Skill>React</Skill>
        <Skill>JavaScript</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>Sass</Skill>
        <Skill>Bootstrap</Skill>
        <Skill>Redis</Skill>
      </>
    );
  }

  return (
    <div id="experience">
      <div className="main-color header">Experience</div>
      <div className="experiences">
        <InformationCard
          title="Software Engineer - TD"
          dates="Jan 2025 - Present"
          src={tdLogo}
          skills={softwareEngineerSkills()}
        >
          <div>
            Collaborated with cross-functional teams to design and implement
            software solutions, improving project delivery timelines by 10%.
          </div>
          <div>
            Resolved software defects using Java and PostgreSQL, enhancing user
            accessibility through effective remediation strategies.
          </div>
        </InformationCard>
        <InformationCard
          title="Personal Banking Associate - TD"
          dates="Jan 2024 - Dec 2024"
          src={tdLogo}
          skills={bankingAssociateSkills()}
        >
          <div>
            Implemented Agile project management practices to improve
            collaboration and delivery efficiency by 20%.
          </div>
          <div>
            Managed 200+ leads in Salesforce CRM, optimizing organization and
            client follow-ups.
          </div>
        </InformationCard>
        <InformationCard
          title="Customer Experience Associate - TD"
          dates="Nov 2022 - Dec 2023"
          src={tdLogo}
          skills={customerExperienceSkills()}
        >
          <div>
            Achieved an average LEI score of 80% by providing clear and
            effective customer support.
          </div>
          <div>
            Increased daily banking sales by 261% through tailored product
            recommendations.
          </div>
        </InformationCard>
        <InformationCard
          title="Sales Associate - Winners (TJX Canada)"
          dates="Aug 2017 - Oct 2022"
          src={tjxLogo}
          skills={salesAssociateSkills()}
        >
          <div>
            Processed 20+ customer transactions per shift while maintaining a
            95% accuracy rate.
          </div>
          <div>
            Assisted 70+ customers daily and exceeded sales goals by 20% through
            product guidance.
          </div>
        </InformationCard>
        <InformationCard
          title="Frontend Developer - Hack the Valley"
          dates="September 2020 - February 2021"
          src={hackthevalley}
          skills={hackTheValleySkills()}
        >
          <div>
            Reduced query times by 50% by refactoring the database with Redis
            and optimizing query structure.
          </div>
          <div>
            Engineered React Components for the Front-end Team by analyzing the
            product requirements and researching the best solutions in order to
            decrease development time.
          </div>
        </InformationCard>
      </div>
      <Contact/>
    </div>
  );
}

export default Experiences;
