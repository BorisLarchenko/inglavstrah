var gulpfile = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var  minifyCss = require("gulp-minify-css");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");
var imagemin = require("gulp-imagemin");
var run = require("run-sequence");
var plumber = require('gulp-plumber');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulpfile.task('clean-prod', function () {
  return del('./build');
});

gulpfile.task("images-prod", function () {
  return gulpfile.src("./source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulpfile.dest("./build/img"));
});

gulpfile.task('style-prod', function () {
  return gulpfile.src('./source/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulpfile.dest('./build/css'))
    .pipe(rename('style.min.css'))
    .pipe(minifyCss())
    .pipe(gulpfile.dest('./build/css/'))
    .pipe(server.stream());
});

gulpfile.task("serve-prod", ["style-prod"], function () {
  server.init({
    server: "./build"});
  gulpfile.watch("./source/less/**/*.less", ["style-prod"]);
  gulpfile.watch("./source/*.html", ['copy-html-js']).on('change', server.reload);
  gulpfile.watch("source/img/**/*.{png,jpg,svg}", {cwd:'./'}, ['images-prod']);
  gulpfile.watch("./source/**/*.js", ['copy-html-js']).on('change', server.reload);
});

gulpfile.task('copy-html-js', function(){
  return gulpfile.src('source/*.html')
    .pipe(plumber())
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpfile.dest('build'))
});

gulpfile.task('copy-fonts' , function () {
  return gulpfile.src('./source/fonts/**/*')
    .pipe(gulpfile.dest('./build/fonts'));
});

gulpfile.task("build", function (done) {
  run(
    "clean-prod",
    "copy-html-js",
    'copy-fonts',
    "images-prod",
    "style-prod",
    done
  );
});
