const property_types = [
  {
    type: String,
    default: 'test'
  },
  {
    type: Number,
    default: 1
  },
  {
    type: Boolean,
    default: true
  },
  {
    type: Function,
    default: (input: any) => input
  },
  {
    type: Object,
    default: { test: 'test' }
  },
  {
    type: Array,
    default: [ 'test', 1, 2 ]
  },
  {
    type: Symbol,
    default: Symbol('test')
  }
]

function generate_properties(): object {
  let properties: any = {}
  property_types.forEach((property_type) => {
    const name = property_type.type.name
    properties[name] = property_type
    properties[`${name}_type`] = {
      type: property_type
    }
    properties[`${name}_required`] = {
      type: property_type,
      required: true
    }
    properties[`${name}_default`] = {
      type: property_type,
      default: property_type.default
    }
    properties[`${name}_default_function`] = {
      type: property_type,
      default: function() {
        return this.non_existent_function()
      }
    }
  })
  return properties
}

export = generate_properties()
