# yonathangoncalves.com

Personal portfolio site of Yonathan Gonçalves, built with React and Vite.

It showcases my projects, skills, and background as a backend developer, with a
built-in dark mode and support for four languages (English, Spanish,
Portuguese, and French).

## Tech stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) for tooling and dev server
- Plain CSS (no framework)
- [Oxlint](https://oxc.rs/) for linting

## Getting started

```bash
npm install
npm run dev
```

The dev server prints the local URL (defaults to `http://localhost:5173`).

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — build for production into `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint

## Project structure

```
src/
  components/   Reusable UI pieces (header, footer, project cards, skills, contact form...)
  pages/        Route-level pages (Home, Projects, About Me, Article)
  data/         Project list, skills, and translation strings
  context/      Site-wide state (language, dark mode)
  styles/       Plain CSS, one file per page/section
```
