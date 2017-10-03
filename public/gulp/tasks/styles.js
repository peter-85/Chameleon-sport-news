//  const gulp = require('gulp'),
//      postcss = require('gulp-postcss'),
//      autoprefixer = require('autoprefixer'),
//      cssvars = require('postcss-simple-vars'),
//      nested = require('postcss-nested'),
//      cssImport = require('postcss-import'),
//      mixins = require('postcss-mixins'),
//      hexrgba = require('postcss-hexrgba');
//  const rename = require('gulp-rename');
//  const sass = require('gulp-sass');


//  gulp.task('styles', () => {
//      return gulp.src('./styles/*')
//          //  .pipe(sass().on('error', sass.logError))
//          .pipe(postcss([cssImport, mixins, nested, cssvars, hexrgba, autoprefixer]))
//          .on('error', (errorInfo) => {
//              console.log(errorInfo.toString());
//              this.emit('end');
//          })
//          //  .pipe(rename('styles.css'))
//          .pipe(gulp.dest('./temp/styles/'));
//  });

const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');
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