const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
});

gulp.task('default', ['style'], function() {
    gulp.watch('style/**/*.scss', ['styles']);
});