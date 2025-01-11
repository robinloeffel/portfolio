import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    target: "esnext",
    outDir: "../dist",
    emptyOutDir: true,
    modulePreload: {
      polyfill: false
    }
  }
});