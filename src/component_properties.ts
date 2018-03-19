import * as Vue from 'vue'
import * as _ from 'lodash'

export default class ComponentProperties {
  vue_component: any
  constructor (vue_component: any) {
    this.vue_component = vue_component
  }

  get is_class_component (): boolean {
    return !!this.vue_component.sealedOptions
  }

  get name (): string {
    if (this.is_class_component && this.vue_component.sealedOptions.name) {
      return this.vue_component.sealedOptions.name
    }
    return this.vue_component.name || 'nameless_component'
  }

  get props (): object[] {
    let props: any
    if (this.is_class_component) {
      props = this.vue_component.sealedOptions.props
    } else {
      props = this.vue_component.props
    }
    return this.format_props_for_table(props)
  }

  get props_form (): any {
    const props_form: any = {}
    this.props.forEach((prop: any) => {
      if (prop.default) {
        if (prop.default instanceof Function) {
          props_form[prop.name] = prop.default()
        } else {
         props_form[prop.name] = prop.default
        }
      } else {
        props_form[prop.name] = null
      }
    })
    return props_form
  }

  format_props_for_table (props: any | string[]): any[] {
    let table_data: any[] = []
    if (props instanceof Array) {
      props.forEach((property) => {
        table_data.push({
          name: property,
          type: null,
          required: false,
          default: null
        })
      })
    } else {
      Object.keys(props).forEach((name) => {
        const value = props[name]
        if (value.constructor.name == 'Function') {
          table_data.push({
            name,
            type: value,
            required: false,
            default: null
          })
        } else {
          const { type, required } = value
          const default_value = value.default
          table_data.push({
            name,
            type,
            required,
            default: default_value
          })
        }
      })
    }
    return table_data
  }
}
