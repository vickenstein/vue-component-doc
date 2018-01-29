module.exports = (grunt) => {
  return {
    default : {
      rootDir: 'src',
      src: ["src/**/*.ts"],
      outDir: 'dist',
      sourceMap: false
    }
  }
}
