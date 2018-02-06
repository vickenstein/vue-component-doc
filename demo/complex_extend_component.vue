<template lang="pug">
  .component Complex Extend Component
    h4 string required - {{ string_required }}
    h4 object required - {{ object_required }}
</template>

<script lang="typescript">
  import * as props from './complex_properties'
  import * as Vue from "vue"

  export default Vue.extend({
    name: 'complex_object_component',
    props
  })
</script>
