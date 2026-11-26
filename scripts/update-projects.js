const fs = require("fs");
const path = require("path");

const username = process.env.GITHUB_USERNAME || "coolmanbat2";
const apiBase = process.env.GITHUB_API_BASE || "https://api.github.com";
const snapshotPath = path.join(__dirname, "..", "src", "data", "projects.json");
const excludedRepositories = new Set([
  "coolmanbat2.github.io",
  "new-personal-website",
  "meme-generator",
  "meme-generator-react-edition",
  "special-keytyping",
  "netcon",
]);

function isUsefulRepository(repo) {
  const name = String(repo.name || "").toLowerCase();
  return (
    !repo.fork &&
    !repo.archived &&
    Boolean(repo.description && repo.description.trim()) &&
    !excludedRepositories.has(name)
  );
}

async function refreshSnapshot() {
  const response = await fetch(
    `${apiBase}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "thanusun.tech-build",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub metadata refresh returned HTTP ${response.status}`);
  }

  const repositories = (await response.json())
    .filter(isUsefulRepository)
    .sort((a, b) => {
      const stars = (b.stargazers_count || 0) - (a.stargazers_count || 0);
      return stars || String(b.updated_at || "").localeCompare(String(a.updated_at || ""));
    })
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count || 0,
      fork: Boolean(repo.fork),
      archived: Boolean(repo.archived),
      updated_at: repo.updated_at,
    }));

  const snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
  snapshot.repos = repositories;
  fs.writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(`Updated ${repositories.length} repository records in ${snapshotPath}`);
}

refreshSnapshot().catch((error) => {
  // A stale committed snapshot is safer than failing the production build.
  console.warn(`GitHub metadata refresh skipped: ${error.message}`);
});
