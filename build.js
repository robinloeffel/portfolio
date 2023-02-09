import { deleteAsync } from "del";
import chokidar from "chokidar";
import open from "open";
import esbuild from "esbuild";
import eslint from "esbuild-plugin-eslint";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import env from "postcss-preset-env";
import browserSync from "browser-sync";

const watch = process.argv.includes("--watch");

await deleteAsync("public/robin.*");

if (watch) {
  const context = await esbuild.context({
    entryPoints: [
      "src/robin.ts",
      "src/robin.scss"
    ],
    outdir: "public",
    bundle: true,
    sourcemap: true,
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

  const server = browserSync.create();
  server.init({
    host: "0.0.0.0",
    notify: false,
    open: true,
    server: "public",
    ui: false
  });

  const watcher = chokidar.watch([
    "src/**/*",
    "public/index.html"
  ]);
  const callback = async () => {
    await context.rebuild();
    server.reload();
  };

  watcher.on("change", callback);
  watcher.on("add", callback);
  watcher.on("unlink", callback);
} else {
  await esbuild.build({
    entryPoints: [
      "src/robin.ts",
      "src/robin.scss"
    ],
    outdir: "public",
    bundle: true,
    minify: true,
    define: {
      watchMode: "false"
    },
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

  await open("public");
}
