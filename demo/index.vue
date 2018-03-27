<template lang="pug">
  .demo
    component_doc(v-for="component in components", :component="component")
    component_doc(:component="components[3]", :presets="presets")
    component_doc(:component="components[3]", :full_screen="true")
</template>

<script lang="typescript">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'
  import * as basic_component from './basic_component.vue'
  import * as complex_object_component from './complex_object_component.vue'
  import * as complex_extend_component from './complex_extend_component.vue'
  import * as complex_class_component from './complex_class_component.vue'

  @Component
  export default class Demo extends Vue {
    components = [
      basic_component,
      complex_object_component,
      complex_extend_component,
      complex_class_component
    ]
    presets = {
      object_required: [
        {
          name: 'test1',
          preset: { test: 'test' }
        },
        {
          name: 'test2'
        },
        {}
      ]
    }
  }
</script>
