import "../css/Projects.css";
import "../css/Main.css";

import React, { useEffect, useState } from "react";
import Project from "./Project";
import {
  fetchPublicRepos,
  getSortedYears,
  groupReposByYear,
} from "../services/projectsService";

const GITHUB_USERNAME = "coolmanbat2";
const viewText = "View on GitHub";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadRepos() {
      try {
        const data = await fetchPublicRepos(GITHUB_USERNAME);
        if (isMounted) {
          setRepos(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable to load GitHub projects right now.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredRepos = repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
    .slice(0, 5);

  const featuredRepos = filteredRepos.slice(0, 2);
  const featuredIds = new Set(featuredRepos.map((repo) => repo.id));
  const remainingRepos = filteredRepos.filter((repo) => !featuredIds.has(repo.id));

  const groupedRepos = groupReposByYear(remainingRepos);
  const sortedYears = getSortedYears(groupedRepos);

  return (
    <div id="projects">
      <div className="main-color header">Projects</div>
      <div className="tertiary-color projects-note">
        Top 5 public repos (non-fork, non-archived), sorted by stars.
      </div>
      {loading && (
        <div className="tertiary-color">Loading GitHub projects...</div>
      )}
      {!loading && error && <div className="tertiary-color">{error}</div>}
      {!loading && !error && featuredRepos.length > 0 && (
        <div className="featured-projects-box font-design">
          <div className="project-year main-color">Featured Projects</div>
          <div className="projects">
            {featuredRepos.map((repo) => (
              <Project key={repo.id} repo={repo} viewText={viewText} />
            ))}
          </div>
        </div>
      )}
      {!loading && !error && (
        <div className="projects-box font-design">
          {sortedYears.map((year) => (
            <div key={year} className="project-year-group">
              <div className="project-year main-color">{year}</div>
              <div className="projects">
                {groupedRepos[year].map((repo) => (
                  <Project key={repo.id} repo={repo} viewText={viewText} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
