const GITHUB_API_BASE = process.env.REACT_APP_GITHUB_API_BASE;

export async function fetchUserRepos(username) {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${encodeURIComponent(
      username
    )}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API request failed with HTTP ${response.status}`);
  }

  return response.json();
}
