import { exec } from "child_process";
import { sassPlugin } from "esbuild-sass-plugin";
import browserSync from "browser-sync";
import esbuild from "esbuild";
import eslint from "esbuild-plugin-eslint";
import postcss from "postcss";
import env from "postcss-preset-env";

const config = (
  sourcemap = false,
  minify = false
) => ({
  entryPoints: [
    "src/robin.ts",
    "src/robin.scss"
  ],
  outdir: "public",
  bundle: true,
  plugins: [
    eslint(),
    sassPlugin({
      async transform(source, directory) {
        const processor = postcss([ env() ]);
        const result = await processor.process(source, {
          from: directory
        });
        return result.css;
      }
    })
  ],
  sourcemap,
  minify
});

exec("rm -rf public/robin.*", async () => {
  if (process.argv.includes("--watch")) {
    const context = await esbuild.context(config(true));
    await context.watch();

    const bs = browserSync.create();
    const watcher = bs.watch([
      "src/**/*",
      "public/*.{html,png,jpg,webp}"
    ]);

    const reload = () => bs.reload();
    watcher.on("add", reload);
    watcher.on("change", reload);
    watcher.on("unlink", reload);

    bs.init({
      host: "0.0.0.0",
      server: "public",
      ui: false,
      notify: false
    });
  } else {
    await esbuild.build(config(false, true));
    exec("open public");
  }
});
