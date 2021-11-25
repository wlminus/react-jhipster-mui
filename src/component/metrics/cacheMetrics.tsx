import React from 'react';
import { TextFormat } from '../../formatter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { nanToZero } from '../../util/number-utils';

export interface ICacheMetricsProps {
  cacheMetrics: any;
  twoDigitAfterPointFormat: string;
}

export class CacheMetrics extends React.Component<ICacheMetricsProps> {

  render() {
    const { cacheMetrics, twoDigitAfterPointFormat } = this.props;
    return (
      <div>
        <h3>Cache statistics</h3>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cache Name</TableCell>
              <TableCell>Cache Hits</TableCell>
              <TableCell>Cache Misses</TableCell>
              <TableCell>Cache Gets</TableCell>
              <TableCell>Cache Hit %</TableCell>
              <TableCell>Cache Miss %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(cacheMetrics).map(key => (
              <TableRow key={key}>
                <TableCell >{key}</TableCell >
                <TableCell >{cacheMetrics[key]['cache.gets.hit']}</TableCell >
                <TableCell >{cacheMetrics[key]['cache.gets.miss']}</TableCell >
                <TableCell >{cacheMetrics[key]['cache.gets.miss'] + cacheMetrics[key]['cache.gets.hit']}</TableCell >
                <TableCell >
                  <TextFormat
                    value={nanToZero(
                      100 *
                        cacheMetrics[key]['cache.gets.hit'] /
                        (cacheMetrics[key]['cache.gets.hit'] + cacheMetrics[key]['cache.gets.miss'])
                    )}
                    type="number"
                    format={twoDigitAfterPointFormat}
                  />
                </TableCell >
                <TableCell >
                  <TextFormat
                    value={nanToZero(
                      100 *
                        cacheMetrics[key]['cache.gets.miss'] /
                        (cacheMetrics[key]['cache.gets.hit'] + cacheMetrics[key]['cache.gets.miss'])
                    )}
                    type="number"
                    format={twoDigitAfterPointFormat}
                  />
                </TableCell >
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
