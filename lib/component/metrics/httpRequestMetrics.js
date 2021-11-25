"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestMetrics = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const formatter_1 = require("../../formatter");
const number_utils_1 = require("../../util/number-utils");
const Table_1 = (0, tslib_1.__importDefault)(require("@mui/material/Table"));
const TableBody_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableBody"));
const TableCell_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableCell"));
const TableHead_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableHead"));
const TableRow_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableRow"));
const mui_linear_progress_1 = (0, tslib_1.__importDefault)(require("./mui-linear-progress"));
class HttpRequestMetrics extends react_1.default.Component {
    render() {
        const { requestMetrics, wholeNumberFormat, twoDigitAfterPointFormat } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "HTTP requests (time in milliseconds)"),
            react_1.default.createElement("p", null,
                react_1.default.createElement("span", null, "Total requests:"),
                ' ',
                react_1.default.createElement("b", null,
                    react_1.default.createElement(formatter_1.TextFormat, { value: requestMetrics.all.count, type: "number", format: wholeNumberFormat }))),
            react_1.default.createElement(Table_1.default, null,
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Code"),
                        react_1.default.createElement(TableCell_1.default, null, "Count"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "Mean"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "Max"))),
                react_1.default.createElement(TableBody_1.default, null, Object.keys(requestMetrics.percode).map((key, index) => (react_1.default.createElement(TableRow_1.default, { key: index },
                    react_1.default.createElement(TableCell_1.default, null, key),
                    react_1.default.createElement(TableCell_1.default, null,
                        react_1.default.createElement(mui_linear_progress_1.default, { color: "success", value: 100 * requestMetrics.percode[key].count / requestMetrics.all.count })),
                    react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                        react_1.default.createElement(formatter_1.TextFormat, { value: (0, number_utils_1.nanToZero)(requestMetrics.percode[key].mean), type: "number", format: twoDigitAfterPointFormat })),
                    react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                        react_1.default.createElement(formatter_1.TextFormat, { value: (0, number_utils_1.nanToZero)(requestMetrics.percode[key].max), type: "number", format: twoDigitAfterPointFormat })))))))));
    }
}
exports.HttpRequestMetrics = HttpRequestMetrics;
//# sourceMappingURL=httpRequestMetrics.js.map