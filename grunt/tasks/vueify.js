const compiler = require('vueify').compiler
compiler.loadConfig()

module.exports = (grunt) => {
  grunt.registerTask('vueify', 'compile single file components', function() {
    const done = this.async()
    const mapping = grunt.file.expandMapping('**/*.vue', 'dist', {
      cwd: 'src'
    })
    let finished = 0
    mapping.forEach((mapping) => {
      const src = mapping.src[0]
      const dest = mapping.dest
      compiler.compile(grunt.file.read(src), src, (error, result) => {
        grunt.file.write(`${dest}.js`, result)
        finished++
        if (finished === mapping.length) {
          done()
        }
      })
    })
  })
}
