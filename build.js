const browserSync = require('browser-sync');
const del = require('del');
const { build } = require('esbuild');

const development = process.argv.includes('--dev');

const setup = async () => {
  const server = browserSync.create();

  await del('dist/robin.{js,css}');
  await build({
    entryPoints: [ './src' ],
    entryNames: 'robin',
    outdir: 'dist',
    bundle: true,
    incremental: true,
    sourcemap: development,
    minify: !development,
    logLevel: 'error',
    watch: {
      onRebuild() {
        server.reload();
      }
    }
  });

  server.init({
    server: 'dist',
    notify: false,
    ui: false,
    port: 8080,
    host: '0.0.0.0',
    logLevel: 'silent'
  });
};

setup();

