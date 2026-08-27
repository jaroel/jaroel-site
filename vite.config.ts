import { defineConfig } from "vite";
import { fileRoutes } from "filesystem-routing/vite";
import solid from "@solidjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    solid({
      start: true,
      ssr: true,
      extensions: [".tsx"],
    }),
    tailwindcss(),
    fileRoutes(),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    reportCompressedSize: false,
    target: "esnext",
  },
});
