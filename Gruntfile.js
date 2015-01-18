/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: [
          './{,*/}*.js'
        ]
      }
    },

    watch: {
      coffee: {
        files: './{,*/}*.coffee',
        tasks: ['coffee', 'jshint']
      }
    },

    coffee: {
      compile: {
        files: [{
          expand: true,
          src: ['./{,*/}*.coffee'],
          ext: '.js'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['coffee', 'jshint']);
};
