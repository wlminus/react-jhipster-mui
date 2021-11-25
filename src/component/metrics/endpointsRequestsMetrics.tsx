import React from 'react';
import { TextFormat } from '../../formatter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface IEndpointsRequestsMetricsProps {
  endpointsRequestsMetrics: any;
  wholeNumberFormat: string;
}

export class EndpointsRequestsMetrics extends React.Component<IEndpointsRequestsMetricsProps> {
  render() {
    const { endpointsRequestsMetrics, wholeNumberFormat } = this.props;
    return (
      <div>
        <h3>Endpoints requests (time in millisecond)</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Method</TableCell>
              <TableCell>Endpoint url</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Mean</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(endpointsRequestsMetrics).map(([key, entry]) =>
              Object.entries(entry).map(([method, methodValue]) => (
                <TableRow key={key + '-' + method}>
                  <TableCell>{method}</TableCell>
                  <TableCell>{key}</TableCell>
                  <TableCell>{methodValue.count}</TableCell>
                  <TableCell>
                    <TextFormat value={methodValue.mean} type="number" format={wholeNumberFormat} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}
