import React from 'react';
import { TextFormat } from '../../formatter';
import { nanToZero } from '../../util/number-utils';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiLinearProgress from './mui-linear-progress';

export interface IHttpRequestMetricsProps {
  requestMetrics: any;
  wholeNumberFormat: string;
  twoDigitAfterPointFormat: string;
}

export class HttpRequestMetrics extends React.Component<IHttpRequestMetricsProps> {

  render() {
    const { requestMetrics, wholeNumberFormat, twoDigitAfterPointFormat } = this.props;
    return (
      <div>
        <h3>HTTP requests (time in milliseconds)</h3>
        <p>
          <span>Total requests:</span>{' '}
          <b>
            <TextFormat value={requestMetrics.all.count} type="number" format={wholeNumberFormat} />
          </b>
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Count</TableCell>
              <TableCell className="text-end">Mean</TableCell>
              <TableCell className="text-end">Max</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(requestMetrics.percode).map((key, index) => (
              <TableRow key={index}>
                <TableCell>{key}</TableCell>
                <TableCell>
                  <MuiLinearProgress color="success" value={100 * requestMetrics.percode[key].count / requestMetrics.all.count} />
                </TableCell>
                <TableCell className="text-end">
                  <TextFormat value={nanToZero(requestMetrics.percode[key].mean)} type="number" format={twoDigitAfterPointFormat} />
                </TableCell>
                <TableCell className="text-end">
                  <TextFormat value={nanToZero(requestMetrics.percode[key].max)} type="number" format={twoDigitAfterPointFormat} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
