const property_types = [
  String,
  Number,
  Boolean,
  Function,
  Object,
  Array,
  Symbol
]

function generate_properties(): string[] {
  return property_types.map(property => property.name.toLowerCase())
}

export = generate_properties()
