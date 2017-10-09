const gulp = require('gulp');
const watch = require('gulp-watch');


gulp.task('watch', function() {

    watch('./styles/**/*', () => {
        gulp.start('styles');
    });
});