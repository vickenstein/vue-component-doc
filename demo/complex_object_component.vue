<template lang="pug">
  .component Complex Object Component
    h4 string required - {{ string_required }}
    h4 object required - {{ object_required }}
</template>

<script>
  const props = require('./complex_properties')

  module.exports = {
    name: 'complex_object_component',
    props
  }
</script>
