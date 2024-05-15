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
        alignItems: 'start',
        marginLeft: 2,
        backgroundColor: 'none',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ThunderIcon sx={{ fontSize: 30, color: '#B68A36' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold',color: '#B68A36' }}>
          {currentXP}
        </Typography>
      </Box>
      <Typography variant="body2" fontSize='10px' color='#5D5D5D' marginLeft='30px'>
        Experience Points
      </Typography>
    </Box>
  );
};

export default CurrentXp;