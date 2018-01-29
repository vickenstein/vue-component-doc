module.exports = (grunt) => {
  require('load-grunt-config')(grunt)

  grunt.registerTask('default', ['pug', 'browserify:test', 'browserSync', 'watch'])
}
