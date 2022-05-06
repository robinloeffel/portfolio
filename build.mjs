import { exec } from 'child_process';
import { build } from 'esbuild';
import postcss from 'esbuild-postcss';
import eslint from 'esbuild-plugin-eslint';
import browserSync from 'browser-sync';

const watch = process.argv.includes('--watch');
const minify = process.argv.includes('--minify');

exec('rm -rf public/robin.*', async () => {
  const server = browserSync.create();

  await build({
    entryPoints: [
      'src/robin.css',
      'src/robin.js'
    ],
    outdir: 'public',
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
      postcss()
    ]
  });

  if (watch) {
    server.init({
      host: '0.0.0.0',
      notify: false,
      open: true,
      server: 'public',
      ui: false
    });
  } else {
    exec('open public');
  }
});
