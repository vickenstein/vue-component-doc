<template lang="pug">
  .component Complex Object Component
    h4 string required - {{ JSON.stringify({string: string_required}) }}
    h4 object required - {{ object_required }}
    h4 object default function - {{ JSON.stringify(object_default_function) }}
</template>

<script>
  const props = require('./complex_properties')

  module.exports = {
    name: 'complex_object_component',
    props
  }
</script>
