var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require ('gulp-sass');
var sourcemaps = require ('gulp-sourcemaps')

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', function() {
  browserSync ({
    server: 'src'
  });
  gulp.watch('src/**/**/*.html', ['reload']);
  gulp.watch('src/style/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['reload']);
});

gulp.task('sass', function() {
    return gulp.src('src/style/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/style/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
