# syntax=docker/dockerfile:1
# Build with the official Vite+ toolchain image (vp preinstalled).
# Runtime stays Bun on distroless, so the deploy image is unchanged.
FROM ghcr.io/voidzero-dev/vite-plus:1.4.0 AS deps
WORKDIR /app/
COPY --chown=vp:vp package.json bun.lock ./
RUN vp install --frozen-lockfile --prod --no-optional

FROM ghcr.io/voidzero-dev/vite-plus:1.4.0 AS builder
WORKDIR /app/
COPY --chown=vp:vp . /app/
RUN vp install --frozen-lockfile
RUN vp lint
ENV NODE_ENV=production
RUN vp build

# Bun binary for the runtime stage.
FROM oven/bun:1 AS bun

FROM gcr.io/distroless/cc-debian13
WORKDIR /app/
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/server.bun.ts /app/server.bun.ts
COPY --from=builder /app/dist /app/dist
COPY --from=deps /app/node_modules /app/node_modules
ENV NODE_ENV=production
USER nonroot:nonroot
ENTRYPOINT ["/usr/local/bin/bun"]
CMD ["run", "/app/server.bun.ts"]
