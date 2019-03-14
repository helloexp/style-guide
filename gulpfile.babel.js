'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
// var rename = require('gulp-rename');
var connect = require('gulp-connect');


sass.compiler = require('node-sass');

var paths = {
  desktop: ['./src/styles/desktop.scss'],
  mobile: ['./src/styles/mobile.scss'],


}
var autoprefixerOptions = {
  browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
};



export function styleDesktop() {
  return gulp.src('./src/styles/desktop.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/styles/'))

}

export function styleMobile() {
  return gulp.src('./src/styles/mobile.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/styles/'))

}



export function watch() {
  gulp.watch(paths.desktop, styleDesktop);
  gulp.watch(paths.mobile, styleMobile);

}
exports.default = watch;