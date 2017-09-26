const gulp = require('gulp'),
    watch = require('gulp-watch');


gulp.task('watch', function() {

    watch('./styles/**/*.css', () => {
        gulp.start('styles');
    });

});