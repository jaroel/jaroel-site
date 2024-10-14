FROM node:20 AS builder
WORKDIR /app/
COPY . /app/
RUN npm install -g pnpm && pnpm install
RUN pnpm run build

FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app/
COPY --from=builder /app/.output /app/
CMD ["/app/server/index.mjs"]
