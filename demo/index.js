const ElementUI = require('element-ui')
const locale = require('element-ui/lib/locale/lang/en')
const Demo = require('./index.vue')
const Vue = require('vue')

Vue.use(ElementUI, { locale })
Vue.component('component_doc', require('../src/component_doc.vue'))

new Vue({
  el: '#app',
  render: h => h(Demo)
})

