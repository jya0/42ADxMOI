import React from 'react';
import { Box, Typography } from '@mui/material';

const BadgeItem = ({ color, icon: Icon, text }) => {
  return (
    <Box
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center'
    }}
    >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${color}`,
        borderRadius: '15px',
        padding: 1,
        width: '50px',
        height: '50px',
        boxSizing: 'border-box'
      }}
    >
      <Icon sx={{ fontSize: 30, color: color }} />
    </Box>
    <Typography variant="body2" sx={{ marginTop: 1, color: '5D5D5D' }}>
      {text}
    </Typography>
    </Box>
  );
};

export default BadgeItem;
