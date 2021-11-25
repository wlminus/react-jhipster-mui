"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasourceMetrics = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const formatter_1 = require("../../formatter");
const Table_1 = (0, tslib_1.__importDefault)(require("@mui/material/Table"));
const TableBody_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableBody"));
const TableCell_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableCell"));
const TableHead_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableHead"));
const TableRow_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableRow"));
class DatasourceMetrics extends react_1.default.Component {
    render() {
        const { datasourceMetrics, twoDigitAfterPointFormat } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "DataSource statistics (time in millisecond)"),
            react_1.default.createElement(Table_1.default, null,
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null,
                            react_1.default.createElement("span", null, "Connection Pool Usage "),
                            "(active: ",
                            datasourceMetrics.active.value,
                            ", min: ",
                            datasourceMetrics.min.value,
                            ", max: ",
                            datasourceMetrics.max.value,
                            ", idle:",
                            ' ',
                            datasourceMetrics.idle.value,
                            ")"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "Count"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "Mean"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "Min"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "p50"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "p75"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "p95"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "p99"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, "Max"))),
                react_1.default.createElement(TableBody_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Acquire"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, datasourceMetrics.acquire.count),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.acquire.mean, type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.acquire['0.0'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.acquire['0.5'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.acquire['0.75'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.acquire['0.95'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.acquire['0.99'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.acquire.max, type: 'number', format: twoDigitAfterPointFormat }))),
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Creation"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, datasourceMetrics.creation.count),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.creation.mean, type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.creation['0.0'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.creation['0.5'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.creation['0.75'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.creation['0.95'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.creation['0.99'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.creation.max, type: 'number', format: twoDigitAfterPointFormat }))),
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Usage"),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" }, datasourceMetrics.usage.count),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.usage.mean, type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.usage['0.0'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.usage['0.5'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.usage['0.75'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.usage['0.95'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.usage['0.99'], type: 'number', format: twoDigitAfterPointFormat })),
                        react_1.default.createElement(TableCell_1.default, { className: "text-end" },
                            react_1.default.createElement(formatter_1.TextFormat, { value: datasourceMetrics.usage.max, type: 'number', format: twoDigitAfterPointFormat })))))));
    }
}
exports.DatasourceMetrics = DatasourceMetrics;
//# sourceMappingURL=datasourceMetrics.js.map