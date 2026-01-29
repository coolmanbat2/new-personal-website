import { fetchUserRepos } from "./githubClient";

// Service for project-related data.

export async function loadRepos(username) {
  return fetchUserRepos(username);
}

// This filters out forked and archived repositories and sorts them by stars.
export function getFilteredRepos(repos) {
  if (!Array.isArray(repos)) {
    return [];
  }

  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
}

export function getWeekIndex(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diffDays = Math.floor((date - startOfYear) / 86400000);
  return Math.floor(diffDays / 7);
}

export function getFeaturedRepo(repos, date = new Date()) {
  if (!repos.length) {
    return null;
  }

  return repos[getWeekIndex(date) % repos.length];
}
