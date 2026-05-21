# AI Agent Guide for pargal-cleaning

## What this project is
- A Vite + React static website for Pargal Cleaning.
- Built for GitHub Pages deployment using `gh-pages`.
- Content is primarily Arabic, with a marketing-style landing page and WhatsApp contact links.

## Key commands
- `npm run dev` — start the local Vite development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint on the repository
- `npm run deploy` — deploy the `dist` folder to GitHub Pages

## Important files
- `package.json` — scripts, dependencies, project metadata
- `vite.config.js` — Vite configuration; includes `base: '/pargal-cleaning/'`
- `src/main.jsx` — application entry point
- `src/App.jsx` — page composition and top-level layout
- `src/components/` — presentational React components with per-component CSS imports
- `src/index.css` — global styles
- `README.md` — project description in Arabic

## Conventions
- Functional components with default exports
- Per-component CSS file imported within component modules
- Use React hooks only when needed for UI state/behavior
- Preserve Arabic content and right-to-left styling when updating copy or layout
- External links to WhatsApp use `target="_blank" rel="noreferrer"`

## What to avoid
- Do not introduce server-side features; this repository is a purely client-side static site
- Do not change the GitHub Pages base path unless updating deployment settings consistently in `vite.config.js`
- Avoid adding complex state or routing unless there is a clear UI requirement

## Useful context for agents
- The app is structured as a single-page landing site, not a multi-page application
- Styling is handled with plain CSS files, not CSS modules or styled-components
- The site depends on `framer-motion` for simple entrance animations
- There is no backend code or tests in this repository

## Notes for `mcp` or model-context work
- There is no existing Model Context Protocol integration in this codebase
- Use this guide plus the project files to infer site structure and conventions
- Focus on React/Vite patterns, Arabic UI, and static deployment behavior
