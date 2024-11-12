const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('../main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../'));
});

gulp.task('default', gulp.series('styles', function() {
    gulp.watch('../**/*.scss', ['styles']);
}));