<template lang="pug">
  .component_doc
    h3 {{ name }}
    el-row(:gutter="20")
      el-col(:xs="24", :sm="24", :md="24", :lg="small_screen_column_count", :xl="small_screen_column_count")
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
      el-col(:xs="24", :sm="24", :md="24", :lg="small_screen_column_count", :xl="small_screen_column_count")
        .reiszer(:class="{enabled: resizable, active: resizer_active, initialized: resizer_initialized}", :style="resizer_style")
          .preview
            component(:is="component_hash", v-bind="props_form")
          .display
            | w: {{ resizer_width }}, h: {{ resizer_height }}
            i.el-icon-refresh(@click="set_resizer_dimensions")
          .control
            i.el-icon-rank
</template>

<script lang="typescript">
  import * as Vue from 'vue'
  import Component from 'vue-class-component'
  import ComponentProperties from './component_properties'
  import * as Hammerjs from 'hammerjs'
  import * as Hash from 'object-hash'
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
      full_screen: {
        type: Boolean,
        default: false
      },
      resizable: {
        type: Boolean,
        default: false
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
    resizer_active = false
    resizer_initialized = false
    resizer_width = null
    resizer_height = null
    initial_resizer_height = null
    initial_resizer_width = null

    get resizer_style () {
      const width = this.resizer_width ? `${this.resizer_width}px` : 'auto'
      const height = this.resizer_height ? `${this.resizer_height}px` : 'auto'
      return {
        width,
        height
      }
    }

    get component_properties () {
      return new ComponentProperties(this.component)
    }

    get component_hash () {
      console.log(Hash.keys(this.component))
      return Hash.keys(this.component)
    }

    get props () {
      return this.component_properties.props
    }

    get name () {
      return this.component_properties.name
    }

    get small_screen_column_count () {
      return this.full_screen ? 24 : 12
    }

    get preview () {
      return this.$el.getElementsByClassName('preview')[0]
    }

    get resizer_control () {
      return this.$el.getElementsByClassName('control')[0]
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

    initialize_resizer () {
      this.initialize_resize_pan()
      this.set_resizer_dimensions()
    }

    initialize_resize_pan () {
      this.resize_pan_handler = new Hammerjs.Manager(this.resizer_control)
      const pan = new Hammerjs.Pan()
      this.resize_pan_handler.add(pan)
      this.resize_pan_handler.on('panstart', (event) => {
        this.initial_resizer_width = this.resizer_width
        this.initial_resizer_height = this.resizer_height
        this.resizer_active = true
      })
      this.resize_pan_handler.on('panmove', (event) => {
        this.resizer_width = this.initial_resizer_width + event.deltaX
        this.resizer_height = this.initial_resizer_height + event.deltaY
      })
      this.resize_pan_handler.on('panend', (event) => {
        this.resizer_active = false
      })
      this.resizer_initialized = true
    }

    set_resizer_dimensions () {
      this.resizer_width = this.preview.firstChild.clientWidth
      this.resizer_height = this.preview.firstChild.clientHeight
    }

    reset_dimensions () {
      this.resizer_width = null
      this.resizer_height = null
    }

    beforeMount () {
      this.$options.components[this.component_hash] = this.component
    }

    mounted () {
      if (this.resizable) {
        this.initialize_resizer()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .component_doc {
    .reiszer {
      overflow: scroll;
      position: relative;
      outline: 1px solid rgba(0, 0, 0, 0.5);
      .display {
        display: none;
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        right: 0;
        top: 0;
        padding-left: 1em;
        i.el-icon-refresh {
          cursor: pointer;
          padding: 1em;
        }
      }
      .control {
        cursor: move;
        display: none;
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 1em;
      }
      &.initialized {
        display: inline-block;
      }
      &.enabled:hover {
        .control, .display {
          display: block;
        }
      }
      &.active {
        .control, .display {
          display: block;
        }
      }
    }
  }
</style>

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
