<template lang="pug">
  el-row
    el-col(:span="12")
      h3 {{ component.name }}
      el-table(:data="props")
        el-table-column(prop="name", label="Name")
        el-table-column(prop="type", label="Type")
          template(slot-scope="scope") {{ scope.row.type | stringify_constructor}}
        el-table-column(prop="required", label="Required")
          template(slot-scope="scope") {{ scope.row.required | stringify_boolean}}
        el-table-column(prop="default", label="Default")
          template(slot-scope="scope") {{ scope.row.default | stringify_default}}
        el-table-column(prop="input", label="Input")
          template(slot-scope="scope")
            el-input(v-if="!scope.row.type", v-model="props_form[scope.row.name]")
            el-input(v-else-if="scope.row.type === String", v-model="props_form[scope.row.name]")
            el-input-number(v-else-if="scope.row.type === Number", v-model="props_form[scope.row.name]")
            el-switch(v-else-if="scope.row.type === Boolean", v-model="props_form[scope.row.name]")
    el-col(:span="12")
      component(:is="component.name", v-bind="props_form")
</template>

<script lang="typescript">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'
  import ComponentProperties from './component_properties'

  @Component({
    props: {
      component: {
        type: Object,
        required: true
      }
    },
    filters: {
      stringify_constructor(value){
        return value ? value.name : 'N/A'
      },
      stringify_boolean(value) {
        return value ? 'True' : '-'
      }
      stringify_default(value) {
        if (!value) {
          return '-'
        } else {
          return value
        }
      }
    }
  })
  export default class ComponentDoc extends Vue {

    component_properties = new ComponentProperties(this.component)
    props = this.component_properties.props
    props_form = this.component_properties.props_form

    beforeMount () {
      this.$options.components[this.component.name] = this.component
    }
  }
</script>
