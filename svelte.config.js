import vercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: vercel(),
		prerender: {
			handleMissingId: ({ id, message }) => {
				if (id !== "email") {
					throw new Error(message);
				}
			}
		},
		alias: {
			$styles: "./src/lib/styles",
			$components: "./src/lib/components",
			$assets: "./src/lib/assets"
		}
	}
};
