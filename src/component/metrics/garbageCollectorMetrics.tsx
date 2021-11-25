import React from 'react';
import { TextFormat } from '../../formatter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiLinearProgress from './mui-linear-progress';
import Grid from "@mui/material/Grid";

export interface IGarbageCollectorMetricsProps {
  garbageCollectorMetrics: any;
  wholeNumberFormat: string;
}

export class GarbageCollectorMetrics extends React.Component<IGarbageCollectorMetricsProps> {

  render() {
    const { garbageCollectorMetrics, wholeNumberFormat } = this.props;
    return (
      <div>
        <h3>Garbage Collection</h3>
        <Grid container>
          <Grid md={4} xs={4} lg={4}>
            <span>
              GC Live Data Size/GC Max Data Size (<TextFormat
                value={garbageCollectorMetrics['jvm.gc.live.data.size'] / 1048576}
                type={'number'}
                format={wholeNumberFormat}
              />M /{' '}
              <TextFormat value={garbageCollectorMetrics['jvm.gc.max.data.size'] / 1048576} type={'number'} format={wholeNumberFormat} />M)
            </span>

            <MuiLinearProgress color="success" value={100 * garbageCollectorMetrics['jvm.gc.live.data.size'] / garbageCollectorMetrics['jvm.gc.max.data.size']} />
          </Grid>
          <Grid md={4} xs={4} lg={4}>
            <span>
              GC Memory Promoted/GC Memory Allocated (<TextFormat
                value={garbageCollectorMetrics['jvm.gc.memory.promoted'] / 1048576}
                type={'number'}
                format={wholeNumberFormat}
              />M /{' '}
              <TextFormat value={garbageCollectorMetrics['jvm.gc.memory.allocated'] / 1048576} type={'number'} format={wholeNumberFormat} />M)
            </span>
            
            <MuiLinearProgress color="success" value={100 * garbageCollectorMetrics['jvm.gc.memory.promoted'] / garbageCollectorMetrics['jvm.gc.memory.allocated']} />
          </Grid>
          <Grid md={4} xs={4} lg={4}>
            <Grid container>
              <Grid md={9} xs={9} lg={9}>Classes loaded</Grid>
              <Grid md={3} xs={3} lg={3}>{garbageCollectorMetrics.classesLoaded}</Grid>
            </Grid>
            <Grid container>
              <Grid md={9} xs={9} lg={9}>Classes unloaded</Grid>
              <Grid md={3} xs={3} lg={3}>{garbageCollectorMetrics.classesUnloaded}</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
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
              <TableCell>jvm.gc.pause</TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics.count} type={'number'} format={'0,0.[000]'} />
              </TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics.mean} type={'number'} format={'0,0.[000]'} />
              </TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.0']} type={'number'} format={'0,0.[000]'} />
              </TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.5']} type={'number'} format={'0,0.[000]'} />
              </TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.75']} type={'number'} format={'0,0.[000]'} />
              </TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.95']} type={'number'} format={'0,0.[000]'} />
              </TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics['0.99']} type={'number'} format={'0,0.[000]'} />
              </TableCell>
              <TableCell className="text-end">
                <TextFormat value={garbageCollectorMetrics.max} type={'number'} format={'0,0.[000]'} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
