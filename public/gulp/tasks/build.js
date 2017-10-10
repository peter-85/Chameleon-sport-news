const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');

// when building everytime first delete old project and then write the new one
gulp.task('deleteDistFolder', function() {
    return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], () => {
    return gulp.src(['./images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('usemin', ['deleteDistFolder', 'styles'], function() {
    return gulp.src('./index.html')
        .pipe(usemin({
            css: [function() { return rev() }, function() { return cssnano() }],
            // js: [function() { return rev() }, function() { return uglify() }]
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin', 'minify']);