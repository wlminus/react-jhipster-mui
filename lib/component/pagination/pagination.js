"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JhiPagination = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Pagination_1 = (0, tslib_1.__importDefault)(require("@mui/material/Pagination"));
const JhiPagination = (_a) => {
    var { totalItems, itemsPerPage } = _a, props = (0, tslib_1.__rest)(_a, ["totalItems", "itemsPerPage"]);
    const getMaxPage = () => {
        const division = Math.floor(totalItems / itemsPerPage);
        const modulo = totalItems % itemsPerPage;
        return division + (modulo !== 0 ? 1 : 0);
    };
    return (react_1.default.createElement(Pagination_1.default, Object.assign({ count: getMaxPage() }, props)));
};
exports.JhiPagination = JhiPagination;
//# sourceMappingURL=pagination.js.map