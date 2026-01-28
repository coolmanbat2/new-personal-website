const GITHUB_API_BASE = process.env.REACT_APP_GITHUB_API_BASE;

export async function fetchUserRepos(username) {
  if (!username) {
    throw new Error("GitHub username is required.");
  }

  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`
  }

  const response = await fetch(
    `${GITHUB_API_BASE}/users/${encodeURIComponent(
      username
    )}/repos?per_page=100&sort=updated`,
    { headers }
  );

  if (!response.ok) {
    throw new Error("Failed to load GitHub repositories.");
  }

  return response.json();
}
