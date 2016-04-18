var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('build', function(){
    gulp.src(['src/*'])
        .pipe(concat('task.gulp.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});