import "../css/Projects.css";
import "../css/Main.css";

import React from "react";
import Project from "../components/Project";
import projectData from "../data/projects.json";
import { getFilteredRepos } from "../services/projectsService";

const viewText = "View on GitHub";

function Projects() {
  const featuredProjects = projectData.featured || [];
  const additionalRepos = getFilteredRepos(projectData.repos || []);
  const featuredKeys = new Set(
    featuredProjects.flatMap((project) =>
      [project.githubUrl, project.html_url, project.name]
        .filter(Boolean)
        .map((value) => value.toLowerCase())
    )
  );
  const remainingRepos = additionalRepos.filter((repo) => {
    const key = (repo.html_url || repo.name || "").toLowerCase();
    return !featuredKeys.has(key);
  });

  return (
    <div id="projects">
      <div className="main-color header">Projects</div>
      <div className="featured-projects-box font-design">
        <div className="project-year main-color">Featured systems</div>
        <div className="projects">
          {featuredProjects.map((project) => (
            <Project key={project.id} project={project} viewText={viewText} />
          ))}
        </div>
      </div>
      {remainingRepos.length > 0 && (
        <div className="projects-box font-design">
          <div className="project-year main-color">Additional public projects</div>
          <div className="projects">
            {remainingRepos.map((repo) => (
              <Project key={repo.id || repo.name} project={repo} viewText={viewText} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
