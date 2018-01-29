<template lang="pug">
  .demo
    component_doc(v-for="component in components", :component="component")
</template>

<script lang="typescript">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'
  import * as basic_component from './basic_component.vue'
  import * as complex_class_component from './complex_object_component.vue'

  @Component
  export default class Demo extends Vue {
    components = [
      basic_component
      complex_class_component
    ]
  }
</script>
