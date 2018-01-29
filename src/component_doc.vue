<template lang="pug">
  el-table(:data="props")
    el-table-column(prop="name", label="Name")
    el-table-column(prop="type", label="Type")
      template(slot-scope="scope") {{ scope.row.type | stringify_constructor}}
    el-table-column(prop="required", label="Required")
      template(slot-scope="scope") {{ scope.row.required | stringify_boolean}}
    el-table-column(prop="default")
      template(slot-scope="scope") {{ scope.row.default | stringify_default}}
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
    get component_properties () {
      return new ComponentProperties(this.component)
    }

    get props () {
      return this.component_properties.props
    }
  }
</script>
