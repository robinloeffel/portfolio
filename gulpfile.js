const { rmdir } = require('fs/promises');
const { series, parallel, watch, src, dest } = require('gulp');
const open = require('open');

const plumber = require('gulp-plumber');
const { server, reload } = require('gulp-connect');
const sass = require('@rbnlffl/gulp-sass');
const rollup = require('@rbnlffl/gulp-rollup');
const postcss = require('gulp-postcss');

const stylelint = require('stylelint');
const scss = require('postcss-scss');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');

const eslint = require('@rbnlffl/rollup-plugin-eslint');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const production = process.argv.includes('--prod');

const clean = async () => await rmdir('public', {
  recursive: true
});

const serve = async () => await server({
  livereload: true,
  root: 'public'
});

const openBrowser = async () => await open('http://localhost:8080');

const copy = () => src([
  'source/index.html',
  'source/robots.txt',
  'source/sitemap.txt',
  'source/.htaccess',
  'source/img/**'
], {
  base: 'source',
  allowEmpty: true
})
.pipe(plumber())
.pipe(dest('public'))
.pipe(reload());

const js = () => src('source/js/robin.js', {
  sourcemaps: !production
})
.pipe(plumber())
.pipe(rollup({
  plugins: [
    eslint(),
    resolve(),
    commonjs(),
    production && terser()
  ].filter(plugin => plugin)
}))
.pipe(dest('public/js', {
  sourcemaps: '.'
}))
.pipe(reload());

const css = () => src('source/css/robin.scss', {
  sourcemaps: !production
})
.pipe(plumber())
.pipe(postcss([
  stylelint(),
  reporter({
    clearReportedMessages: true
  })
], {
  parser: scss
}))
.pipe(sass())
.pipe(postcss([
  production && cssnano()
].filter(plugin => plugin)))
.pipe(dest('public/css', {
  sourcemaps: '.'
}))
.pipe(reload());

const watchFiles = done => {
  watch([
    'source/index.html',
    'source/robots.txt',
    'source/sitemap.txt',
    'source/.htaccess',
    'source/img/**'
  ], copy);
  watch('source/css/**/*', css);
  watch('source/js/**/*', js);

  done();
};

module.exports.default = series(clean, parallel(copy, js, css), serve, openBrowser, watchFiles);
module.exports.build = series(clean, parallel(copy, js, css));
