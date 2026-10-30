import { defineConfig, lazyPlugins } from "vite-plus";
import { fileRoutes } from "filesystem-routing/vite";
import solid from "@solidjs/vite-plugin";
import { responsiveImage } from "@responsive-image/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [
    solid({
      start: true,
      ssr: true,
      extensions: [".tsx"],
    }),
    tailwindcss(),
    fileRoutes(),
    responsiveImage(),
  ]),
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
