import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "svelte-define-config";

export default defineConfig({
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: "ignore"
		},
		alias: {
			$styles: "./src/lib/styles",
			$components: "./src/lib/components",
			$assets: "./src/lib/assets"
		}
	}
});
