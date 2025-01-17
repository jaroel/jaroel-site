import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
	vite: {
		build: {
			reportCompressedSize: false,
		},
	},
	server: {
		preset: "bun",
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
			"/": {
				headers: { "cache-control": "max-age=3600, must-revalidate" },
			},
			"/uzg/": {
				headers: { "cache-control": "max-age=3600" },
			},
		},
	},
});
