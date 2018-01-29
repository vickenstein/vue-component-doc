module.exports = (grunt) => {
  return {
    components: {
      files: [
        {
          src: 'src/**/*.vue',
          dest: 'dist/',
          ext: '.js'
        }
      ]
    }
  }
}
