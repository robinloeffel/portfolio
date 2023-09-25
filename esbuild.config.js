import process from "node:process";

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
  assetNames: "inter",
  loader: {
    ".woff2": "copy"
  },
  plugins: [
    eslint(),
    sassPlugin({
      transform: async (source, directory) => {
        const processor = postcss([ env() ]);
        const { css } = await processor.process(source, {
          from: directory
        });
        return css;
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

await del([
  "public/robin*",
  "public/*.woff2"
]);

if (watch) {
  const context = await esbuild.context(config);
  await context.watch();
} else {
  await esbuild.build(config);
  await open("public");
}
