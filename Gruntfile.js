var postcss = function(){
    return require('poststylus');
}

module.exports = function(grunt) {

    grunt.initConfig({

        stylus: {
            compile: {
                options: {
                    use: [postcss]
                },
                src: ['css/styles.styl'],
                dest: 'css/styles.css'
            }
        },

        watch: {
            css: {
                files: ['css/*.styl', 'css/**/*.styl'],
                tasks: ['stylus', 'postcss']
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/styles.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-postcss');

};
