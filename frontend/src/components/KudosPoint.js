import React from 'react';
import { Box, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import '../styles/KudosPoint.css';

const abbreviateNumber = (number) => {
  const SI_SYMBOL = ["", "K", "M", "B"];
  const tier = Math.log10(Math.abs(number)) / 3 | 0;
  if (tier === 0) return number;
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = number / scale;
  return scaled.toFixed(1) + suffix;
};

const KudosPoint = ({ WalletPoints }) => {
  const formattedWalletPoints = abbreviateNumber(WalletPoints);

  // Ensure formattedWalletPoints is converted to a number before performing arithmetic
  const formattedAED = abbreviateNumber(parseFloat(WalletPoints) / 100);

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
        <MonetizationOnIcon sx={{ fontSize: 25, color: '#B68A36',marginRight: '4px' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#B68A36' }}>
          {formattedWalletPoints} 
        </Typography>
        <Typography variant="h7" sx={{ fontWeight: 'bold', color: '#B68A36' , marginLeft: '10px'}}>
          Kudos
        </Typography>
      </Box>
      <Typography variant="body2" fontSize='10px' color='#5D5D5D' marginLeft='25px'>
        {formattedAED} AED
      </Typography>
    </Box>
  );
};

export default KudosPoint;
