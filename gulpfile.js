const gulp = require('gulp');
const open = require('open');
const del = require('del');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
const sass = require('@rbnlffl/gulp-sass');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const filter = require('gulp-filter');
const rezzy = require('gulp-rezzy');
const postcss = require('gulp-postcss');
const postcssScss = require('postcss-scss');
const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssEnv = require('postcss-preset-env');
const { rollup } = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const eslint = require('@rbnlffl/rollup-plugin-eslint');
const { terser } = require('rollup-plugin-terser');

const development = process.argv.includes('--dev');


gulp.task('clean', () => del('dist'));

gulp.task('serve', done => {
  connect.server({
    livereload: true,
    root: 'dist'
  });

  open('http://localhost:8080');
  done();
});

gulp.task('js', async () => {
  const bundle = await rollup({
    input: 'src/js/page.js',
    plugins: [
      eslint(),
      nodeResolve(),
      commonjs(),
      !development && terser({
        output: {
          comments: false
        }
      })
    ].filter(p => p)
  });

  await bundle.write({
    sourcemap: development,
    file: 'dist/js/page.js',
    format: 'iife'
  });
});

gulp.task('css', () => gulp.src('src/scss/**/*.scss', {
      sourcemaps: development
    })
    .pipe(plumber())
    .pipe(postcss([
      stylelint()
    ], {
      parser: postcssScss
    }))
    .pipe(sass())
    .pipe(postcss([
      cssEnv(),
      !development && autoprefixer(),
      !development && cssnano()
    ].filter(p => p), {
      parser: postcssScss
    }))
    .pipe(gulp.dest('dist/css', {
      sourcemaps: '.'
    }))
    .pipe(connect.reload()));

gulp.task('img', () => {
  const f1 = filter([ '**', '!**/{favicon,og}*' ], {
    restore: true
  });
  const f2 = filter([ '**', '!**/{agricontrol,swissplant}.jpg' ]);
  const f3 = filter([ '**', '!**/{favicon,og}*' ]);

  return gulp.src('src/img/**/*')
    .pipe(plumber())
    .pipe(f1)
    .pipe(rezzy([{
      width: 800,
      height: 600,
      suffix: '-sm'
    }, {
      width: 1200,
      height: 900,
      suffix: '-md'
    }, {
      width: 1600,
      height: 1200,
      suffix: '-lg'
    }]))
    .pipe(f1.restore)
    .pipe(f2)
    .pipe(imagemin([
      imagemin.mozjpeg(),
      imagemin.optipng({
        optimizationLevel: 7
      })
    ], {
      verbose: development
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(f3)
    .pipe(webp())
    .pipe(gulp.dest('dist/img'))
    .pipe(connect.reload());
});

gulp.task('files', () => gulp.src([
      'src/{*,}.*',
      'src/video/**/*'
    ], {
      base: 'src'
    })
    .pipe(plumber())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload()));

gulp.task('watch:js', done => {
  gulp.watch('src/js/**/*', gulp.parallel('js'));
  done();
});

gulp.task('watch:css', done => {
  gulp.watch('src/scss/**/*', gulp.parallel('css'));
  done();
});

gulp.task('watch:img', done => {
  gulp.watch('src/img/**/*', gulp.parallel('img'));
  done();
});

gulp.task('watch:files', done => {
  gulp.watch('src/{*,}.*', gulp.parallel('files'));
  done();
});

gulp.task('watch', gulp.parallel('watch:js', 'watch:css', 'watch:img', 'watch:files'));
gulp.task('build', gulp.series('clean', gulp.parallel('js', 'css', 'img', 'files')));
gulp.task('default', gulp.series('build', 'serve', 'watch'));
