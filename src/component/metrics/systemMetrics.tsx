import React from 'react';
import { TextFormat } from '../../formatter';
import MuiLinearProgress from './mui-linear-progress';
import Grid from "@mui/material/Grid";

export interface ISystemMetricsProps {
  systemMetrics: any;
  wholeNumberFormat: string;
  timestampFormat: string;
}

export class SystemMetrics extends React.Component<ISystemMetricsProps> {
  static convertMillisecondsToDuration(ms) {
    const times = {
      year: 31557600000,
      month: 2629746000,
      day: 86400000,
      hour: 3600000,
      minute: 60000,
      second: 1000
    };
    let timeString = '';
    let plural = '';
    for (const key in times) {
      if (Math.floor(ms / times[key]) > 0) {
        plural = Math.floor(ms / times[key]) > 1 ? 's' : '';
        timeString += Math.floor(ms / times[key]).toString() + ' ' + key.toString() + plural + ' ';
        ms = ms - times[key] * Math.floor(ms / times[key]);
      }
    }
    return timeString;
  }

  render() {
    const { systemMetrics, wholeNumberFormat, timestampFormat } = this.props;
    return (
      <div>
        <h4>System</h4>
        <Grid container>
          <Grid md={4} xs={4} lg={4}>Uptime</Grid>
          <Grid md={8} xs={8} lg={8} className="text-end">
            {SystemMetrics.convertMillisecondsToDuration(systemMetrics['process.uptime'])}
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={4} xs={4} lg={4}>Start time</Grid>
          <Grid md={8} xs={8} lg={8} className="text-end">
            <TextFormat value={systemMetrics['process.start.time']} type="date" format={timestampFormat} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={9} xs={9} lg={9}>Process CPU usage</Grid>
          <Grid md={3} xs={3} lg={3} className="text-end">
            <TextFormat value={100 * systemMetrics['process.cpu.usage']} type="number" format={wholeNumberFormat} /> %
          </Grid>
        </Grid>
        <MuiLinearProgress color="success" value={100 * systemMetrics['process.cpu.usage']} />
        <Grid container>
          <Grid md={9} xs={9} lg={9}>System CPU usage</Grid>
          <Grid md={3} xs={3} lg={3} className="text-end">
            <TextFormat value={100 * systemMetrics['system.cpu.usage']} type="number" format={wholeNumberFormat} /> %
          </Grid>
        </Grid>
        <MuiLinearProgress color="success" value={100 * systemMetrics['system.cpu.usage']} />
        <Grid container>
          <Grid md={9} xs={9} lg={9}>System CPU count</Grid>
          <Grid md={3} xs={3} lg={3} className="text-end">
            {systemMetrics['system.cpu.count']}
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={9} xs={9} lg={9}>System 1m Load average</Grid>
          <Grid md={3} xs={3} lg={3} className="text-end">
            <TextFormat value={systemMetrics['system.load.average.1m']} type="number" format={wholeNumberFormat} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={7} xs={7} lg={7}>Process files max</Grid>
          <Grid md={5} xs={5} lg={5} className="text-end">
            <TextFormat value={systemMetrics['process.files.max']} type="number" format={wholeNumberFormat} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={4} xs={4} lg={4}>Process files open</Grid>
          <Grid md={8} xs={8} lg={8} className="text-end">
            <TextFormat value={systemMetrics['process.files.open']} type="number" format={wholeNumberFormat} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
