import { exec } from 'child_process';
import { build } from 'esbuild';
import postcss from 'esbuild-postcss';
import eslint from 'esbuild-plugin-eslint';
import browserSync from 'browser-sync';

const development = process.argv.includes('--dev');

exec('rm -rf ./public/robin*', async () => {
  const server = browserSync.create();

  await build({
    entryPoints: [
      './src/robin.css',
      './src/robin.js'
    ],
    outdir: './public',
    bundle: true,
    incremental: true,
    sourcemap: development,
    minify: !development,
    watch: {
      onRebuild() {
        server.reload();
      }
    },
    plugins: [
      eslint(),
      postcss()
    ]
  });

  server.init({
    host: '0.0.0.0',
    notify: false,
    open: true,
    server: './public',
    ui: false
  });
});
