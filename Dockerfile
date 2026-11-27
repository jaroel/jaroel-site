# Build on the native build platform ($BUILDPLATFORM), ship for the target
# platform ($TARGETPLATFORM). Vite 8.4+ inlines a SIMD build of es-module-lexer
# for the import-analysis plugin, and Bun's JSC runtime does not enable WASM
# SIMD under emulated linux/amd64, so `vite build` fails there with
# "wasm-simd is not enabled". The build output (JS/CSS/HTML) is architecture
# independent, so only the Bun binary has to match the target.
FROM --platform=$BUILDPLATFORM oven/bun:1 AS builder
WORKDIR /app/
COPY . /app/
RUN bun install --frozen-lockfile
RUN bun run lint
RUN bun run typecheck
RUN bun run test --run
ENV NODE_ENV=production
RUN bun run build
RUN bun build ./server.bun.ts --target=bun --outfile=./dist/server.bun.js

# Target-architecture Bun for the runtime image (FROM defaults to the target
# platform, unlike the builder above).
FROM oven/bun:1 AS bun-runtime

FROM gcr.io/distroless/cc-debian13
WORKDIR /app/
COPY --from=bun-runtime /usr/local/bin/bun /usr/local/bin/bun
COPY --from=builder /app/dist/server.bun.js /app/server.bun.js
COPY --from=builder /app/dist/client /app/dist/client
ENV NODE_ENV=production
USER nonroot:nonroot
ENTRYPOINT ["/usr/local/bin/bun"]
CMD ["run", "/app/server.bun.js"]
