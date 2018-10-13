var gulp = require("gulp");
var yaml = require("gulp-yaml");

gulp.task("yaml", () =>
    gulp.src("syntaxes/*.yaml")
        .pipe(yaml())
        .pipe(gulp.dest("syntaxes/"))
);

gulp.task("yaml:watch", () =>
    gulp.watch("syntaxes/*.yaml", [ "yaml" ])
);

gulp.task("watch", [ "yaml:watch" ]);