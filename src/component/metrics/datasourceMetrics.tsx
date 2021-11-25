import React from 'react';
import { TextFormat } from '../../formatter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface IDatasourceMetricsProps {
  datasourceMetrics: any;
  twoDigitAfterPointFormat: string;
}

export class DatasourceMetrics extends React.Component<IDatasourceMetricsProps> {

  render() {
    const { datasourceMetrics, twoDigitAfterPointFormat } = this.props;
    return (
      <div>
        <h3>DataSource statistics (time in millisecond)</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <span>Connection Pool Usage </span>
                (active: {datasourceMetrics.active.value}, min: {datasourceMetrics.min.value}, max: {datasourceMetrics.max.value}, idle:{' '}
                {datasourceMetrics.idle.value})
              </TableCell>
              <TableCell className="text-end">Count</TableCell>
              <TableCell className="text-end">Mean</TableCell>
              <TableCell className="text-end">Min</TableCell>
              <TableCell className="text-end">p50</TableCell>
              <TableCell className="text-end">p75</TableCell>
              <TableCell className="text-end">p95</TableCell>
              <TableCell className="text-end">p99</TableCell>
              <TableCell className="text-end">Max</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell >Acquire</TableCell >
              <TableCell  className="text-end">{datasourceMetrics.acquire.count}</TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.acquire.mean} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.acquire['0.0']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.acquire['0.5']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.acquire['0.75']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.acquire['0.95']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.acquire['0.99']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.acquire.max} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Creation</TableCell >
              <TableCell  className="text-end">{datasourceMetrics.creation.count}</TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.creation.mean} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.creation['0.0']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.creation['0.5']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.creation['0.75']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.creation['0.95']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.creation['0.99']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.creation.max} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
            </TableRow>
            <TableRow>
              <TableCell >Usage</TableCell >
              <TableCell  className="text-end">{datasourceMetrics.usage.count}</TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.usage.mean} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.usage['0.0']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.usage['0.5']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.usage['0.75']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.usage['0.95']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.usage['0.99']} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
              <TableCell  className="text-end">
                <TextFormat value={datasourceMetrics.usage.max} type={'number'} format={twoDigitAfterPointFormat} />
              </TableCell >
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
