const compiler = require('vueify').compiler
compiler.loadConfig()

module.exports = (grunt) => {
  grunt.registerTask('vueify', 'compile single file components', function() {
    grunt.file.expandMapping('**/*.vue', 'dist', {
      cwd: 'src'
    }).forEach((mapping) => {
      const src = mapping.src[0]
      const dest = mapping.dest
      compiler.compile(grunt.file.read(src), src, (error, result) => {
        grunt.file.write(`${dest}.js`, result)
      })
    })
  })
}
