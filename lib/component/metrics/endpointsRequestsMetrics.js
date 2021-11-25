"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointsRequestsMetrics = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const formatter_1 = require("../../formatter");
const Table_1 = (0, tslib_1.__importDefault)(require("@mui/material/Table"));
const TableBody_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableBody"));
const TableCell_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableCell"));
const TableHead_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableHead"));
const TableRow_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableRow"));
class EndpointsRequestsMetrics extends react_1.default.Component {
    render() {
        const { endpointsRequestsMetrics, wholeNumberFormat } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Endpoints requests (time in millisecond)"),
            react_1.default.createElement(Table_1.default, null,
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Method"),
                        react_1.default.createElement(TableCell_1.default, null, "Endpoint url"),
                        react_1.default.createElement(TableCell_1.default, null, "Count"),
                        react_1.default.createElement(TableCell_1.default, null, "Mean"))),
                react_1.default.createElement(TableBody_1.default, null, Object.entries(endpointsRequestsMetrics).map(([key, entry]) => Object.entries(entry).map(([method, methodValue]) => (react_1.default.createElement(TableRow_1.default, { key: key + '-' + method },
                    react_1.default.createElement(TableCell_1.default, null, method),
                    react_1.default.createElement(TableCell_1.default, null, key),
                    react_1.default.createElement(TableCell_1.default, null, methodValue.count),
                    react_1.default.createElement(TableCell_1.default, null,
                        react_1.default.createElement(formatter_1.TextFormat, { value: methodValue.mean, type: "number", format: wholeNumberFormat }))))))))));
    }
}
exports.EndpointsRequestsMetrics = EndpointsRequestsMetrics;
//# sourceMappingURL=endpointsRequestsMetrics.js.map