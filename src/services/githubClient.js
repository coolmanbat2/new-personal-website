import axios from "axios";

const GITHUB_API_BASE = process.env.REACT_APP_GITHUB_API_BASE;

export async function fetchUserRepos(username) {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: `Bearer ${process.env.REACT_APP_PERSONAL_ACCESS_TOKEN}`
  };

  // GET request for remote image in node.js
  return axios.get(`${GITHUB_API_BASE}/users/${encodeURIComponent(
    username
  )}/repos?per_page=100&sort=updated`, { headers: headers })
    .then(function (response) {
      return response.data;
    }).catch(function (error) {
      throw new Error("Failed to load GitHub repositories. Error: " + error.message);
    });
}
