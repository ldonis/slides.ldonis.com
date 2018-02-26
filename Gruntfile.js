
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
            LesliCSSIndex:{
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: 'node_modules/leslicss/index.styl',
                dest: 'Template/css/lesli/'
            }

        },



        ///* Compile stylus to css
        ///* ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~  ~·~
        stylus:{
            compile_only:{
                options:{ 'include css': true, 'compress': false },
                files: [{
                    expand: true,   // Enable dynamic expansion.
                    cwd: './',      // Src matches are relative to this path.
                    src: ['**/css/*.styl', '!Template/**'], // Actual pattern(s) to match.
                    dest: './',     // Destination path prefix.
                    ext: '.css',    // Dest filepaths will have this extension.
                    extDot: 'first' // Extensions in filenames begin after the first dot
                }]
            },
            compile_minify:{
                options:{ 'include css': true, 'compress': true },
                files: [{
                    expand: true,   // Enable dynamic expansion.
                    cwd: './',      // Src matches are relative to this path.
                    src: ['**/css/*.styl', '!Template/**'], // Actual pattern(s) to match.
                    dest: './',     // Destination path prefix.
                    ext: '.min.css',    // Dest filepaths will have this extension.
                    extDot: 'first' // Extensions in filenames begin after the first dot
                }]
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
    grunt.registerTask('compile',['stylus:compile_only']);
    grunt.registerTask('deploy', ['copy', 'stylus']);


};
