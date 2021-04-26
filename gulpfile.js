const { exec } = require('child_process');
const { series, parallel, watch, src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const { server, reload } = require('gulp-connect');
const sass = require('@rbnlffl/gulp-sass');
const rollup = require('@rbnlffl/gulp-rollup');
const postcss = require('gulp-postcss');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const rezzy = require('gulp-rezzy');
const webp = require('gulp-webp');
const handlebars = require('gulp-hb');

const stylelint = require('stylelint');
const scss = require('postcss-scss');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');

const eslint = require('@rbnlffl/rollup-plugin-eslint');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const production = process.argv.includes('--prod');

const clean = done => {
  exec('rm -rf public', () => {
    done();
  });
};

const serve = done => {
  server({
    livereload: true,
    root: 'public'
  });

  exec('open http://localhost:8080', () => {
    done();
  });
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
    production && terser()
  ].filter(plugin => plugin)
}, {
  format: 'es'
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
  data: 'source/views/**/*.data.js',
  partials: 'source/views/components/**/*.hbs'
}))
.pipe(rename({
  extname: '.html'
}))
.pipe(dest('public'))
.pipe(reload());

const imgMinimize = () => src([
  'source/media/images/favicon.png'
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

const watchSources = done => {
  watch('source/root/**/{*.,.*,*}', copyFiles);
  watch('source/media/videos/**/*', copyVideos);
  watch('source/**/*.js', js);
  watch('source/**/*.scss', css);
  watch('source/media/images/**/*', img);
  watch('source/**/*.{hbs,data.js}', html);
  done();
};

module.exports.default = series(clean, copy, parallel(js, css, img, html), serve, watchSources);
module.exports.build = series(clean, copy, parallel(js, css, img, html));
