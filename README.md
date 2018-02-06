# vue-component-doc
Document Vue Components

## Introduction
A vue component built to document other vue component by auto generating a form to interact with the props. This component works with all components created to be an object, Vue.extend, and typescript Vue Class Components. Please checkout the demo in repo for additional usage information.

## Installation
npm install vue-component-doc

const Vue = require('vue')
Vue.use(require('vue-component-doc'))

## Usage
```html
  <component_doc :component="my_component" :presets="my_presets"><component_doc/>
```
## Presets
presets is a system to deliver some sample data to a component via props using vue-component-doc

presets are shown as a select dropdown with each option labeled by the specified name
```javascript
  const presets = {
    my_prop_name: [
      {
        name: "my preset name",
        preset: Any
      }
    ]
  }
```
vue-component-doc will also auto generate name using your prop name or use the name property of objects.
```javascript
  const presets = {
    my_string_prop: [
      'my_string_prop1',
      'my_string_prop2'
    ]
  }
```
```javascript
  const presets = {
    my_object_prop: [
      {
        name: 'my object 1'
      },
      {
        name: 'my object 2'
      }
    ]
  }
```

Built @ ![Promoboxx Logo](https://promoboxx.com/images/logo.png)
