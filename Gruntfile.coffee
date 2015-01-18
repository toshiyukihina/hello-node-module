module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig(
    # Task configuration.
    jshint:
      options:
        jshintrc: '.jshintrc'
      all:
        src: './{,*/}*.js'
    watch:
      coffee:
        files: './{,*/}*.coffee'
        tasks: ['coffee', 'jshint']
    coffee:
      compile:
        files: [
          expand: true,
          src: ['./{,*/}*.coffee']
          ext: '.js'
        ]
  )

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')

  # Default task.
  grunt.registerTask('default', ['jshint'])
  grunt.registerTask('build', ['coffee', 'jshint'])

