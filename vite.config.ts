import browserslist from "browserslist-to-esbuild";
import { defineConfig } from "vite";

export default defineConfig({
	root: "src",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		target: browserslist()
	},
	server: {
		open: true
	}
});
