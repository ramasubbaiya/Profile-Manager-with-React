const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile Sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
});

// Watch Sass, html and Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['src/scss/*.scss'], ['sass']).on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

// TODO : Minify or Uglify

// Default 
gulp.task('default', ['serve']);