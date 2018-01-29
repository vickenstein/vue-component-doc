var component_doc = require('./dist/component_doc.vue')

module.exports = {
  install(Vue, options) {
    Vue.component('component-doc', component_doc)
  }
}
