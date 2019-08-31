const gulp = require('gulp');
const open = require('open');
const del = require('del');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const noop = require('gulp-noop');
const stylelint = require('gulp-stylelint');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const { eslint } = require('rollup-plugin-eslint');

const devEnv = process.argv.includes('--dev');

gulp.task('clean', () => del('dist/'));
gulp.task('open', () => open('http://localhost:8080'));

gulp.task('serve', done => {
    connect.server({
        port: 8080,
        livereload: true,
        root: 'dist/'
    });
    done();
});

gulp.task('css:transpile', () => {
    return gulp.src('src/scss/app.scss', {
            sourcemaps: devEnv
        })
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(!devEnv ? postcss([
            autoprefixer(),
            cssnano()
        ]) : noop())
        .pipe(gulp.dest('dist/css/', {
            sourcemaps: '.'
        }))
        .pipe(connect.reload());
});

gulp.task('css:lint', () => {
    return gulp.src('src/scss/**/*')
        .pipe(plumber())
        .pipe(devEnv ? stylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }) : noop());
});

gulp.task('js', () => {
    return gulp.src('src/js/app.js', {
            sourcemaps: devEnv
        })
        .pipe(plumber())
        .pipe(rollup({
            plugins: [
                resolve(),
                commonjs(),
                eslint(),
                babel(),
                ...(!devEnv ? [terser()] : [])
            ]
        }, {
            format: 'iife'
        }))
        .pipe(gulp.dest('dist/js/', {
            sourcemaps: '.'
        }))
        .pipe(connect.reload());
});

gulp.task('img', () => {
    return gulp.src('src/img/**/*')
        .pipe(plumber())
        .pipe(devEnv ? noop() : imagemin([
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 7
            }),
            imagemin.svgo(),
            imagemin.gifsicle({
                interlaced: true,
                optimizationLevel: 3
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('dist/img/'))
        .pipe(connect.reload());
});

gulp.task('files', () => {
    return gulp.src([ 'src/{*,}.*', 'src/video/**/*', 'src/img/*.webp' ] , {
            base: 'src'
        })
        .pipe(plumber())
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});


gulp.task('watch:css', done => {
    gulp.watch('src/scss/**/*', gulp.parallel('css:lint', 'css:transpile'));
    done();
});

gulp.task('watch:js', done => {
    gulp.watch('src/js/**/*', gulp.parallel('js'));
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

gulp.task('watch', gulp.parallel('watch:css', 'watch:js', 'watch:img', 'watch:files'));
gulp.task('build', gulp.series('clean', gulp.parallel('js', 'css:lint', 'css:transpile', 'img', 'files')));
gulp.task('default', gulp.series('build', 'serve', 'open', 'watch'));
