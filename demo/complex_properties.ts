const property_types = [
  {
    type: String,
    default: 'test',
    default_function: function () {
      return 'test'
    }
  },
  {
    type: Number,
    default: 1,
    default_function: function () {
      return 1
    }
  },
  {
    type: Boolean,
    default: true,
    default_function: function () {
      return true
    }
  },
  {
    type: Function,
    default: (input: any) => input,
    default_function: function () {
      return (input: any) => input
    }
  },
  {
    type: Object,
    default: () => { test: 'test' },
    default_function: function () {
      return { test: 'test' }
    }
  },
  {
    type: Array,
    default: () => [ 'test', 1, 2 ],
    default_function: function () {
      return [ 'test', 1, 2 ]
    }
  },
  {
    type: Symbol,
    default: Symbol('test'),
    default_function: function () {
      return Symbol('test')
    }
  }
]

function generate_properties(): object {
  let properties: any = {}
  property_types.forEach((property_type) => {
    const name = property_type.type.name.toLowerCase()
    const type = property_type.type
    const default_function = property_type.default_function
    properties[name] = type
    properties[`${name}_type`] = {
      type: type
    }
    properties[`${name}_required`] = {
      type: type,
      required: true
    }
    properties[`${name}_default`] = {
      type: type,
      default: property_type.default
    }
    properties[`${name}_default_function`] = {
      type: type,
      default: default_function
    }
  })
  properties[`multi_type`] = {
    type: [String, Number]
  }
  return properties
}

export = generate_properties()
