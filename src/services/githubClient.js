const GITHUB_API_BASE = process.env.REACT_APP_GITHUB_API_BASE;

export async function fetchUserRepos(username) {
  if (!username) {
    throw new Error("GitHub username is required.");
  }

  const response = await fetch(
    `${GITHUB_API_BASE}/users/${encodeURIComponent(
      username
    )}/repos?per_page=100&sort=updated`
  );

  if (!response.ok) {
    throw new Error("Failed to load GitHub repositories.");
  }

  return response.json();
}
