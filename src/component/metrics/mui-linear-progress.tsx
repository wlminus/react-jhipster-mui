import React from 'react';
import { Box, Typography } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const MuiLinearProgress = (props: LinearProgressProps & { value: number }) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress sx={{
            height: 20
          }} variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 42 }}>
          <Typography variant="body2" color="text.secondary">
            {`${Math.round(
              props.value,
            )}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

export default MuiLinearProgress;