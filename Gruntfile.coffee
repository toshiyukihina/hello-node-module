module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig(
    # Task configuration.
    jshint:
      options:
        jshintrc: '.jshintrc'
      all: ['lib/**/*.js', 'test/**/*.js']
    watch:
      coffee:
        files: ['src/*.coffee', 'test/*.coffee']
        tasks: ['coffee', 'jshint']
    coffee:
      compile:
        files: [{
          expand: true
          cwd: 'src/'
          src: ['**/*.coffee']
          dest: 'lib/'
          ext: '.js'
        }, {
          expand: true
          cwd: 'test/'
          src: ['**/*.coffee']
          dest: 'test/'
          ext: '.js'
        }]
  )

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')

  # Default task.
  grunt.registerTask('default', ['jshint'])
  grunt.registerTask('build', ['coffee', 'jshint'])

