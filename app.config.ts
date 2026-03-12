import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		build: {
			reportCompressedSize: false,
		},
	},
	server: {
		preset: "bun",
		prerender: {
			routes: ["/", "/resume", "/secret"],
		},
		routeRules: {
			"/_build/assets/**": {
				headers: { "cache-control": "max-age=31536000, immutable" },
			},
			"/_server/assets/**": {
				headers: { "cache-control": "max-age=31536000, immutable" },
			},
			"/assets/**": {
				headers: { "cache-control": "max-age=31536000, immutable" },
			},
		},
	},
});
