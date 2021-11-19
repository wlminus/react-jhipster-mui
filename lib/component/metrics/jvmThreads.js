"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JvmThreads = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const threads_modal_1 = (0, tslib_1.__importDefault)(require("./threads-modal"));
const mui_linear_progress_1 = (0, tslib_1.__importDefault)(require("./mui-linear-progress"));
const Button_1 = (0, tslib_1.__importDefault)(require("@mui/material/Button"));
class JvmThreads extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showModal: false,
            threadStats: {
                threadDumpAll: 0,
                threadDumpRunnable: 0,
                threadDumpTimedWaiting: 0,
                threadDumpWaiting: 0,
                threadDumpBlocked: 0
            }
        };
        this.openModal = () => {
            this.setState({
                showModal: true
            });
        };
        this.handleClose = () => {
            this.setState({
                showModal: false
            });
        };
        this.renderModal = () => react_1.default.createElement(threads_modal_1.default, { handleClose: this.handleClose, showModal: this.state.showModal, threadDump: this.props.jvmThreads });
    }
    countThreadByState() {
        if (this.props.jvmThreads.threads) {
            const threadStats = {
                threadDumpAll: 0,
                threadDumpRunnable: 0,
                threadDumpTimedWaiting: 0,
                threadDumpWaiting: 0,
                threadDumpBlocked: 0
            };
            this.props.jvmThreads.threads.forEach(thread => {
                if (thread.threadState === 'RUNNABLE') {
                    threadStats.threadDumpRunnable += 1;
                }
                else if (thread.threadState === 'WAITING') {
                    threadStats.threadDumpWaiting += 1;
                }
                else if (thread.threadState === 'TIMED_WAITING') {
                    threadStats.threadDumpTimedWaiting += 1;
                }
                else if (thread.threadState === 'BLOCKED') {
                    threadStats.threadDumpBlocked += 1;
                }
            });
            threadStats.threadDumpAll =
                threadStats.threadDumpRunnable + threadStats.threadDumpWaiting + threadStats.threadDumpTimedWaiting + threadStats.threadDumpBlocked;
            this.setState({ threadStats });
        }
    }
    componentDidMount() {
        if (this.props.jvmThreads.threads) {
            this.countThreadByState();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.jvmThreads.threads && this.props.jvmThreads.threads !== prevProps.jvmThreads.threads) {
            this.countThreadByState();
        }
    }
    render() {
        const { threadStats } = this.state;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("b", null, "Threads"),
            " (Total: ",
            threadStats.threadDumpAll,
            ")",
            ' ',
            react_1.default.createElement("p", null,
                react_1.default.createElement("span", null, "Runnable"),
                " ",
                threadStats.threadDumpRunnable),
            react_1.default.createElement(mui_linear_progress_1.default, { color: "success", value: threadStats.threadDumpRunnable * 100 / threadStats.threadDumpAll }),
            react_1.default.createElement("p", null,
                react_1.default.createElement("span", null, "Timed Waiting"),
                " (",
                threadStats.threadDumpTimedWaiting,
                ")"),
            react_1.default.createElement(mui_linear_progress_1.default, { color: "warning", value: threadStats.threadDumpTimedWaiting * 100 / threadStats.threadDumpAll }),
            react_1.default.createElement("p", null,
                react_1.default.createElement("span", null, "Waiting"),
                " (",
                threadStats.threadDumpWaiting,
                ")"),
            react_1.default.createElement(mui_linear_progress_1.default, { color: "warning", value: threadStats.threadDumpWaiting * 100 / threadStats.threadDumpAll }),
            react_1.default.createElement("p", null,
                react_1.default.createElement("span", null, "Blocked"),
                " (",
                threadStats.threadDumpBlocked,
                ")"),
            react_1.default.createElement(mui_linear_progress_1.default, { color: "success", value: threadStats.threadDumpBlocked * 100 / threadStats.threadDumpAll }),
            this.renderModal(),
            react_1.default.createElement("div", { style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px'
                } },
                react_1.default.createElement(Button_1.default, { color: "primary", onClick: this.openModal, variant: "contained" }, "Expand"))));
    }
}
exports.JvmThreads = JvmThreads;
//# sourceMappingURL=jvmThreads.js.map