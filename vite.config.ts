import { sveltekit } from "@sveltejs/kit/vite";
import browserslist from "browserslist-to-esbuild";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		target: browserslist()
	},
	plugins: [
		sveltekit()
	]
});
