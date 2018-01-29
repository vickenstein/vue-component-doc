module.exports = (grunt) => {
  return {
    options: {
      sourceMap: false,
      rootDir: 'src'
    },
    default : {
      src: ["src/**/*.ts"],
      outDir: 'dist'
    }
  }
}
