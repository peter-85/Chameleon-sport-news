const gulp = require('gulp');
const minify = require('gulp-minify');


gulp.task('minify', () => {
    return gulp.src(['./scripts/**/*.js', './configs/*.js'])
        .pipe(minify({
            noSource: '.js',
        }))
        .pipe(gulp.dest('./dist/scripts'));
});