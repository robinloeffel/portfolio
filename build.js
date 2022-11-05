import { deleteAsync } from "del";
import open from "open";
import { build } from "esbuild";
import eslint from "esbuild-plugin-eslint";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import env from "postcss-preset-env";
import browserSync from "browser-sync";

const watch = process.argv.includes("--watch");
const minify = process.argv.includes("--minify");
const server = browserSync.create();

await deleteAsync("public/robin.*");
await build({
  entryPoints: [
    "src/robin.ts",
    "src/robin.scss"
  ],
  outdir: "public",
  bundle: true,
  incremental: true,
  sourcemap: watch,
  minify,
  watch: watch ? {
    onRebuild() {
      server.reload();
    }
  } : false,
  plugins: [
    eslint(),
    sassPlugin({
      async transform(source, directory) {
        const { css } = await postcss([
          env()
        ]).process(source, {
          from: directory
        });
        return css;
      }
    })
  ]
});

if (watch) {
  server.init({
    host: "0.0.0.0",
    notify: false,
    open: true,
    server: "public",
    ui: false
  });
} else {
  await open("public");
}
