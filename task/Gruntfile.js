module.exports = function( grunt ){
    "use strict";

    grunt.initConfig( {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.grunt.js' : ['src/task.js', 'src/file.js']
                }
            }
        },
        log: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        }
    } );

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["uglify"]);

    grunt.registerTask('test', ['test1', 'test2']);

    grunt.registerTask('test1', function(){
        var done = this.async();
        grunt.log.writeln('start test1');

        setTimeout(function(){
            grunt.log.writeln('all done');
            done(true);
        }, 1000);
    });

    grunt.registerTask('test2', function(){
        grunt.log.writeln('start test2');
    });

    grunt.registerMultiTask('log', 'Log stuff.', function() {
        grunt.log.writeln(this.target + ': ' + this.data);
    });
};