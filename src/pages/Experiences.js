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
          <ul className="experience-bullets">
            <li>
              Engineered and deployed production fixes for recurring defects in
              an enterprise credit-application platform (Java/Spring Boot,
              MySQL), improving daily workflow stability for internal sales
              teams.
            </li>
            <li>
              Built an AI-assisted knowledge retrieval workflow indexing
              Confluence runbooks, accelerating root-cause lookup and operational
              triage during on-call rotations.
            </li>
            <li>
              Led production incident investigation and tracing using Splunk and
              Dynatrace across enterprise systems serving 50,000+ employees,
              coordinating root-cause analysis and escalation.
            </li>
            <li>
              Governed production release readiness across 10+ monthly
              deployments, validating change-management compliance, rollback
              procedures, and operational risk controls.
            </li>
            <li>
              Earned VP-level recognition for designing initiatives adopted by
              TD&apos;s enterprise-wide cybersecurity volunteer program, creating
              technical transition pathways for internal employees.
            </li>
          </ul>
        </InformationCard>
        <InformationCard
          title="Personal Banking Associate - TD Bank"
          dates="January 2024 - December 2024"
          src={tdLogo}
          skills={
            <>
              <Skill>Salesforce</Skill>
              <Skill>Financial Services</Skill>
              <Skill>Client Service</Skill>
            </>
          }
        >
          <ul className="experience-bullets">
            <li>
              Supported frontline personal-banking and credit-product workflows,
              using financial-software applications to facilitate transactions
              and client follow-up.
            </li>
            <li>
              Managed 200+ Salesforce leads and applied operational procedures to
              support organized branch sales workflows and compliant client
              service.
            </li>
          </ul>
        </InformationCard>
        <InformationCard
          title="Customer Experience Associate - TD Bank"
          dates="November 2022 - December 2023"
          src={tdLogo}
          skills={
            <>
              <Skill>Client Service</Skill>
              <Skill>Financial Products</Skill>
            </>
          }
        >
          <ul className="experience-bullets">
            <li>
              Supported frontline banking clients by explaining financial and
              investment products, processing transactions with 97% accuracy, and
              completing routine service requests using TD internal tools.
            </li>
            <li>
              Resolved escalated customer issues involving cheque negotiation,
              interest calculations, and account usage while maintaining an
              average LEI score of 80%.
            </li>
          </ul>
        </InformationCard>
      </div>
      <Contact />
    </div>
  );
}

export default Experiences;
