<template lang="pug">
  .component_doc
    h3 {{ name }}
    el-row(:gutter="20")
      el-col(:xs="24", :sm="24", :md="24", :lg="12", :xl="12")
        el-table(:data="props")
          el-table-column(prop="name", label="Name")
          el-table-column(prop="type", label="Type")
            template(slot-scope="scope") {{ scope.row.type | stringify_constructor}}
          el-table-column(prop="required", label="Required")
            template(slot-scope="scope") {{ scope.row.required | stringify_boolean}}
          el-table-column(prop="default", label="Default")
            template(slot-scope="scope") {{ scope.row.default | stringify_default}}
          el-table-column(prop="input", label="Input", width="200", class-name="input")
            template(slot-scope="scope")
              presets(v-if="get_presets(scope.row.name)", :presets="get_presets(scope.row.name)", :name="scope.row.name", v-model="props_form[scope.row.name]")
              el-input(v-else-if="!scope.row.type", v-model="props_form[scope.row.name]")
              .string_input(v-else-if="scope.row.type === String", @keyup="nullify_blank_string(scope.row.name)")
                el-input(v-model="props_form[scope.row.name]")
              el-input-number(v-else-if="scope.row.type === Number", v-model="props_form[scope.row.name]")
              el-switch(v-else-if="scope.row.type === Boolean", v-model="props_form[scope.row.name]")
      el-col(:xs="24", :sm="24", :md="24", :lg="12", :xl="12")
        component(:is="component.name", v-bind="props_form")
</template>

<script lang="typescript">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'
  import ComponentProperties from './component_properties'
  import * as presets from './presets.vue'

  @Component({
    components: {
      presets
    },
    props: {
      component: {
        type: [Object, Function],
        required: true
      },
      presets: {
        type: Object,
        default: () => { return {} }
      }
    },
    filters: {
      stringify_constructor(value){
        if (value instanceof Array) {
          return value.map((v) => v.name).join(', ')
        }
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

    props_form = this.component_properties.props_form

    get component_properties () {
      return new ComponentProperties(this.component)
    }

    get props () {
      return this.component_properties.props
    }

    get name () {
      return this.component_properties.name
    }

    nullify_blank_string(field) {
      if (this.props_form[field] === '') {
        this.props_form[field] = null
      }
    }

    get_presets (prop_name) {
      if (this.presets[prop_name] && this.presets[prop_name].length) {
        return this.presets[prop_name]
      }
      return null
    }

    beforeMount () {
      this.$options.components[this.component.name] = this.component
    }
  }
</script>

<style>
  .component_doc h3 {
    padding-left: 10px;
  }
  .component_doc span.el-input-number__decrease {
    height: calc(100% - 2px)
  }
  .component_doc span.el-input-number__decrease i.el-icon-minus {
    line-height: 3
  }
  .component_doc span.el-input-number__increase {
    height: calc(100% - 2px)
  }
  .component_doc span.el-input-number__increase i.el-icon-plus {
    line-height: 3
  }
  .component_doc .input .cell {
    text-align: center;
  }
</style>
