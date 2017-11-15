
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        ///* Copy vendor modules
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        copy: {

            ///* LesliCSS Framework
            LesliCSS: {
                expand: true,
                cwd: 'node_modules/leslicss/',
                src: 'src/**/*',
                dest: 'Template/css/lesli/',
            },

            ///* LesliCSS Framework - init file
            LesliCSSIndex: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: 'node_modules/leslicss/index.styl',
                dest: 'Template/css/lesli/'
            },

            ///* Reveal framework
            Reveal: {
                files: [{
                    expand: true, filter: 'isFile', flatten: true,
                    src: ['node_modules/reveal.js/js/reveal.js'],
                    dest: 'Template/js/'
                },{
                    expand: true, filter: 'isFile', flatten: true,
                    src: ['node_modules/reveal.js/css/reveal.css'],
                    dest: 'Template/css'
                }]
            }

        },



        ///* Compile stylus to css
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        stylus:{
            compile_only:{

                options:{ 'include css': true, 'compress': false },
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['**/css/*.styl'],
                    dest: './',
                    ext: '.css',
                    extDot: 'first'
                }],

            },
            compile_minify:{

                options:{ 'include css': true, 'compress': true },
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['**/css/*.styl'],
                    dest: './',
                    ext: '.min.css',
                    extDot: 'first'
                }],

            }
        },


        ///* Watch
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        watch: {
            stylus:{
                files: ['**/css/*.styl'],
                tasks: ['stylus:compile_only']
            }
        }

    });



    ///* Including plugins and dependencies
    ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');



    ///* Defining Development tasks
    ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
    grunt.registerTask('vendor', ['copy']);
    grunt.registerTask('compile', ['stylus:compile_only']);
    grunt.registerTask('deploy', ['copy', 'stylus']);


};
