import "../css/Projects.css";
import "../css/Main.css";

import React, { useEffect, useState } from "react";
import Project from "../components/Project";
import {
  getFeaturedRepo,
  getFilteredRepos,
  loadRepos as loadReposService,
} from "../services/projectsService";

const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME;
const viewText = "View on GitHub";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const data = await loadReposService(GITHUB_USERNAME);
        if (isMounted) {
          setRepos(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable load GitHub projects right now." + " " + "Error: " + err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredRepos = getFilteredRepos(repos);
  const featuredRepo = getFeaturedRepo(filteredRepos);
  const featuredIds = new Set(featuredRepo ? [featuredRepo.id] : []);
  const remainingRepos = filteredRepos.filter((repo) => !featuredIds.has(repo.id));

  return (
    <div id="projects">
      <div className="main-color header">Projects</div>
      {loading && (
        <div className="tertiary-color">Loading GitHub projects...</div>
      )}
      {!loading && error && <div className="tertiary-color">{error}</div>}
      {!loading && !error && featuredRepo && (
        <div className="featured-projects-box font-design">
          <div className="project-year main-color">
            This week's featured project
          </div>
          <div className="projects">
            <Project repo={featuredRepo} viewText={viewText} />
          </div>
        </div>
      )}
      {!loading && !error && (
        <div className="projects-box font-design">
          <div className="projects">
            {remainingRepos.map((repo) => (
              <Project key={repo.id} repo={repo} viewText={viewText} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
