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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var UpFormControl_1 = require("../UpForm/UpFormControl");
var UpMonth = (function (_super) {
    __extends(UpMonth, _super);
    function UpMonth(p, c) {
        return _super.call(this, p, c) || this;
    }
    UpMonth.prototype.setInput = function (data) {
        if (this.inputElement) {
            this.inputElement.value = data;
        }
    };
    UpMonth.prototype.renderField = function () {
        return React.createElement("select", { className: "form-control", onChange: this.handleChangeJsEvent },
            React.createElement("option", { value: '-1' }, "--Select Month--"),
            React.createElement("option", { value: '1' }, "Janvier"),
            React.createElement("option", { value: '2' }, "F\u00E9vrier"),
            React.createElement("option", { value: '3' }, "Mars"),
            React.createElement("option", { value: '4' }, "Avril"),
            React.createElement("option", { value: '5' }, "Mai"),
            React.createElement("option", { value: '6' }, "Juin"),
            React.createElement("option", { value: '7' }, "Juillet"),
            React.createElement("option", { value: '8' }, "Ao\u00FBt"),
            React.createElement("option", { value: '9' }, "Septembre"),
            React.createElement("option", { value: '10' }, "Octobre"),
            React.createElement("option", { value: '11' }, "Novembre"),
            React.createElement("option", { value: '12' }, "D\u00E9cembre"));
    };
    UpMonth.prototype.handleChangeJsEvent = function (event) {
        return Number(event.target.value);
    };
    UpMonth.prototype.isEmpty = function (value) {
        return value === null || value === undefined || value === "";
    };
    UpMonth.prototype._componentDidMount = function () {
    };
    return UpMonth;
}(UpFormControl_1.UpFormControl));
exports.default = UpMonth;
//# sourceMappingURL=UpMonth.js.map