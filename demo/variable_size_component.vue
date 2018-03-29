<template lang="pug">
  .variable_size_component(:style="style") Variable Size Component
</template>

<script>
  module.exports = {
    name: 'variable_size_component',
    props: {
      width: {
        type: String,
        default: '300px'
      },
      height: {
        type: String,
        default: '100%'
      }
    },
    computed: {
      style() {
        return {
          width: this.width,
          height: this.height,
          'background-color': 'red'
        }
      }
    }
  }
</script>
