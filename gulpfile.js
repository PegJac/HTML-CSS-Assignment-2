let gulp = require('gulp'); 
let sass = require('gulp-sass'); 
let csso = require('gulp-csso'); 
let rename = require('gulp-rename');

gulp.task("scss-komp", function() { 
  return gulp.src("scss/*.scss") 
    .pipe(sass()) 
    .pipe(gulp.dest("css")) 
    .pipe(csso()) 
    .pipe(rename({extname:'.min.css'}))
    .pipe(gulp.dest("dist/css"));
  }); 

  gulp.task("watch-scss", function() { 
    gulp.watch("scss/*.scss", gulp.series("scss-komp")); 
  }); 

  gulp.task("default", gulp.series("scss-komp", "watch-scss"), function() { 
  });