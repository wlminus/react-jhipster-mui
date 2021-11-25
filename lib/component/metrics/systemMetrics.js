"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemMetrics = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const formatter_1 = require("../../formatter");
const mui_linear_progress_1 = (0, tslib_1.__importDefault)(require("./mui-linear-progress"));
const Grid_1 = (0, tslib_1.__importDefault)(require("@mui/material/Grid"));
class SystemMetrics extends react_1.default.Component {
    static convertMillisecondsToDuration(ms) {
        const times = {
            year: 31557600000,
            month: 2629746000,
            day: 86400000,
            hour: 3600000,
            minute: 60000,
            second: 1000
        };
        let timeString = '';
        let plural = '';
        for (const key in times) {
            if (Math.floor(ms / times[key]) > 0) {
                plural = Math.floor(ms / times[key]) > 1 ? 's' : '';
                timeString += Math.floor(ms / times[key]).toString() + ' ' + key.toString() + plural + ' ';
                ms = ms - times[key] * Math.floor(ms / times[key]);
            }
        }
        return timeString;
    }
    render() {
        const { systemMetrics, wholeNumberFormat, timestampFormat } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h4", null, "System"),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 4, xs: 4, lg: 4 }, "Uptime"),
                react_1.default.createElement(Grid_1.default, { md: 8, xs: 8, lg: 8, className: "text-end" }, SystemMetrics.convertMillisecondsToDuration(systemMetrics['process.uptime']))),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 4, xs: 4, lg: 4 }, "Start time"),
                react_1.default.createElement(Grid_1.default, { md: 8, xs: 8, lg: 8, className: "text-end" },
                    react_1.default.createElement(formatter_1.TextFormat, { value: systemMetrics['process.start.time'], type: "date", format: timestampFormat }))),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 9, xs: 9, lg: 9 }, "Process CPU usage"),
                react_1.default.createElement(Grid_1.default, { md: 3, xs: 3, lg: 3, className: "text-end" },
                    react_1.default.createElement(formatter_1.TextFormat, { value: 100 * systemMetrics['process.cpu.usage'], type: "number", format: wholeNumberFormat }),
                    " %")),
            react_1.default.createElement(mui_linear_progress_1.default, { color: "success", value: 100 * systemMetrics['process.cpu.usage'] }),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 9, xs: 9, lg: 9 }, "System CPU usage"),
                react_1.default.createElement(Grid_1.default, { md: 3, xs: 3, lg: 3, className: "text-end" },
                    react_1.default.createElement(formatter_1.TextFormat, { value: 100 * systemMetrics['system.cpu.usage'], type: "number", format: wholeNumberFormat }),
                    " %")),
            react_1.default.createElement(mui_linear_progress_1.default, { color: "success", value: 100 * systemMetrics['system.cpu.usage'] }),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 9, xs: 9, lg: 9 }, "System CPU count"),
                react_1.default.createElement(Grid_1.default, { md: 3, xs: 3, lg: 3, className: "text-end" }, systemMetrics['system.cpu.count'])),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 9, xs: 9, lg: 9 }, "System 1m Load average"),
                react_1.default.createElement(Grid_1.default, { md: 3, xs: 3, lg: 3, className: "text-end" },
                    react_1.default.createElement(formatter_1.TextFormat, { value: systemMetrics['system.load.average.1m'], type: "number", format: wholeNumberFormat }))),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 7, xs: 7, lg: 7 }, "Process files max"),
                react_1.default.createElement(Grid_1.default, { md: 5, xs: 5, lg: 5, className: "text-end" },
                    react_1.default.createElement(formatter_1.TextFormat, { value: systemMetrics['process.files.max'], type: "number", format: wholeNumberFormat }))),
            react_1.default.createElement(Grid_1.default, { container: true },
                react_1.default.createElement(Grid_1.default, { md: 4, xs: 4, lg: 4 }, "Process files open"),
                react_1.default.createElement(Grid_1.default, { md: 8, xs: 8, lg: 8, className: "text-end" },
                    react_1.default.createElement(formatter_1.TextFormat, { value: systemMetrics['process.files.open'], type: "number", format: wholeNumberFormat })))));
    }
}
exports.SystemMetrics = SystemMetrics;
//# sourceMappingURL=systemMetrics.js.map