import React from "react";
import InformationCard from "./InformationCard";
import Skill from "./Skill";

function Project({ repo, viewText }) {
  function renderSkills(project) {
    if (!project.language) {
      return null;
    }

    return <Skill>{project.language}</Skill>;
  }

  const starCount = repo.stargazers_count ?? 0;
  const languageLabel = repo.language ? ` · ${repo.language}` : "";

  return (
    <InformationCard
      title={repo.name}
      src={repo.owner?.avatar_url}
      alt={`${repo.name} repository`}
      skills={renderSkills(repo)}
      linkViewText={viewText}
      link={repo.html_url}
    >
      <div className="project-meta">
        ★ {starCount}
        {languageLabel}
      </div>
      {repo.description || "No description provided."}
    </InformationCard>
  );
}

export default Project;
