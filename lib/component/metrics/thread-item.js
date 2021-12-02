"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadItem = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Card_1 = (0, tslib_1.__importDefault)(require("@mui/material/Card"));
const CardContent_1 = (0, tslib_1.__importDefault)(require("@mui/material/CardContent"));
const Collapse_1 = (0, tslib_1.__importDefault)(require("@mui/material/Collapse"));
class ThreadItem extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            collapse: false
        };
        this.toggleStackTrace = () => {
            this.setState({
                collapse: !this.state.collapse
            });
        };
    }
    render() {
        const { threadDumpInfo } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("a", { onClick: this.toggleStackTrace, style: { color: 'hotpink' } }, this.state.collapse ? react_1.default.createElement("span", null, "Hide StackTrace") : react_1.default.createElement("span", null, "Show StackTrace")),
            react_1.default.createElement(Collapse_1.default, { in: this.state.collapse },
                react_1.default.createElement(Card_1.default, null,
                    react_1.default.createElement(CardContent_1.default, null,
                        react_1.default.createElement("div", { style: { overflowX: 'scroll' } },
                            Object.entries(threadDumpInfo.stackTrace).map(([stK, stV]) => (react_1.default.createElement("samp", { key: `detail-${stK}` },
                                stV.className,
                                ".",
                                stV.methodName,
                                react_1.default.createElement("code", null,
                                    "(",
                                    stV.fileName,
                                    ":",
                                    stV.lineNumber,
                                    ")")))),
                            react_1.default.createElement("span", { className: "mt-1" })))))));
    }
}
exports.ThreadItem = ThreadItem;
exports.default = ThreadItem;
//# sourceMappingURL=thread-item.js.map