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
        return _super !== null && _super.apply(this, arguments) || this;
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

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "<el-table :data=\"props\"><el-table-column prop=\"name\" label=\"Name\"></el-table-column><el-table-column prop=\"type\" label=\"Type\"><template slot-scope=\"scope\">{{ scope.row.type | stringify_constructor}}</template></el-table-column><el-table-column prop=\"required\" label=\"Required\"><template slot-scope=\"scope\">{{ scope.row.required | stringify_boolean}}</template></el-table-column><el-table-column prop=\"default\"><template slot-scope=\"scope\">{{ scope.row.default | stringify_default}}</template></el-table-column></el-table>"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-222b0ced", module.exports)
  } else {
    hotAPI.update("_v-222b0ced", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}