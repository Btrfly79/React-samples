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
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var ej2_base_1 = require("@syncfusion/ej2-base");
var data_source_1 = require("./data-source");
var sample_base_1 = require("../common/sample-base");
/**
 * Pivot Field List default sample
 */
var SAMPLE_CSS = "\n.e-pivotview {\n    width: 58%;\n    height: 100%;\n    float: left;\n}\n.e-pivotfieldlist {\n    width: 42%;\n    height: 100%;\n    float: right;\n}\n.e-pivotfieldlist .e-static {\n    width: 100% !important;\n}";
var dataSource = {
    data: data_source_1.Pivot_Data,
    expandAll: false,
    allowLabelFilter: true,
    allowValueFilter: true,
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    enableSorting: true
};
var FieldList = (function (_super) {
    __extends(FieldList, _super);
    function FieldList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldList.prototype.afterPopulate = function () {
        if (this.fieldlistObj && this.pivotGridObj) {
            this.fieldlistObj.updateView(this.pivotGridObj);
        }
    };
    FieldList.prototype.afterPivotPopulate = function () {
        if (this.fieldlistObj && this.pivotGridObj) {
            this.fieldlistObj.update(this.pivotGridObj);
        }
    };
    FieldList.prototype.rendereComplete = function () {
        this.fieldlistObj.updateView(this.pivotGridObj);
        if (ej2_base_1.Browser.isDevice) {
            ej2_base_1.prepend([document.getElementById('PivotFieldList')], document.getElementById('PivotView'));
        }
        this.fieldlistObj.update(this.pivotGridObj);
    };
    FieldList.prototype.ondataBound = function () {
        this.pivotGridObj.toolTip.destroy();
        this.pivotGridObj.refresh();
    };
    FieldList.prototype.onLoad = function () {
        if (ej2_base_1.Browser.isDevice) {
            this.renderMode = 'Popup';
            this.target = '.control-section';
            document.getElementById('PivotFieldList').removeAttribute('style');
            ej2_base_1.setStyleAttribute(document.getElementById('PivotFieldList'), {
                'height': 0,
                'float': 'left'
            });
        }
    };
    FieldList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: "control-section" },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (d) { return _this.pivotGridObj = d; }, enginePopulated: this.afterPivotPopulate.bind(this), width: '99%', height: '530', gridSettings: { columnWidth: 140 } }),
                React.createElement(ej2_react_pivotview_1.PivotFieldListComponent, { id: 'PivotFieldList', ref: function (d) { return _this.fieldlistObj = d; }, enginePopulated: this.afterPopulate.bind(this), dataSource: dataSource, renderMode: "Fixed", allowCalculatedField: true, load: this.onLoad, dataBound: this.ondataBound.bind(this) },
                    React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.CalculatedField] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the field list feature of the pivotgrid widget. In this sample, fields are automatically populated from the bound data source and can be used to create a pivot view at runtime.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The pivotgrid widget provides a built-in field list very similar to Microsoft Excel. The top section of the field list allows the user to add and remove fields. The bottom section of the field list allows the user to rearrange the fields between different axes, including column, row, value, and filter along with filter and sort options.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    " To show the field list independently, create as separate widget namely",
                    React.createElement("code", null, " PivotFieldList"),
                    " and assign JSON data source to its",
                    React.createElement("code", null, " dataSource->data"),
                    " property. Simultaneously pivotgrid will be populated by passing its instance in the updateView method, inside the",
                    React.createElement("code", null, " enginePopulated"),
                    " event of field list.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Additionally, user interface for calculated field, label filter, and value filter features have been enabled in this demo by setting the properties",
                    React.createElement("code", null, " allowCalculatedField"),
                    ",",
                    React.createElement("code", null, " dataSource->allowLabelFilter"),
                    " and ",
                    React.createElement("code", null, " dataSource->allowValueFilter"),
                    " to true."),
                React.createElement("p", null,
                    React.createElement("strong", null, "NOTE:"),
                    " To enable calculated field, inject",
                    React.createElement("code", null, " CalculatedField")))));
    };
    return FieldList;
}(sample_base_1.SampleBase));
exports.FieldList = FieldList;
