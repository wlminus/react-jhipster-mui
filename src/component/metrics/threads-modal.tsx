import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ThreadItem from './thread-item';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from "@mui/material/Stack";
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField/TextField';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';

export interface IThreadsModalProps {
  showModal: boolean;
  handleClose: (e) => void;
  threadDump: any;
}

export interface IThreadsModalState {
  badgeFilter: string;
  searchFilter: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export class ThreadsModal extends React.Component<IThreadsModalProps, IThreadsModalState> {
  state: IThreadsModalState = {
    badgeFilter: '',
    searchFilter: ''
  };

  computeFilteredList = () => {
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

  computeCounters = () => {
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

  getBadgeColor = threadState => {
    if (threadState === 'RUNNABLE') {
      return 'success';
    } else if (threadState === 'WAITING') {
      return 'info';
    } else if (threadState === 'TIMED_WAITING') {
      return 'warning';
    } else if (threadState === 'BLOCKED') {
      return 'error';
    }
  };

  updateBadgeFilter = badge => () => this.setState({ badgeFilter: badge });

  updateSearchFilter = event => this.setState({ searchFilter: event.target.value });

  render() {
    const { showModal, handleClose, threadDump } = this.props;
    let counters = {} as any;
    let filteredList = null;
    if (threadDump && threadDump.threads) {
      counters = this.computeCounters();
      filteredList = this.computeFilteredList();
    }

    return (
      <Dialog
        open={showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Threads dump</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={2} sx={{ paddingTop: '20px' }}>
            <Badge badgeContent={counters.threadDumpAll || 0} color="primary">
              <Button variant="outlined" onClick={this.updateBadgeFilter('')} color="primary">All</Button>
            </Badge>
            <Badge badgeContent={counters.threadDumpRunnable || 0} color="success">
              <Button variant="outlined" onClick={this.updateBadgeFilter('RUNNABLE')} color="success">Runnable</Button>
            </Badge>
            <Badge badgeContent={counters.threadDumpWaiting || 0} color="info">
              <Button variant="outlined" onClick={this.updateBadgeFilter('WAITING')} color="info">Waiting</Button>
            </Badge>
            <Badge badgeContent={counters.threadDumpTimedWaiting || 0} color="warning">
              <Button variant="outlined" onClick={this.updateBadgeFilter('TIMED_WAITING')} color="warning">Timed Waiting</Button>
            </Badge>
            <Badge badgeContent={counters.threadDumpBlocked || 0} color="error">
              <Button variant="outlined" onClick={this.updateBadgeFilter('BLOCKED')} color="error">Blocked</Button>
            </Badge>
          </Stack>

          <TextField label="Filter by Lock Name..." onChange={this.updateSearchFilter} variant="outlined" sx={{ marginTop: '20px', marginBottom: '20px' }} />

          <div style={{ padding: '10px' }}>
            {filteredList
              ? filteredList.map((threadDumpInfo, i) => (
                  <div key={`dump-${i}`}>
                    <h6>
                      <Chip label={threadDumpInfo.threadState} color={this.getBadgeColor(threadDumpInfo.threadState)} />
                      &nbsp;
                      {threadDumpInfo.threadName} (ID {threadDumpInfo.threadId})&nbsp;
                    </h6>
                    <ThreadItem threadDumpInfo={threadDumpInfo} />
                    <TableRow>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Blocked Time</TableCell>
                            <TableCell>Blocked Count</TableCell>
                            <TableCell>Waited Time</TableCell>
                            <TableCell>Waited Count</TableCell>
                            <TableCell>Lock Name</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow key={threadDumpInfo.lockName}>
                            <TableCell>{threadDumpInfo.blockedTime}</TableCell>
                            <TableCell>{threadDumpInfo.blockedCount}</TableCell>
                            <TableCell>{threadDumpInfo.waitedTime}</TableCell>
                            <TableCell>{threadDumpInfo.waitedCount}</TableCell>
                            <TableCell className="thread-dump-modal-lock" title={threadDumpInfo.lockName}>
                              <code>{threadDumpInfo.lockName}</code>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableRow>
                  </div>
                ))
              : null}
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ThreadsModal;
