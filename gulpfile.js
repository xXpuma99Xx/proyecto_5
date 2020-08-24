const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const css = () => {
  return gulp
    .src("./scss/main.scss")
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(
      sass({
        outputStyle: "expanded"
        // outputStyle: "compressed"
      })
    )
    .pipe(gulp.dest("./css"));
};

const watchFiles = () => {
  gulp.watch("./scss/*.scss", css);
};

gulp.task("watch", watchFiles);


