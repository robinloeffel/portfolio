import { defineConfig } from "vite";
import browserslist from "browserslist-to-esbuild";
import { sveltekit } from "@sveltejs/kit/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
	build: {
		target: browserslist()
	},
	plugins: [
		enhancedImages(),
		sveltekit()
	],
	server: {
		open: process.env.NODE_ENV === "development"
	}
});
