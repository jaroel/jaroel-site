FROM oven/bun:1 AS builder
WORKDIR /app/
COPY . /app/
RUN bun install --frozen-lockfile
RUN bun run lint
ENV NODE_ENV=production
RUN bun run build
RUN bun build ./server.bun.ts --target=bun --outfile=./dist/server.bun.js

FROM gcr.io/distroless/cc-debian13
WORKDIR /app/
COPY --from=builder /usr/local/bin/bun /usr/local/bin/bun
COPY --from=builder /app/dist/server.bun.js /app/server.js
COPY --from=builder /app/dist/client /app/dist/client
ENV NODE_ENV=production
USER nonroot:nonroot
ENTRYPOINT ["/usr/local/bin/bun"]
CMD ["run", "/app/server.js"]
