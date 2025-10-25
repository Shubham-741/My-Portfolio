# My Portfolio

This is a personal portfolio website built with Vite, React (JSX), and Tailwind CSS.

## Overview

- Framework: Vite + React
- Styling: Tailwind CSS
- Purpose: Personal portfolio to showcase projects, experience, and resume

## Project structure

Important files and folders:

- `index.html` — app entry HTML
- `src/` — React source files
  - `App.jsx`, `index.jsx` — main components
  - `components/` — UI components (Hero, Navbar, ProjectCard, ResumeViewer, etc.)
- `public/` — static assets (including `pdf.worker.min.js`)
- `package.json` — project scripts and dependencies
- `tailwind.config.js`, `postcss.config.js` — Tailwind config

## Getting started

Prerequisites

- Node.js (v14+ recommended)
- npm, yarn or pnpm

Install dependencies

```powershell
npm install
# or
# yarn install
# or
# pnpm install
```

Start development server

```powershell
npm run dev
# or
# yarn dev
# or
# pnpm dev
```

Build for production

```powershell
npm run build
# or
# yarn build
# or
# pnpm build
```

Preview production build locally

```powershell
npm run preview
# or
# yarn preview
# or
# pnpm preview
```

## Deploy

You can deploy the `dist/` directory to GitHub Pages, Netlify, Vercel, or any static host.

Quick GitHub push (replace `<repo-url>` with your repo):

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

If you want to publish to GitHub Pages from the `main` branch, enable Pages in repository settings and set the source to `gh-pages` or `main` → `/ (root)` depending on your workflow.

## Notes

- This project uses a pre-built `pdf.worker.min.js` in `public/` for PDF rendering. Keep `public/` files as-is unless you know what you're changing.
- If you use a lockfile manager (package-lock.json / yarn.lock / pnpm-lock.yaml) keep it committed for reproducible installs.

## License

This repository does not include a license file by default. Add a `LICENSE` file if you want to make the project open-source.
