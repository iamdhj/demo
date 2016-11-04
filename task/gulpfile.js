var gulp = require('gulp'),
    path = require('path'),
    Readable = require('stream').Readable,
    through2 = require('through2'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    revAll = require('gulp-rev-all'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    File = require('vinyl'),
    glob = require('glob'),
    glob2base = require('glob2base'),
    fileVer = require('./gulp-file-ver');

function handle(){
    return through2.obj(function(file, enc, cb){
        var stream = this;

        stream.push(file);
        cb();

        console.log('handle', file.path, file.relative);
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
        .pipe(sourcemaps.write('./', {
            mapFile: function(mapFilePath) {
                // source map files are named *.map instead of *.js.map
                return mapFilePath.replace(/\.\w+\.map$/, '.map');
            }
        }))
        .pipe(gulp.dest('dist/less'));

    // gulp.src('src/less/**/!(main).less', {cwd: process.cwd(), base: '', read: true, buffer: true})
    //     .pipe(handle())
    //     .pipe(gulp.dest('dist/less'));
});

gulp.task('clean', function(){
    // gulp.src('dist/less/**')
    //     .pipe(handle())
        // .pipe(clean({force: true}));

    
    var stream = through2.obj();
    stream.write({
        cwd: process.cwd(),
        base: 'f:\\demo\\task\\dist',
        path: 'f:\\demo\\task\\dist\\task.gulp.js'
    });
    stream.end();
    
    stream.pipe(through2.obj(function(file, enc, cb){
        cb(null, new File(file))
    }, function(callback){
        console.log('second');
    })).pipe(handle());
    
    // console.log(process.cwd() + '\\' + glob2base(new glob.Glob('dist/less/**')));
});

gulp.task('rev', function () {
    return gulp.src('src/less/main.less')
        .pipe(rev())
        .pipe(gulp.dest('dist/rev'))
        .pipe(rev.manifest({
            base: 'dist/rev',
            merge: true // merge with the existing manifest (if one exists)
        }))
        .pipe(gulp.dest('dist/rev'));
});

gulp.task('revAll', function () {
    gulp.src('src/less/res/*')
        .pipe(revAll.revision({
            includeFilesInManifest: ['.jpg', '.png']
        }))
        .pipe(gulp.dest('dist/revAll'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('dist/revAll'));
});

gulp.task('test', function(){
    gulp.src('src/**/*.@(jpg|png)', {read: false})
        .pipe(fileVer.record())
        .pipe(fileVer.revision(['src/less/main.less', 'src/less/init.less']))
        .pipe(gulp.dest('dist/test'));
});

gulp.task('watch', function() {
   gulp.watch('src/less/**', function(file){
       console.log(file.type, file.path, file.path.replace());

       gulp.src(file.path).pipe(handle());
   });
});

