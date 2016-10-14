var gulp = require('gulp'),
    path = require('path'),
    Readable = require('stream').Readable,
    through = require('through2'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    revAll = require('gulp-rev-all'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css');

function handle(){
    return through.obj(function(file, enc, cb){
        var stream = this;

        stream.push(file);
        cb();

        console.log('handle', file.contents, file.relative);
    });
}

gulp.task('build', function(){
    gulp.src(['src/js/*'])
        .pipe(concat('task.gulp.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('buildLess', function(){
    gulp.src('src/less/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/less'));

    gulp.src('src/less/**/!(main).less', {cwd: process.cwd(), base: '', read: true, buffer: true})
        .pipe(handle())
        .pipe(gulp.dest('dist/less'));
});

gulp.task('clean', function(){
    gulp.src('src/dist/**').pipe(clean({force: true}))
});

gulp.task('rev', function () {
    return gulp.src('src/less/init.less')
        .pipe(rev())
        .pipe(gulp.dest('dist/rev'))
        .pipe(rev.manifest({
            base: 'dist/rev',
            merge: true // merge with the existing manifest (if one exists)
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('revAll', function () {
    var revAll = new RevAll();
    gulp.src('src/less/init.less')
        .pipe(revAll.revision())
        .pipe(gulp.dest('dist/revAll'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('dist/revAll'));
});

gulp.task('watch', function() {
   gulp.watch('src/less/**', function(file){
       console.log(file.type, file.path, file.path.replace());

       gulp.src(file.path).pipe(handle());
   });
});
