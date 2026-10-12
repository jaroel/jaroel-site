import { fileURLToPath } from "node:url";
import solid from "@solidjs/vite-plugin";
import { fileRoutes } from "filesystem-routing/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    solid({
      start: true,
      ssr: true,
      extensions: [".tsx"],
    }),
    fileRoutes(),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "happy-dom",
  },
});
