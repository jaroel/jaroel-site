// Production server: static client assets plus one import — the built server
// bundle's `handleRequest`, an adapter-agnostic web `Request -> Response`
// handler that streams the SSR render, resolves hashed client assets through
// the build manifest, and (with serverFunctions enabled) serves the
// `/_server` endpoint too. Bun.serve is web-native, so the handler is used
// directly — no node <-> web plumbing. Static assets are served first from
// the same build. Nothing comes from node:* — `Bun.file`, `Bun.serve` and
// `import.meta.dir` are the whole platform.
import { handleRequest } from "./dist/server/server.js";

const port = Number(process.env.PORT) || 3000;
const clientRoot = `${import.meta.dir}/dist/client`;

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);

    // Static client assets first. `Bun.file` is a lazy, file-backed
    // Response body; `.type` is inferred from the file extension.
    if (url.pathname !== "/" && !url.pathname.includes("..")) {
      const file = Bun.file(clientRoot + url.pathname);
      if (await file.exists()) return new Response(file);
    }

    try {
      // The `options.event` seam: extra fields spread into the request event,
      // conventionally the platform's raw request as `nativeEvent`. Here Bun's
      // Request *is* web-native, so it doubles as nativeEvent and app code
      // reads it back via getRequestEvent().
      return await handleRequest(req, { event: { nativeEvent: req } });
    } catch (e) {
      console.error(e);
      return new Response(
        e instanceof Error ? e.message : "Internal Server Error",
        {
          status: 500,
        },
      );
    }
  },
});

console.log(`Server running at http://localhost:${port}`);
