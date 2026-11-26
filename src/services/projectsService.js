const EXCLUDED_REPOSITORIES = new Set([
  "coolmanbat2.github.io",
  "new-personal-website",
  "meme-generator",
  "meme-generator-react-edition",
  "special-keytyping",
  "netcon",
]);

// The browser reads the committed snapshot. This helper keeps display filtering
// deterministic and prevents empty, forked, archived, or portfolio repos from
// crowding out the curated systems above.
export function getFilteredRepos(repos) {
  if (!Array.isArray(repos)) {
    return [];
  }

  return repos
    .filter((repo) => {
      const name = String(repo.name || "").toLowerCase();
      return (
        !repo.fork &&
        !repo.archived &&
        Boolean(repo.description && repo.description.trim()) &&
        !EXCLUDED_REPOSITORIES.has(name)
      );
    })
    .sort((a, b) => {
      const stars = (b.stargazers_count || 0) - (a.stargazers_count || 0);
      if (stars !== 0) {
        return stars;
      }
      return String(b.updated_at || "").localeCompare(String(a.updated_at || ""));
    });
}
