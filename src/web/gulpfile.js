'use strict';
let gulp = require('gulp');

let del = require('del');

let historyApiFallback = require('connect-history-api-fallback');
let browserSync = require('browser-sync').create();

let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');


let target = {
  typescriptSource: [ './app/**/*.ts' ],
  typescriptDest: './dist/app',
  typescriptProject: './tsconfig.json',
  otherSource: [ './*.css', './app/**/*.html' ],

  sourceRoot: '../../app',
  dist: './dist/',
  coverage: './coverage/'
};

gulp.task('clean', function () {
  return del([
    target.dist,
    target.coverage
  ]);
});

gulp.task('scripts', function () {
  var tsProject = ts.createProject(target.typescriptProject);

  // instead of gulp.src(...)
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: target.sourceRoot}))
    .pipe(gulp.dest(target.typescriptDest));
});

gulp.task('other', function () {
  return gulp.src(target.otherSource, { base: './' })
    .pipe(gulp.dest(target.dist));
});


gulp.task('browser-sync', function (cb) {
  // The historyApiFallback is there because we are doing a single page app and index.html
  // needs to be served up for every URL.
  browserSync.init({
    browser: 'google chrome',
    server: {
      baseDir: '.',
      middleware: [ historyApiFallback() ]
    }
  });

  cb();
});

gulp.task('reload', function (cb) {
  browserSync.reload();
  cb();
});

// This watches sets of files and when they change, makes sure they get transpiled or copied and then a browser reload
// happens.
gulp.task('watch', function () {
  gulp.watch(target.typescriptSource, gulp.series('scripts', 'reload'));
  gulp.watch(target.otherSource, gulp.series('other', 'reload'));
});

gulp.task('default', gulp.series('clean', gulp.parallel('scripts', 'other'), 'browser-sync', 'watch'));