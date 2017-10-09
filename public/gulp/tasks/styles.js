const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');
const rucksack = require('rucksack-css');
const sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('./styles/*.css')
        // .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssImport, mixins, nested, cssvars, hexrgba, autoprefixer, rucksack]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./temp/styles'));
});