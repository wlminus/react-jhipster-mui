import React from 'react';
import ThreadsModal from './threads-modal';
import MuiLinearProgress from './mui-linear-progress';
import Button from '@mui/material/Button';

export interface IJvmThreadsProps {
  jvmThreads: any;
  wholeNumberFormat: string;
}

export interface IJvmThreadsState {
  showModal: boolean;
  threadStats: {
    threadDumpAll: number;
    threadDumpRunnable: number;
    threadDumpTimedWaiting: number;
    threadDumpWaiting: number;
    threadDumpBlocked: number;
  };
}

export class JvmThreads extends React.Component<IJvmThreadsProps, IJvmThreadsState> {
  state: IJvmThreadsState = {
    showModal: false,
    threadStats: {
      threadDumpAll: 0,
      threadDumpRunnable: 0,
      threadDumpTimedWaiting: 0,
      threadDumpWaiting: 0,
      threadDumpBlocked: 0
    }
  };

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
        } else if (thread.threadState === 'WAITING') {
          threadStats.threadDumpWaiting += 1;
        } else if (thread.threadState === 'TIMED_WAITING') {
          threadStats.threadDumpTimedWaiting += 1;
        } else if (thread.threadState === 'BLOCKED') {
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

  openModal = () => {
    this.setState({
      showModal: true
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false
    });
  };

  renderModal = () => <ThreadsModal handleClose={this.handleClose} showModal={this.state.showModal} threadDump={this.props.jvmThreads} />;

  render() {
    const { threadStats } = this.state;
    return (
      <div>
        <b>Threads</b> (Total: {threadStats.threadDumpAll}){' '}
        <p>
          <span>Runnable</span> {threadStats.threadDumpRunnable}
        </p>
        <MuiLinearProgress color="success" value={threadStats.threadDumpRunnable * 100 / threadStats.threadDumpAll} />
        
        <p>
          <span>Timed Waiting</span> ({threadStats.threadDumpTimedWaiting})
        </p>
        <MuiLinearProgress color="warning" value={threadStats.threadDumpTimedWaiting * 100 / threadStats.threadDumpAll} />
        
        <p>
          <span>Waiting</span> ({threadStats.threadDumpWaiting})
        </p>
        <MuiLinearProgress color="warning" value={threadStats.threadDumpWaiting * 100 / threadStats.threadDumpAll} />
        
        <p>
          <span>Blocked</span> ({threadStats.threadDumpBlocked})
        </p>
        <MuiLinearProgress color="success" value={threadStats.threadDumpBlocked * 100 / threadStats.threadDumpAll} />
        {this.renderModal()}
        
        <div style={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px'
        }}>
          <Button color="primary" onClick={this.openModal} variant="contained">Expand</Button>
        </div> 
      </div>
    );
  }
}
