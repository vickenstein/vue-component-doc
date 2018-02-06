<template lang="pug">
  .component Complex Class Component
    h4 string required - {{ string_required }}
    h4 object required - {{ object_required }}
</template>

<script lang="typescript">
  import * as props from './complex_properties'
  import * as Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props
  })
  export default class ComplexClassComponent extends Vue {

  }
</script>
