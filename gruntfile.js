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
        },
        phantom: {
            options: {
                port: 4444
            },
            your_target: {},
            another_target: {
                options: {
                    port: 5555
                }
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-connect' );

    grunt.loadNpmTasks( 'grunt-contrib-less' );

    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.loadNpmTasks( 'grunt-phantom' );

    grunt.registerTask( "default", ["less", "connect", "phantom"] );

};