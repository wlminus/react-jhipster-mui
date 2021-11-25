"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheMetrics = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const formatter_1 = require("../../formatter");
const Table_1 = (0, tslib_1.__importDefault)(require("@mui/material/Table"));
const TableBody_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableBody"));
const TableCell_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableCell"));
const TableHead_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableHead"));
const TableRow_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableRow"));
const number_utils_1 = require("../../util/number-utils");
class CacheMetrics extends react_1.default.Component {
    render() {
        const { cacheMetrics, twoDigitAfterPointFormat } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Cache statistics"),
            react_1.default.createElement(Table_1.default, { "aria-label": "simple table" },
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Cache Name"),
                        react_1.default.createElement(TableCell_1.default, null, "Cache Hits"),
                        react_1.default.createElement(TableCell_1.default, null, "Cache Misses"),
                        react_1.default.createElement(TableCell_1.default, null, "Cache Gets"),
                        react_1.default.createElement(TableCell_1.default, null, "Cache Hit %"),
                        react_1.default.createElement(TableCell_1.default, null, "Cache Miss %"))),
                react_1.default.createElement(TableBody_1.default, null, Object.keys(cacheMetrics).map(key => (react_1.default.createElement(TableRow_1.default, { key: key },
                    react_1.default.createElement(TableCell_1.default, null, key),
                    react_1.default.createElement(TableCell_1.default, null, cacheMetrics[key]['cache.gets.hit']),
                    react_1.default.createElement(TableCell_1.default, null, cacheMetrics[key]['cache.gets.miss']),
                    react_1.default.createElement(TableCell_1.default, null, cacheMetrics[key]['cache.gets.miss'] + cacheMetrics[key]['cache.gets.hit']),
                    react_1.default.createElement(TableCell_1.default, null,
                        react_1.default.createElement(formatter_1.TextFormat, { value: (0, number_utils_1.nanToZero)(100 *
                                cacheMetrics[key]['cache.gets.hit'] /
                                (cacheMetrics[key]['cache.gets.hit'] + cacheMetrics[key]['cache.gets.miss'])), type: "number", format: twoDigitAfterPointFormat })),
                    react_1.default.createElement(TableCell_1.default, null,
                        react_1.default.createElement(formatter_1.TextFormat, { value: (0, number_utils_1.nanToZero)(100 *
                                cacheMetrics[key]['cache.gets.miss'] /
                                (cacheMetrics[key]['cache.gets.hit'] + cacheMetrics[key]['cache.gets.miss'])), type: "number", format: twoDigitAfterPointFormat })))))))));
    }
}
exports.CacheMetrics = CacheMetrics;
//# sourceMappingURL=cacheMetrics.js.map