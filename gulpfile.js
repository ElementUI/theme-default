'use strict';

var { src, dest, series } = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

function compile() {
  return src('./src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}
function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}

exports.default = series(compile, copyfont)
