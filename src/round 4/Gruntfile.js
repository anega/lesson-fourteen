module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        clean: {
            js: ['public/js'],
            partials: ['public/partials']
        },
        copy: {
            partials: {
                files: [
                    {expand: true, cwd: 'src/partials', src: ['**'], dest: 'public/partials'}
                ]
            }
        },
        ngmin: {
            dist: {
                src: ['src/js/**/*.js'],
                dest: 'public/js/main.js'
            }
        },
        uglify: {
            dist: {
                src: 'public/js/main.js',
                dest: 'public/js/main.min.js'
            }
        },
        processhtml: {
            dist: {
                files: {
                    'public/index.html': ['src/index.html']
                }
            }
        },
        watch: {
            js: {
                files: ['src/js/*'],
                tasks: ['clean:js', 'ngmin', 'uglify']
            },
            partials: {
                files: ['src/partials/*'],
                tasks: ['clean:partials', 'copy:partials']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['processhtml']
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Tasks
    grunt.registerTask('default', ['clean', 'copy', 'ngmin', 'uglify', 'processhtml']);
};
