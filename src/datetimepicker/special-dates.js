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
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
require("./datetimepicker-component.css");
var Special = (function (_super) {
    __extends(Special, _super);
    function Special() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dateValue = new Date('1/7/2017');
        return _this;
    }
    Special.prototype.specialDate = function (args, name) {
        var span = document.createElement('span');
        span.setAttribute('class', 'e-icons highlight');
        args.element.firstElementChild.setAttribute('title', name + '!');
        ej2_base_1.addClass([args.element], ['e-day', 'special', name.toLowerCase()]);
        args.element.setAttribute('data-val', name + '!');
        args.element.setAttribute('title', name + '!');
        args.element.appendChild(span);
    };
    Special.prototype.customDates = function (args) {
        /*Date need to be customized*/
        if (args.date.getDate() === 10) {
            this.specialDate(args, "Birthday");
        }
        if (args.date.getDate() === 15) {
            this.specialDate(args, "Farewell");
        }
        if (args.date.getDate() === 20) {
            this.specialDate(args, "Vacation");
        }
    };
    Special.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'datetimepicker-control-section' },
                    React.createElement(ej2_react_calendars_1.DateTimePickerComponent, { renderDayCell: this.customDates.bind(this), value: this.dateValue, cssClass: 'e-customStyle' }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "In the following sample, specific dates are ",
                    React.createElement("code", null, "highlighted"),
                    " to notify the additional information of that date. Click the special date and the addition information about the date will be displayed when hovered.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "Special Dates sample demonstrates, how to customize a specific dates in a datetimepicker by using",
                    React.createElement("code", null, "renderDayCell"),
                    " event. This event gets triggered on each day cell element creation that allows you to customize or disable the specific dates in datetimepicker. Here 10, 15 and 25 date's are customized with custom styles by adding the ",
                    React.createElement("code", null, "e-customStyle"),
                    " class."),
                React.createElement("p", null,
                    "More information on the DateTimePicker customization can be found in the ",
                    React.createElement("a", { href: "https://ej2.syncfusion.com/react/documentation/datetimepicker/customization.html", target: "_blank" }, " documentation section"),
                    "."))));
    };
    return Special;
}(sample_base_1.SampleBase));
exports.Special = Special;
