import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import imagemin from "unplugin-imagemin/vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		imagemin({
			mode: "sharp",
			beforeBundle: true
		})
	],
	server: {
		open: process.env.NODE_ENV === "development"
	}
});
