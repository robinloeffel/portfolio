import { defineConfig } from "vite";
import browserslist from "browserslist-to-esbuild";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	build: {
		target: browserslist()
	},
	plugins: [
		sveltekit()
	]
});
