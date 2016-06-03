var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass()) // converts sass to css with gulp-sass
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync'], function() {
	gulp.watch("scss/**/*.scss", ['sass']);
	gulp.watch("**/*.html", browserSync.reload);
	gulp.watch("js/**/*.js", browserSync.reload);
});

gulp.task("browserSync", function() {
	browserSync.init({
		server: {
			baseDir: "."
		},
		port: 8792,
		browser: "google chrome"
	});
});

gulp.task("default", function(callback) {
	runSequence(['sass', 'browserSync', 'watch'], callback);
});

/* build task */

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('useref', function() {
	return gulp.src('*.html')
		.pipe(useref())
		// minifies only if it's a javascript file
		.pipe(gulpIf('js/*.js', uglify()))
		// minifies only if it's a css file
		.pipe(gulpIf('css/*.css', cssnano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('build', function(callback) {
	runSequence(['sass', 'useref'], callback);
});

/* deploy */

var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', function() {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});