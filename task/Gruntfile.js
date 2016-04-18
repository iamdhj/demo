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
        }
    } );

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask ( "default", [ "uglify" ] );
};