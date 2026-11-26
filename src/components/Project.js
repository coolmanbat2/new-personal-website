import React from "react";
import InformationCard from "./InformationCard";
import Skill from "./Skill";

function Project({ project, viewText }) {
  const title = project.title || project.name;
  const description = project.description || "";
  const highlights = project.highlights || [];
  const tags = project.tags || (project.language ? [project.language] : []);
  const link = project.githubUrl || project.html_url;

  return (
    <InformationCard
      title={title}
      linkViewText={link ? viewText : ""}
      link={link}
      skills={
        tags.length > 0 ? (
          <>
            {tags.map((tag) => (
              <Skill key={tag}>{tag}</Skill>
            ))}
          </>
        ) : null
      }
    >
      <div>{description}</div>
      {highlights.length > 0 && (
        <ul className="project-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      {project.stargazers_count > 0 && (
        <div className="project-meta">★ {project.stargazers_count}</div>
      )}
    </InformationCard>
  );
}

export default Project;
