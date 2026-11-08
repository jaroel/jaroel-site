# Agent notes

Repo: jaroel.nl personal site. Read `README.md` for layout and commands.

Stack: SolidJS 2 RC + `@solidjs/vite-plugin` SSR (`start: true`),
`filesystem-routing`, Tailwind v4, Bun. Migrated off solid-start; SolidStart
docs and tutorials do not apply here.

## Fast verification

- `bun run test --run` — full suite, 3 tests, under a second.
- `bun run typecheck` — Bun's native type check (`bun check --no-script`).
- `bun run build`, then `PORT=3123 bun run serve`.
- 404 check: `curl -s -o /dev/null -w '%{http_code}\n' localhost:3123/nope`
  should print `404`.

## Solid 2 RC is the source of truth

Installed skills ship with the packages. Read them before Solid work:

- `node_modules/solid-js/skills/solid-2.0/SKILL.md`
- `node_modules/solid-js/skills/solid-2.0-cheatsheet/SKILL.md`
- `node_modules/solid-js/skills/reactivity-diagnostics/SKILL.md`
- `node_modules/@solidjs/web/skills/server-components/SKILL.md`

Online docs lag the RC. Check installed types before guessing:

- `node_modules/@solidjs/web/types/*.d.ts` — `httpStatus`, `getRequestEvent`,
  render APIs.
- `node_modules/@solidjs/router/dist/*.d.ts` — `createRouter`,
  `RouteDefinition`, `useLocation`. The `A` component is gone; use `<a>`.
- `node_modules/filesystem-routing/types.d.ts` and `virtual:file-routes` —
  route generation.

Grep the `.d.ts` files first. Only read `dist/*.js` when types are missing.

## Gotchas

- `dist/server/server.js` is the built request handler, not a server. Never
  run it directly. Start `server.js` (Node) or `server.bun.ts` (Bun).
- `bun run serve` needs a prior `bun run build`; it serves `dist/client` and
  `dist/server`.
- Dev port is whatever Vite prints. Do not assume 3000 or 5173.
- 404 status comes from `export const route = { preload: () => httpStatus(404) }`
  in `src/routes/[...404].tsx`, imported from `@solidjs/web`.
- Deploy bundles `server.bun.ts` to `dist/server.bun.js`; `server.js` is only
  for local Node serving.

Keep this file current when the stack, scripts, or layout change.
