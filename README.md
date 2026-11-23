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

## Responsive layout

The layout uses custom responsive CSS rather than a UI framework. Desktop uses a balanced two-column composition; below the responsive breakpoints, content stacks into a mobile layout. Skill pills, experience text, project cards, and images are constrained to their columns and wrap for narrow screens.

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
