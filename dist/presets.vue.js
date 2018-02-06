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
var Presets = /** @class */ (function (_super) {
    __extends(Presets, _super);
    function Presets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selected = null;
        return _this;
    }
    Object.defineProperty(Presets.prototype, "processed_presets", {
        get: function () {
            var _this = this;
            return this.presets.map(function (preset, index) {
                return {
                    label: _this.label_for(preset, index),
                    value: _this.get_preset(preset)
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    Presets.prototype.value_change = function () {
        this.$emit('input', this.selected.value);
    };
    Presets.prototype.get_preset = function (preset) {
        if (preset instanceof Object && preset.name && preset.preset) {
            return preset.preset;
        }
        return preset;
    };
    Presets.prototype.auto_label_for = function (index) {
        return "" + this.name + (index + 1);
    };
    Presets.prototype.label_for = function (preset, index) {
        if (preset instanceof Object && preset.name) {
            return preset.name;
        }
        return this.auto_label_for(index);
    };
    Presets.prototype.default_first_preset = function () {
        this.selected = this.processed_presets[0];
        this.value_change();
    };
    Presets.prototype.mounted = function () {
        this.default_first_preset();
    };
    Presets = __decorate([
        vue_class_component_1["default"]({
            props: {
                value: {},
                name: {
                    type: String,
                    required: true
                },
                presets: {
                    type: Array,
                    required: true
                }
            }
        })
    ], Presets);
    return Presets;
}(Vue));
exports["default"] = Presets;

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"presets"},[_c('el-select',{attrs:{"value-key":"label"},on:{"change":_vm.value_change},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},_vm._l((_vm.processed_presets),function(preset){return _c('el-option',{key:preset.label,attrs:{"label":preset.label,"value":preset}})}))],1)}
__vue__options__.staticRenderFns = []
