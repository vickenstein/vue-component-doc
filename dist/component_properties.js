"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentProperties = (function () {
    function ComponentProperties(vue_component) {
        this.vue_component = vue_component;
    }
    Object.defineProperty(ComponentProperties.prototype, "is_class_component", {
        get: function () {
            return !!this.vue_component.sealedOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentProperties.prototype, "props", {
        get: function () {
            var props;
            if (this.is_class_component) {
                props = this.vue_component.sealedOptions.props;
            }
            else {
                props = this.vue_component.props;
            }
            return this.format_props_for_table(props);
        },
        enumerable: true,
        configurable: true
    });
    ComponentProperties.prototype.format_props_for_table = function (props) {
        var table_data = [];
        if (props instanceof Array) {
            props.forEach(function (property) {
                table_data.push({
                    name: property,
                    type: null,
                    required: false,
                    default: null
                });
            });
        }
        else {
            Object.keys(props).forEach(function (name) {
                var value = props[name];
                if (value.constructor.name == 'Function') {
                    table_data.push({
                        name: name,
                        type: value,
                        required: false,
                        default: null
                    });
                }
                else {
                    var type = value.type, required = value.required;
                    var default_value = value.default;
                    table_data.push({
                        name: name,
                        type: type,
                        required: required,
                        default: default_value
                    });
                }
            });
        }
        return table_data;
    };
    return ComponentProperties;
}());
exports.default = ComponentProperties;
