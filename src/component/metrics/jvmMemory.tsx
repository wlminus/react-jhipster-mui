import React from 'react';
import { TextFormat } from '../../formatter';
import MuiLinearProgress from './mui-linear-progress';

export interface IJvmMemoryProps {
  jvmMetrics: any;
  wholeNumberFormat: string;
}

export class JvmMemory extends React.Component<IJvmMemoryProps> {
  render() {
    const { jvmMetrics, wholeNumberFormat } = this.props;
    return (
      <div>
        <h3>Memory</h3>
        {Object.keys(jvmMetrics).map((key, index) => (
          <div key={index}>
            {jvmMetrics[key].max !== -1 ? (
              <span>
                <span>{key}</span> (<TextFormat value={jvmMetrics[key].used / 1048576} type="number" format={wholeNumberFormat} />M /{' '}
                <TextFormat value={jvmMetrics[key].max / 1048576} type="number" format={wholeNumberFormat} />
                M)
              </span>
            ) : (
              <span>
                <span>{key}</span> <TextFormat value={jvmMetrics[key].used / 1048576} type="number" format={wholeNumberFormat} />M
              </span>
            )}
            <div>
              Committed : <TextFormat value={jvmMetrics[key].committed / 1048576} type="number" format={wholeNumberFormat} />M
            </div>
            {jvmMetrics[key].max !== -1 ? (
              <MuiLinearProgress color="success" value={jvmMetrics[key].used * 100 / jvmMetrics[key].max} />
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    );
  }
}
