# jaroel-site

Personal site. SolidJS 2 (SSR) app built with [Vite+](https://viteplus.dev), Tailwind CSS v4, served in production by Bun on a distroless image.

## Requirements

- [Bun](https://bun.sh) `>=1.4.4` (declared in `engines`)
- [Vite+](https://viteplus.dev) CLI (`vp`) — installed as a dev dep, or globally

## Developing

```bash
vp install          # install dependencies from bun.lock
vp dev              # start dev server
```

## Checks

```bash
vp check            # format, lint, type check
vp test             # vitest (happy-dom)
```

`vp check --fix` runs automatically on staged files via `staged` in `vite.config.ts`.

## Building & running

```bash
vp build            # outputs dist/client + dist/server
vp run serve        # = bun server.bun.ts (PORT env, default 3000)
```

`vp build` produces the SSR bundle; `server.bun.ts` serves static assets from `dist/client` and hands everything else to the Solid request handler in `dist/server/server.js` via `Bun.serve`.

## Docker

```bash
./build.sh                       # docker build --platform linux/amd64 -t jaroelsite:latest
./deploy.sh                      # build, push, restart on web1.jaroel.nl
```

`Dockerfile` is a three-stage build:

1. `deps` — `vp install --prod` for runtime dependencies
2. `builder` — `vp install`, `vp lint`, `vp build` in the official `ghcr.io/voidzero-dev/vite-plus` image
3. runtime — `gcr.io/distroless/cc-debian13` with the Bun binary copied in, running `server.bun.ts`

## Structure

```
src/routes/       file-based routes (filesystem-routing), incl. [...404].tsx
src/components/   components + colocated *.test.tsx
src/app.tsx       root app shell (meta, Nav, CSS)
src/app.css       Tailwind entry
server.bun.ts     Bun production server
vite.config.ts    Vite+ config: plugins, aliases, lint/fmt/staged tasks
vitest.config.ts  test config (same plugins, happy-dom)
```
