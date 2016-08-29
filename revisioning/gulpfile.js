var gulp = require('gulp');
var rev = require('gulp-rev');
var RevAll = require('gulp-rev-all');

gulp.task('rev', function () {
    return gulp.src('src/*')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest({
            base: 'dist',
            merge: true // merge with the existing manifest (if one exists)
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('revAll', function () {
    var revAll = new RevAll();
    gulp.src('src/*')
        .pipe(revAll.revision())
        .pipe(gulp.dest('dist'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('dist'));
});