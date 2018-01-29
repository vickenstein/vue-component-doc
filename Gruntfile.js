module.exports = (grunt) => {
  require('load-grunt-config')(grunt)

  grunt.registerTask('default', ['pug', 'browserify', 'browserSync', 'watch'])
  grunt.registerTask('dist', ['env:production', 'ts', 'vueify'])
}
