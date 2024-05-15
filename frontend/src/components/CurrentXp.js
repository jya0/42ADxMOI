import React from 'react';
import { Box, Typography } from '@mui/material';
import ThunderIcon from '@mui/icons-material/FlashOn'; // Energy/thunder icon
import '../styles/CurrentXp.css';

const CurrentXp = ({ currentXP }) => {
  return (
    <Box
      className="current-xp"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'none',
        boxSizing: 'border-box',
        width: '100%'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'start' }}>
        <ThunderIcon sx={{ fontSize: 20, color: '#B68A36' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold',color: '#B68A36' }}>
          {currentXP}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ fontSize: 1, color:'#5D5D5D' }}>
        Experience Points
      </Typography>
    </Box>
  );
};

export default CurrentXp;