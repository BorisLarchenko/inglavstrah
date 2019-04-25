var gulpfile = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");
var imagemin = require("gulp-imagemin");
var run = require("run-sequence");
var plumber = require('gulp-plumber');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var posthtml = require('gulp-posthtml');
var include = require('posthtml-include');
var sourcemaps = require('gulp-sourcemaps');
var csso = require('gulp-csso');

gulpfile.task('clean-prod', function () {
  return del('./build');
});

gulpfile.task("images-prod", function () {
  return gulpfile.src("./source/img/**/*.{png,jpg,svg,gif}")
   /* .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))*/
    .pipe(gulpfile.dest("./build/img"));
});

gulpfile.task('style-prod', function () {
  return gulpfile.src('./source/less/style.less')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    // .pipe(sourcemaps.write(''))
    .pipe(gulpfile.dest('./build/css'))

    .pipe(rename('style.min.css'))
    .pipe(csso({
      restructure: false,
      sourceMap: true,
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulpfile.dest('./build/css/'))
    .pipe(server.stream());
});

gulpfile.task("serve-prod", ["style-prod"], function () {
  server.init({
    server: "./build"});
  gulpfile.watch("./source/less/**/*.less", ["style-prod"]).on('change', server.reload);
  gulpfile.watch(["./source/*.html" , './source/html-modules/*.html'], ['copy-html-js']).on('change', server.reload);
  gulpfile.watch("source/img/**/*.{png,jpg,svg}", {cwd:'./'}, ['images-prod']);
  gulpfile.watch("./source/**/*.js", ['copy-html-js']).on('change', server.reload);
});

gulpfile.task('copy-html-js', function(){
  return gulpfile.src('source/*.html')
    .pipe(plumber())
    .pipe(posthtml([
      include()
    ]))

    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpfile.dest('build'))
});

gulpfile.task('copy-fonts' , function () {
  return gulpfile.src('./source/fonts/**/*')
    .pipe(gulpfile.dest('./build/fonts'));
});


//DONE make posthtml available to make includes svg and html in the project
gulpfile.task("build", function (done) {
  run(
    "clean-prod",
    'copy-fonts',
    "images-prod",
    "style-prod",
    "copy-html-js",
    done
  );
});
