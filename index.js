const component_doc = require('./dist/component_doc.vue')
const ElementUi = require('element-ui')
const locale = require('element-ui/lib/locale/lang/en')

module.exports = {
  install(Vue, options) {
    Vue.use(ElementUi, { locale })
    Vue.component('component-doc', component_doc)
  }
}
