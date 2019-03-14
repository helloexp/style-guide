'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
 


sass.compiler = require('node-sass');

var paths = {
  desktop: ['./src/styles/desktop.scss'],
  mobile: ['./src/styles/mobile.scss'],


}
var autoprefixerOptions = {
  browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
};



export function styleDesktop() {
  return gulp.src('./src/styles/desktop/desktop.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/styles/'))

}

export function styleMobile() {
  return gulp.src('./src/styles/mobile/mobile.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/styles/'))

}


export function styleGlobal() {
  return gulp.src('./src/styles/global/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/styles/'))

}



export function watch() {
  gulp.watch('./src/styles/**/*.scss', styleDesktop);
  gulp.watch('./src/styles/**/*.scss', styleMobile);
  gulp.watch('./src/styles/**/*.scss', styleGlobal);
}
exports.default = watch;