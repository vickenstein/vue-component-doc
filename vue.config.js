const typescript = require("typescript")

module.exports = {
  customCompilers: {
      typescript(content , callback) {
        const result = typescript.transpileModule(content, {compilerOptions: {}})
        callback(null, result.outputText)
      }
  }
}
