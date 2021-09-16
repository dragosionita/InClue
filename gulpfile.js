var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});

gulp.task('pack-js', function () {    
    return gulp.src(['app.js'])
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true,
            mangle: true
        }))
        .pipe(gulp.dest('build'));
});
 
gulp.task('pack-style', function () {
    return gulp.src(['inclue.css'])
        .pipe(cleanCss())
        .pipe(gulp.dest('build'));
});

gulp.task('serve', gulp.series['pack-style'], function() {

  browserSync.init({
      server: "./app"
  });

  gulp.watch("*.css", ['pack-style']);
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("*.js", ['pack-js']);
});

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

// Static Server and watching scss/html files
gulp.task('serve', function(done){
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.css", gulp.series('pack-style', 'reload'));
  gulp.watch("./*.html", browserSync.reload);
  done();
});
 
gulp.task('default', gulp.series('pack-js', 'pack-style'));