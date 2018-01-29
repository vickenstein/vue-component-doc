module.exports = (grunt) => {
  const tsify = require("tsify");
  const vueify = require('vueify')
  const babelify = require('babelify')

  return {
    options: {
      transform: [vueify, [babelify, { "presets": "babel-preset-es2015" }]],
      plugin: [tsify],
      watch: true
    },
    dist: {
      files: {
        'dist/index.js': 'demo/index.js'
      }
    }
  }
}
