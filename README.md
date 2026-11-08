# jaroel.nl

Personal site. SolidJS 2 (RC) with SSR through `@solidjs/vite-plugin`,
file-based routes via `filesystem-routing`, Tailwind CSS v4, Bun.

## Commands

Use Bun (repo has `bun.lock`).

```bash
bun install
bun run dev          # Vite dev server; use the URL it prints
bun run build        # SSR build into dist/client + dist/server
bun run serve        # Node prod server (server.js); build first
bun run serve:ts     # Bun-native prod server (server.bun.ts); build first
bun run test --run   # Vitest suite, <1s
bun run lint         # oxlint
bun run typecheck    # bundle-wide type check (bun check)
bun run fmt          # oxfmt
```

## Layout

- `src/app.tsx` — root component: router + layout (lowercase filename)
- `src/routes/*.tsx` — file routes. Default export is the page; optional
  `export const route` for `preload`/`httpStatus` (see `[...404].tsx`)
- `src/components/` — shared components, tests beside them
- `src/app.css` — Tailwind entry
- `vite.config.ts`, `vitest.config.ts` — solid SSR + tailwind + fileRoutes +
  responsiveImage plugins
- `server.js` — Node production adapter for `dist/server/server.js`
- `server.bun.ts` — Bun.serve production adapter
- `build.sh`, `push.sh`, `deploy.sh`, `Dockerfile` — Docker build, registry
  push, server restart

## Not used

solid-start, vinxi, npm/yarn/pnpm, `app.config.*`, `tailwind.config.cjs`
(Tailwind v4 config lives in CSS). Don't follow old SolidStart docs for this
repo.
