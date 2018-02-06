<template lang="pug">
  .presets
    el-select(v-model="selected", value-key="label", @change="value_change")
      el-option(
        v-for="preset in processed_presets"
        :key="preset.label"
        :label="preset.label"
        :value="preset"
      )
</template>

<script lang="typescript">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: {
      value: {},
      name: {
        type: String,
        required: true
      },
      presets: {
        type: Array,
        required: true
      }
    }
  })
  export default class Presets extends Vue {

    selected = null

    get processed_presets () {
      return this.presets.map((preset, index) => {
        return {
          label: this.label_for(preset, index),
          value: this.get_preset(preset)
        }
      })
    }

    value_change () {
      this.$emit('input', this.selected.value)
    }

    get_preset (preset) {
      if (preset instanceof Object && preset.name && preset.preset) {
        return preset.preset
      }
      return preset
    }

    auto_label_for (index) {
      return `${this.name}${index + 1}`
    }

    label_for (preset, index) {
      if (preset instanceof Object && preset.name) {
        return preset.name
      }
      return this.auto_label_for(index)
    }

    default_first_preset () {
      this.selected = this.processed_presets[0]
      this.value_change()
    }

    mounted () {
      this.default_first_preset()
    }
  }
</script>
