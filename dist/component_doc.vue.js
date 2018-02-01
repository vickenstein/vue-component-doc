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
var ComponentDoc = /** @class */ (function (_super) {
    __extends(ComponentDoc, _super);
    function ComponentDoc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.component_properties = new component_properties_1["default"](_this.component);
        _this.props = _this.component_properties.props;
        _this.props_form = _this.component_properties.props_form;
        return _this;
    }
    ComponentDoc.prototype.beforeMount = function () {
        this.$options.components[this.component.name] = this.component;
    };
    ComponentDoc = __decorate([
        vue_class_component_1["default"]({
            props: {
                component: {
                    type: Object,
                    required: true
                }
            },
            filters: {
                stringify_constructor: function (value) {
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
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('h3',[_vm._v(_vm._s(_vm.component.name))]),_c('el-table',{attrs:{"data":_vm.props}},[_c('el-table-column',{attrs:{"prop":"name","label":"Name"}}),_c('el-table-column',{attrs:{"prop":"type","label":"Type"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("stringify_constructor")(scope.row.type)))]}}])}),_c('el-table-column',{attrs:{"prop":"required","label":"Required"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("stringify_boolean")(scope.row.required)))]}}])}),_c('el-table-column',{attrs:{"prop":"default","label":"Default"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(_vm._f("stringify_default")(scope.row.default)))]}}])}),_c('el-table-column',{attrs:{"prop":"input","label":"Input"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(!scope.row.type)?_c('el-input',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):(scope.row.type === String)?_c('el-input',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):(scope.row.type === Number)?_c('el-input-number',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):(scope.row.type === Boolean)?_c('el-switch',{model:{value:(_vm.props_form[scope.row.name]),callback:function ($$v) {_vm.$set(_vm.props_form, scope.row.name, $$v)},expression:"props_form[scope.row.name]"}}):_vm._e()]}}])})],1)],1),_c('el-col',{attrs:{"span":12}},[_c(_vm.component.name,_vm._b({tag:"component"},'component',_vm.props_form,false))],1)],1)}
__vue__options__.staticRenderFns = []
