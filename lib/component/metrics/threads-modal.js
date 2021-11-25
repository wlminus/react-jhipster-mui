"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsModal = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Badge, Row } from 'reactstrap';
const Table_1 = (0, tslib_1.__importDefault)(require("@mui/material/Table"));
const TableBody_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableBody"));
const TableCell_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableCell"));
const TableHead_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableHead"));
const TableRow_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableRow"));
const thread_item_1 = (0, tslib_1.__importDefault)(require("./thread-item"));
const Button_1 = (0, tslib_1.__importDefault)(require("@mui/material/Button"));
const Dialog_1 = (0, tslib_1.__importDefault)(require("@mui/material/Dialog"));
const DialogActions_1 = (0, tslib_1.__importDefault)(require("@mui/material/DialogActions"));
const DialogContent_1 = (0, tslib_1.__importDefault)(require("@mui/material/DialogContent"));
const DialogTitle_1 = (0, tslib_1.__importDefault)(require("@mui/material/DialogTitle"));
const Stack_1 = (0, tslib_1.__importDefault)(require("@mui/material/Stack"));
const Slide_1 = (0, tslib_1.__importDefault)(require("@mui/material/Slide"));
const TextField_1 = (0, tslib_1.__importDefault)(require("@mui/material/TextField/TextField"));
const Badge_1 = (0, tslib_1.__importDefault)(require("@mui/material/Badge"));
const Transition = react_1.default.forwardRef(function Transition(props, ref) {
    return react_1.default.createElement(Slide_1.default, Object.assign({ direction: "up", ref: ref }, props));
});
class ThreadsModal extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            badgeFilter: '',
            searchFilter: ''
        };
        this.computeFilteredList = () => {
            const { badgeFilter, searchFilter } = this.state;
            let filteredList = this.props.threadDump.threads;
            if (badgeFilter !== '') {
                filteredList = filteredList.filter(t => t.threadState === badgeFilter);
            }
            if (searchFilter !== '') {
                filteredList = filteredList.filter(t => t.lockName && t.lockName.toLowerCase().includes(searchFilter.toLowerCase()));
            }
            return filteredList;
        };
        this.computeCounters = () => {
            let threadDumpAll = 0;
            let threadDumpRunnable = 0;
            let threadDumpWaiting = 0;
            let threadDumpTimedWaiting = 0;
            let threadDumpBlocked = 0;
            this.props.threadDump.threads.forEach(t => {
                switch (t.threadState) {
                    case 'RUNNABLE':
                        threadDumpRunnable++;
                        break;
                    case 'WAITING':
                        threadDumpWaiting++;
                        break;
                    case 'TIMED_WAITING':
                        threadDumpTimedWaiting++;
                        break;
                    case 'BLOCKED':
                        threadDumpBlocked++;
                        break;
                    default:
                        break;
                }
            });
            threadDumpAll = threadDumpRunnable + threadDumpWaiting + threadDumpTimedWaiting + threadDumpBlocked;
            return { threadDumpAll, threadDumpRunnable, threadDumpWaiting, threadDumpTimedWaiting, threadDumpBlocked };
        };
        this.getBadgeClass = threadState => {
            if (threadState === 'RUNNABLE') {
                return 'badge-success';
            }
            else if (threadState === 'WAITING') {
                return 'badge-info';
            }
            else if (threadState === 'TIMED_WAITING') {
                return 'badge-warning';
            }
            else if (threadState === 'BLOCKED') {
                return 'badge-danger';
            }
        };
        this.updateBadgeFilter = badge => () => this.setState({ badgeFilter: badge });
        this.updateSearchFilter = event => this.setState({ searchFilter: event.target.value });
    }
    render() {
        const { showModal, handleClose, threadDump } = this.props;
        let counters = {};
        let filteredList = null;
        if (threadDump && threadDump.threads) {
            counters = this.computeCounters();
            filteredList = this.computeFilteredList();
        }
        return (react_1.default.createElement(Dialog_1.default, { open: showModal, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, maxWidth: "md", fullWidth: true, "aria-describedby": "alert-dialog-slide-description" },
            react_1.default.createElement(DialogTitle_1.default, null, "Threads dump"),
            react_1.default.createElement(DialogContent_1.default, null,
                react_1.default.createElement(Stack_1.default, { direction: "row", spacing: 2, sx: { paddingTop: '20px' } },
                    react_1.default.createElement(Badge_1.default, { badgeContent: counters.threadDumpAll || 0, color: "primary" },
                        react_1.default.createElement(Button_1.default, { variant: "outlined", onClick: this.updateBadgeFilter(''), color: "primary" }, "All")),
                    react_1.default.createElement(Badge_1.default, { badgeContent: counters.threadDumpRunnable || 0, color: "success" },
                        react_1.default.createElement(Button_1.default, { variant: "outlined", onClick: this.updateBadgeFilter('RUNNABLE'), color: "success" }, "Runnable")),
                    react_1.default.createElement(Badge_1.default, { badgeContent: counters.threadDumpWaiting || 0, color: "info" },
                        react_1.default.createElement(Button_1.default, { variant: "outlined", onClick: this.updateBadgeFilter('WAITING'), color: "info" }, "Waiting")),
                    react_1.default.createElement(Badge_1.default, { badgeContent: counters.threadDumpTimedWaiting || 0, color: "warning" },
                        react_1.default.createElement(Button_1.default, { variant: "outlined", onClick: this.updateBadgeFilter('TIMED_WAITING'), color: "warning" }, "Timed Waiting")),
                    react_1.default.createElement(Badge_1.default, { badgeContent: counters.threadDumpBlocked || 0, color: "error" },
                        react_1.default.createElement(Button_1.default, { variant: "outlined", onClick: this.updateBadgeFilter('BLOCKED'), color: "error" }, "Blocked"))),
                react_1.default.createElement(TextField_1.default, { label: "Filter by Lock Name...", onChange: this.updateSearchFilter, variant: "outlined", sx: { marginTop: '20px', marginBottom: '20px' } }),
                react_1.default.createElement("div", { style: { padding: '10px' } }, filteredList
                    ? filteredList.map((threadDumpInfo, i) => (react_1.default.createElement("div", { key: `dump-${i}` },
                        react_1.default.createElement("h6", null,
                            ' ',
                            react_1.default.createElement("span", { className: 'badge ' + this.getBadgeClass(threadDumpInfo.threadState) }, threadDumpInfo.threadState),
                            "\u00A0",
                            threadDumpInfo.threadName,
                            " (ID ",
                            threadDumpInfo.threadId,
                            ")\u00A0"),
                        react_1.default.createElement(thread_item_1.default, { threadDumpInfo: threadDumpInfo }),
                        react_1.default.createElement(TableRow_1.default, null,
                            react_1.default.createElement(Table_1.default, null,
                                react_1.default.createElement(TableHead_1.default, null,
                                    react_1.default.createElement(TableRow_1.default, null,
                                        react_1.default.createElement(TableCell_1.default, null, "Blocked Time"),
                                        react_1.default.createElement(TableCell_1.default, null, "Blocked Count"),
                                        react_1.default.createElement(TableCell_1.default, null, "Waited Time"),
                                        react_1.default.createElement(TableCell_1.default, null, "Waited Count"),
                                        react_1.default.createElement(TableCell_1.default, null, "Lock Name"))),
                                react_1.default.createElement(TableBody_1.default, null,
                                    react_1.default.createElement(TableRow_1.default, { key: threadDumpInfo.lockName },
                                        react_1.default.createElement(TableCell_1.default, null, threadDumpInfo.blockedTime),
                                        react_1.default.createElement(TableCell_1.default, null, threadDumpInfo.blockedCount),
                                        react_1.default.createElement(TableCell_1.default, null, threadDumpInfo.waitedTime),
                                        react_1.default.createElement(TableCell_1.default, null, threadDumpInfo.waitedCount),
                                        react_1.default.createElement(TableCell_1.default, { className: "thread-dump-modal-lock", title: threadDumpInfo.lockName },
                                            react_1.default.createElement("code", null, threadDumpInfo.lockName)))))))))
                    : null)),
            react_1.default.createElement(DialogActions_1.default, null,
                react_1.default.createElement(Button_1.default, { color: "primary", onClick: handleClose }, "Close")))
        // <Modal isOpen={showModal} toggle={handleClose} className="modal-lg">
        //   <ModalHeader toggle={handleClose}>Threads dump</ModalHeader>
        //   <ModalBody>
        //     <Badge color="primary" className="hand" onClick={this.updateBadgeFilter('')}>
        //       All&nbsp;
        //       <Badge pill>{counters.threadDumpAll || 0}</Badge>
        //     </Badge>
        //     &nbsp;
        //     <Badge color="success" className="hand" onClick={this.updateBadgeFilter('RUNNABLE')}>
        //       Runnable&nbsp;
        //       <Badge pill>{counters.threadDumpRunnable || 0}</Badge>
        //     </Badge>
        //     &nbsp;
        //     <Badge color="info" className="hand" onClick={this.updateBadgeFilter('WAITING')}>
        //       Waiting&nbsp;
        //       <Badge pill>{counters.threadDumpWaiting || 0}</Badge>
        //     </Badge>
        //     &nbsp;
        //     <Badge color="warning" className="hand" onClick={this.updateBadgeFilter('TIMED_WAITING')}>
        //       Timed Waiting&nbsp;
        //       <Badge pill>{counters.threadDumpTimedWaiting || 0}</Badge>
        //     </Badge>
        //     &nbsp;
        //     <Badge color="danger" className="hand" onClick={this.updateBadgeFilter('BLOCKED')}>
        //       Blocked&nbsp;
        //       <Badge pill>{counters.threadDumpBlocked || 0}</Badge>
        //     </Badge>
        //     &nbsp;
        //     <div className="mt-2">&nbsp;</div>
        //     <Input type="text" className="form-control" placeholder="Filter by Lock Name..." onChange={this.updateSearchFilter} />
        //     <div style={{ padding: '10px' }}>
        //       {filteredList
        //         ? filteredList.map((threadDumpInfo, i) => (
        //             <div key={`dump-${i}`}>
        //               <h6>
        //                 {' '}
        //                 <span className={'badge ' + this.getBadgeClass(threadDumpInfo.threadState)}>{threadDumpInfo.threadState}</span>
        //                 &nbsp;
        //                 {threadDumpInfo.threadName} (ID {threadDumpInfo.threadId}
        //                 )&nbsp;
        //               </h6>
        //               <ThreadItem threadDumpInfo={threadDumpInfo} />
        //               <Row>
        //                 <Table>
        //                   <TableHead>
        //                     <TableRow>
        //                       <TableCell>Blocked Time</TableCell>
        //                       <TableCell>Blocked Count</TableCell>
        //                       <TableCell>Waited Time</TableCell>
        //                       <TableCell>Waited Count</TableCell>
        //                       <TableCell>Lock Name</TableCell>
        //                     </TableRow>
        //                   </TableHead>
        //                   <TableBody>
        //                     <TableRow key={threadDumpInfo.lockName}>
        //                       <TableCell>{threadDumpInfo.blockedTime}</TableCell>
        //                       <TableCell>{threadDumpInfo.blockedCount}</TableCell>
        //                       <TableCell>{threadDumpInfo.waitedTime}</TableCell>
        //                       <TableCell>{threadDumpInfo.waitedCount}</TableCell>
        //                       <TableCell className="thread-dump-modal-lock" title={threadDumpInfo.lockName}>
        //                         <code>{threadDumpInfo.lockName}</code>
        //                       </TableCell>
        //                     </TableRow>
        //                   </TableBody>
        //                 </Table>
        //               </Row>
        //             </div>
        //           ))
        //         : null}
        //     </div>
        //   </ModalBody>
        //   <ModalFooter>
        //     <Button color="primary" onClick={handleClose}>
        //       Close
        //     </Button>
        //   </ModalFooter>
        // </Modal>
        );
    }
}
exports.ThreadsModal = ThreadsModal;
exports.default = ThreadsModal;
//# sourceMappingURL=threads-modal.js.map