var fs = require("fs");
var gulp = require("gulp");
var concat = require("gulp-concat");
const replace = require("gulp-replace");
var minify = require("gulp-minify");
var cleanCss = require("gulp-clean-css");
var sass = require("gulp-sass")(require("sass"));
var browserSync = require("browser-sync").create();

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("pack-js", function () {
  var fileContent = fs.readFileSync("app.html", "utf8");
  return gulp
    .src(["app.js"])
    .pipe(replace("$APP_TEMPLATE$", fileContent))
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
        noSource: true,
        mangle: true,
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("pack-style", function () {
  return gulp
    .src(["inclue.scss"])
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest("build"));
});

gulp.task("reload", function (done) {
  browserSync.reload();
  done();
});

// Static Server and watching scss/html files
gulp.task("serve", function (done) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("*.js", gulp.series("pack-js"));
  gulp.watch("./*.scss", gulp.series("pack-style", "reload"));
  gulp.watch("./app.html", gulp.series("pack-js", "reload"));
  done();
});

gulp.task("default", gulp.series("pack-js", "pack-style"));
