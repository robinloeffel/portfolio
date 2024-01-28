import { defineConfig } from "vite";

export default defineConfig({
	root: "src",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
		modulePreload: process.env.NODE_ENV === "development"
	},
	server: {
		open: true
	}
});
