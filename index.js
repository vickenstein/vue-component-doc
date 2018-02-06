const component_doc = require('./dist/component_doc.vue')
const element_ui = require('element_ui')
const locale = require('element_ui/lib/locale/lang/en')

module.exports = {
  install(Vue, options) {
    Vue.use(element_ui, { locale })
    Vue.component('component-doc', component_doc)
  }
}
