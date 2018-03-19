var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".component_doc h3{padding-left:10px}.component_doc span.el-input-number__decrease{height:calc(100% - 2px)}.component_doc span.el-input-number__decrease i.el-icon-minus{line-height:3}.component_doc span.el-input-number__increase{height:calc(100% - 2px)}.component_doc span.el-input-number__increase i.el-icon-plus{line-height:3}.component_doc .input .cell{text-align:center}")
;(function(){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Vue = require("vue");
var vue_class_component_1 = require("vue-class-component");
var component_properties_1 = require("./component_properties");
var presets = require("./presets.vue");
var ComponentDoc = /** @class */ (function (_super) {
    __extends(ComponentDoc, _super);
    function ComponentDoc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.props_form = _this.component_properties.props_form;
        return _this;
    }
    Object.defineProperty(ComponentDoc.prototype, "component_properties", {
        get: function () {
            return new component_properties_1["default"](this.component);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentDoc.prototype, "props", {
        get: function () {
            return this.component_properties.props;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentDoc.prototype, "name", {
        get: function () {
            return this.component_properties.name;
        },
        enumerable: true,
        configurable: true
    });
    ComponentDoc.prototype.nullify_blank_string = function (field) {
        if (this.props_form[field] === '') {
            this.props_form[field] = null;
        }
    };
    ComponentDoc.prototype.get_presets = function (prop_name) {
        if (this.presets[prop_name] && this.presets[prop_name].length) {
            return this.presets[prop_name];
        }
        return null;
    };
    ComponentDoc.prototype.beforeMount = function () {
        this.$options.components[this.component.name] = this.component;
    };
    ComponentDoc = __decorate([
        vue_class_component_1["default"]({
            components: {
                presets: presets
            },
            props: {
                component: {
                    type: [Object, Function],
                    required: true
                },
                presets: {
                    type: Object,
                    "default": function () { return {}; }
                }
            },
            filters: {
                stringify_constructor: function (value) {
                    if (value instanceof Array) {
                        return value.map(function (v) { return v.name; }).join(', ');
                    }
                    return value ? value.name : 'N/A';
                },
                stringify_boolean: function (value) {
                    return value ? 'True' : '-';
                },
                stringify_default: function (value) {
                    if (!value) {
                        return '-';
                    }
                    else {
                        return value;
                    }
                }
            }
        })
    ], ComponentDoc);
    return ComponentDoc;
}(Vue));
exports["default"] = ComponentDoc;

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component_doc"},[_c('h3',[_vm._v(_vm._s(_vm.name))]),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"xs":24,"sm":24,"md":24,"lg":12,"xl":12}},[_c('el-table',{attrs:{"data":_vm.props}},[_c('el-table-column',{attrs:{"prop":"name","label":"Name"}}),_c('el-table-column',{attrs:{"prop":"type","label":"Type"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("stringify_constructor")(scope.row.type)))]}}])}),_c('el-table-column',{attrs:{"prop":"required","label":"Required"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("stringify_boolean")(scope.row.required)))]}}])}),_c('el-table-column',{attrs:{"prop":"default","label":"Default"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("stringify_default")(scope.row.default)))]}}])}),_c('el-table-column',{attrs:{"prop":"input","label":"Input","width":"200","class-name":"input"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.get_presets(scope.row.name))?_c('presets',{attrs:{"presets":_vm.get_presets(scope.row.name),"name":scope.row.name},model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):(!scope.row.type)?_c('el-input',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):(scope.row.type === String)?_c('div',{staticClass:"string_input",on:{"keyup":function($event){_vm.nullify_blank_string(scope.row.name)}}},[_c('el-input',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}})],1):(scope.row.type === Number)?_c('el-input-number',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):(scope.row.type === Boolean)?_c('el-switch',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):_vm._e()]}}])})],1)],1),_c('el-col',{attrs:{"xs":24,"sm":24,"md":24,"lg":12,"xl":12}},[_c(_vm.component.name,_vm._b({tag:"component"},'component',_vm.props_form,false))],1)],1)],1)}
__vue__options__.staticRenderFns = []
