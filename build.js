const { build } = require('esbuild');
const browserSync = require('browser-sync');
const del = require('del');

const development = process.argv.includes('--dev');

const setup = async () => {
  const server = browserSync.create();

  await del('./public/*.{js,css,map}');

  await build({
    entryPoints: [
      'src/robin.css',
      'src/robin.js'
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
    }
  });

  server.init({
    host: '0.0.0.0',
    notify: false,
    open: true,
    server: './public',
    ui: false
  });
};

setup();
