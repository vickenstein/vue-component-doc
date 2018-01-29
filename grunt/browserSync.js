module.exports = (grunt) => {
  return {
    bsFiles: {
      src : ['dist/**/*.css', 'dist/**/*.js', 'dist/**/*.html']
    },
    options: {
      watchTask: true,
      server: {
        baseDir: "dist"
      },
      open: true
    }
  }
}
