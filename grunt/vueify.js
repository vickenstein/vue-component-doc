module.exports = (grunt) => {
  return {
    components: {
      files: [
        {
          expand: true,
          src: 'src/**/*.vue',
          dest: 'dist/',
          ext: '.vue.js'
        }
      ]
    }
  }
}
