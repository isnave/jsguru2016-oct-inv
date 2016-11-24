module.exports = function (grunt) {

    grunt.initConfig( {
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: ".",
                    keepalive: true
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    './css/styles.css': './less/styles.less'
                }
            }
        },
        watch: {
            files: ['./less**/*.less'],
            tasks: ['less'],
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-connect' );

    grunt.loadNpmTasks( 'grunt-contrib-less' );

    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.registerTask( "default", ["less", "connect"] );

};