const ElementUI = require('element-ui')
const Demo = require('./index.vue')
const Vue = require('vue')

Vue.use(ElementUI)
Vue.component('component_doc', require('../src/component_doc.vue'))

console.log(require('../dist/src/component_doc.vue'))


new Vue({
  el: '#app',
  render: h => h(Demo)
})

