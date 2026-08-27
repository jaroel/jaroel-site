FROM oven/bun:1 AS builder
WORKDIR /app/
COPY . /app/
ENV NODE_ENV=production
RUN bun install --frozen-lockfile
RUN bun run lint
#RUN bun run test --run
RUN bun run build

FROM gcr.io/distroless/cc-debian13
WORKDIR /app/
COPY --from=builder /usr/local/bin/bun /usr/local/bin/bun
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/server.js /app/server.js
ENV NODE_ENV=production
EXPOSE 3000
USER nonroot:nonroot
ENTRYPOINT ["/usr/local/bin/bun"]
CMD ["run", "/app/server.js"]
