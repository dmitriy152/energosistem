const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');

gulp.task('scss', function () {
  return gulp.src([
      './src/app/scss/variables.scss',
      './src/app/scss/mixin.scss',
      './src/app/scss/style.scss',
      './src/**/*.scss',
    ])
    .pipe(concat("style.scss"))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./src/app/css'));
});
gulp.task('watch', function () {
  gulp.watch('./src/app/**/*.scss', gulp.series('scss',));
});

gulp.task('default', gulp.series('scss', 'watch'));