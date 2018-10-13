var gulp = require("gulp");
var yaml = require("gulp-yaml");

gulp.task("yaml", () =>
    gulp.src("syntaxes/*.yaml")
        .pipe(yaml({
            space: 2,
            schema: "DEFAULT_FULL_SCHEMA"
        }))
        .pipe(gulp.dest("syntaxes/"))
);