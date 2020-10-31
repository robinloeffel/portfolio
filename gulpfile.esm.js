import { execSync } from 'child_process';
import { series, parallel, watch, src, dest } from 'gulp';

import plumber from 'gulp-plumber';
import { server, reload } from 'gulp-connect';
import sass from '@rbnlffl/gulp-sass';
import rollup from '@rbnlffl/gulp-rollup';
import postcss from 'gulp-postcss';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import rezzy from 'gulp-rezzy';
import webp from 'gulp-webp';
import handlebars from 'gulp-hb';

import stylelint from 'stylelint';
import scss from 'postcss-scss';
import env from 'postcss-preset-env';
import cssnano from 'cssnano';
import reporter from 'postcss-reporter';

import eslint from '@rbnlffl/rollup-plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';

const production = process.argv.includes('--prod');

const clean = done => {
  execSync('rm -rf public');
  done();
};

const open = done => {
  execSync('open http://localhost:8080');
  done();
};

const serve = done => {
  server({
    livereload: true,
    root: 'public'
  });
  done();
};

const copyFiles = () => src('source/root/**/{*.,.*,*}')
.pipe(plumber())
.pipe(dest('public'))
.pipe(reload());

const copyVideos = () => src('source/media/videos/**/*')
.pipe(plumber())
.pipe(dest('public/vid'))
.pipe(reload());

const js = () => src('source/javascript/index.js', {
  sourcemaps: !production
})
.pipe(plumber())
.pipe(rollup({
  plugins: [
    eslint(),
    resolve(),
    commonjs(),
    production && terser(),
    production && buble()
  ].filter(plugin => plugin)
}, {
  format: 'iife'
}))
.pipe(rename('robin.js'))
.pipe(dest('public/js', {
  sourcemaps: '.'
}))
.pipe(reload());

const css = () => src('source/scss/index.scss', {
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
  env(),
  production && cssnano()
].filter(plugin => plugin)))
.pipe(rename('robin.css'))
.pipe(dest('public/css', {
  sourcemaps: '.'
}))
.pipe(reload());

const html = () => src('source/views/index.hbs')
.pipe(plumber())
.pipe(handlebars({
  data: './source/views/*.data.js',
  partials: './source/views/components/**/*.hbs'
}))
.pipe(rename({
  extname: '.html'
}))
.pipe(dest('public'))
.pipe(reload());

const imgMinimize = () => src([
  'source/media/images/favicon.png',
  'source/media/images/open-graph.png'
])
.pipe(plumber())
.pipe(imagemin())
.pipe(dest('public/img'))
.pipe(reload());

const imgConvertResizeAndOptimize = () => src([
  'source/media/images/agricontrol.jpg',
  'source/media/images/post.jpg',
  'source/media/images/swisspass-smile.jpg',
  'source/media/images/swissplant.jpg'
])
.pipe(plumber())
.pipe(rezzy([{
  width: 800,
  suffix: '-sm'
}, {
  width: 1200,
  suffix: '-md'
}, {
  width: 1600,
  suffix: '-lg'
}]))
.pipe(imagemin())
.pipe(dest('public/img'))
.pipe(webp())
.pipe(dest('public/img'))
.pipe(reload());

const copy = parallel(copyFiles, copyVideos);
const img = parallel(imgMinimize, imgConvertResizeAndOptimize);

const watching = done => {
  watch('source/root/**/{*.,.*,*}', copyFiles);
  watch('source/media/videos/**/*', copyVideos);
  watch('source/**/*.js', js);
  watch('source/**/*.scss', css);
  watch('source/media/images/**/*', img);
  watch('source/**/*.{hbs,data.js}', html);
  done();
};

export default series(clean, copy, parallel(js, css, img, html), serve, open, watching);
export const build = series(clean, copy, parallel(js, css, img, html));
