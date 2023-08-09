import { deleteAsync as del } from "del";
import open from "open";
import esbuild from "esbuild";
import browserSync from "@rbnlffl/esbuild-plugin-browser-sync";
import eslint from "esbuild-plugin-eslint";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import env from "postcss-preset-env";

const watch = process.argv.includes("--watch");

/** @type {esbuild.BuildOptions} */
const config = {
  entryPoints: [
    "source/robin.ts",
    "source/robin.scss"
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
    }),
    watch && browserSync({
      ui: false,
      notify: false,
      server: "public",
      files: [
        "public/.htaccess",
        "public/*.{png,jpg,webp,html,txt}"
      ]
    })
  ].filter(Boolean),
  sourcemap: watch,
  minify: !watch
};

await del("public/robin*");

if (watch) {
  const context = await esbuild.context(config);
  await context.watch();
} else {
  await esbuild.build(config);
  await open("public");
}
