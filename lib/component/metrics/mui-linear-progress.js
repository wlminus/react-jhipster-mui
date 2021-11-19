"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const material_1 = require("@mui/material");
const LinearProgress_1 = (0, tslib_1.__importDefault)(require("@mui/material/LinearProgress"));
const MuiLinearProgress = (props) => {
    return (react_1.default.createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center' } },
        react_1.default.createElement(material_1.Box, { sx: { width: '100%', mr: 1 } },
            react_1.default.createElement(LinearProgress_1.default, Object.assign({ sx: {
                    height: 20
                }, variant: "determinate" }, props))),
        react_1.default.createElement(material_1.Box, { sx: { minWidth: 35 } },
            react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, `${Math.round(props.value)}%`))));
};
exports.default = MuiLinearProgress;
//# sourceMappingURL=mui-linear-progress.js.map