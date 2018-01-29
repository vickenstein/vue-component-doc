const component_doc = require('./component_doc.vue')

module.exports = {
  install(Vue, options) {
    Vue.component('component-doc', component_doc)
  }
}
