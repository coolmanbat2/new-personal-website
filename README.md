# Personal Portfolio Website

A React portfolio website for Thanusun Thayaparan. The site presents professional experience, selected GitHub projects, technical skills, and a short personal introduction in a responsive dark-themed layout.

## Requirements

- Node.js 20+
- npm

## Local development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000). To make it reachable from another device on the same network:

```bash
npm start -- --host 0.0.0.0
```

The development server supports hot reload.

## Configuration

The Projects section reads public GitHub repository data using these React build-time variables:

```text
REACT_APP_GITHUB_USERNAME=coolmanbat2
REACT_APP_GITHUB_API_BASE=https://api.github.com
```

`REACT_APP_*` values are compiled into the browser bundle. Never put passwords, private tokens, or other secrets in them.

## Available scripts

### `npm test`

Runs the React test runner. In CI, the non-interactive command is:

```bash
CI=true npm test -- --watchAll=false --passWithNoTests
```

### `npm run build`

Creates the optimized production bundle in `build/`.

### `npm run eject`

Create React App's irreversible eject operation. This project does not normally require it.

## Quality and security checks

GitHub Actions runs the following checks for pushes and pull requests:

- **Build, test, and serve smoke test:** installs dependencies, runs tests, builds the production bundle, serves `build/`, and verifies an HTTP response.
- **Production dependency audit:** runs `npm audit --omit=dev --audit-level=high`.
- **CodeQL:** performs JavaScript security analysis.
- **Dependency review:** checks dependency changes introduced by pull requests.

The production dependency surface was reduced by:

- Removing unused runtime packages.
- Moving build and test tooling into `devDependencies`.
- Replacing runtime Axios usage with the browser's native Fetch API.
- Regenerating `package-lock.json`.

The production audit currently reports zero vulnerabilities. The legacy Create React App development toolchain still has separate development-only audit findings; replacing that toolchain would be a separate migration from the portfolio changes.

## Publishing to GitHub Pages

The source repository is `coolmanbat2/new-personal-website`. The live Pages repository is `coolmanbat2/coolmanbat2.github.io`, whose legacy Pages source is the `master` branch and whose custom domain is `thanusun.tech`.

The `Deploy portfolio to GitHub Pages repository` workflow runs after the `Portfolio quality checks` workflow succeeds for an update to `main`, and can also be started manually with **Actions → Deploy portfolio to GitHub Pages repository → Run workflow**. It:

1. Installs the source repository with `npm ci`.
2. Builds the production bundle with `npm run build`.
3. Adds the `thanusun.tech` CNAME file.
4. Replaces the live repository's root contents with the generated `build/` output.
5. Commits and pushes the result to `coolmanbat2.github.io:master`.

### Required one-time setup

Because GitHub's default `GITHUB_TOKEN` is scoped to the source repository, the workflow needs a repository secret named `PAGES_DEPLOY_TOKEN`. Use a fine-grained personal access token restricted to `coolmanbat2.github.io` with **Contents: Read and write** permission, then add it under:

`new-personal-website → Settings → Secrets and variables → Actions → New repository secret`

Do not put the token in the repository, `.env`, workflow YAML, or README. The deployment workflow intentionally fails with a clear message if the secret is missing.

The source build and security checks run before the live repository is changed. The target repository remains a separate deployment repository, and the workflow preserves the existing custom-domain configuration by regenerating `CNAME` on every deployment.

## Responsive layout

The layout uses custom responsive CSS rather than a UI framework. Desktop uses a balanced two-column composition. On tablet and mobile widths, content stacks with the profile image between Core Skills and About so the image remains visible before the longer biography. Skill pills, experience text, project cards, and images are constrained to their columns and wrap for narrow screens.

## Project structure

```text
public/                 Static public assets
src/components/         Reusable UI components
src/css/                Component and responsive styles
src/pages/               Main page sections
src/services/            GitHub project data service
src/static/              Images and logos
.github/workflows/       Build and security checks
```

## Learn more

- [Create React App documentation](https://facebook.github.io/create-react-app/)
- [React documentation](https://react.dev/)
