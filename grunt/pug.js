module.exports = (grunt) => {
  return {
    compile: {
      files: {
        'dist/index.html': 'demo/index.pug'
      }
    }
  }
}
