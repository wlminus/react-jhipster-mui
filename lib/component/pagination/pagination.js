"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JhiPagination = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const Pagination_1 = (0, tslib_1.__importDefault)(require("@mui/material/Pagination"));
// export interface IJhiPaginationState {
//   currentPage: number;
// }
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
// export class JhiPagination extends React.Component<IJhiPaginationProps, IJhiPaginationState> {
//   constructor(props) {
//     super(props);
//   }
//   getMaxPage = () => {
//     const { itemsPerPage, totalItems } = this.props;
//     const division = Math.floor(totalItems / itemsPerPage);
//     const modulo = totalItems % itemsPerPage;
//     return division + (modulo !== 0 ? 1 : 0);
//   };
//   render() {
//     // this.cleanActivePage();
//     // const { activePage } = this.props;
//     const maxPage = this.getMaxPage();
//   //   return (
//   //     <div>
//   //       <Pagination>
//   //         <PaginationItem {...activePage === 1 && { disabled: true }}>
//   //           <PaginationLink first onClick={this.updateActivePage(1)} />
//   //         </PaginationItem>
//   //         <PaginationItem {...activePage === 1 && { disabled: true }}>
//   //           <PaginationLink previous onClick={this.previousPage} />
//   //         </PaginationItem>
//   //         {this.itemsToDisplay(activePage).map(
//   //           (paginationItem, i) =>
//   //             paginationItem.display === 'display' ? (
//   //               this.displayPaginationItem(i, activePage)
//   //             ) : paginationItem.display === 'disabled' ? (
//   //               <PaginationItem disabled key={i}>
//   //                 <PaginationLink>...</PaginationLink>
//   //               </PaginationItem>
//   //             ) : null
//   //         )}
//   //         <PaginationItem {...activePage === maxPage && { disabled: true }}>
//   //           <PaginationLink next onClick={this.nextPage} />
//   //         </PaginationItem>
//   //         <PaginationItem {...activePage === maxPage && { disabled: true }}>
//   //           <PaginationLink last onClick={this.updateActivePage(maxPage)} />
//   //         </PaginationItem>
//   //       </Pagination>
//   //     </div>
//   //   );
//   // }
//     return (
//         <Pagination count={maxPage} {...this.props} />
//     );
//   }
// }
//# sourceMappingURL=pagination.js.map