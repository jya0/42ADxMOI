import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import '../styles/LeagueCard.css';

const LeagueCard = ({ league }) => {
  const { name, Color,cashback} = league;

  return (
    <Box
      className="league-card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginLeft: 2,
        width: '100%',
        backgroundColor: 'none',
        boxSizing: 'border-box',
      }}
    >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ShieldIcon sx={{ fontSize: 25, color: Color }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: Color }}>
          {name}
        </Typography>
        <Box marginLeft='5px' display='flex' alignItems='center'>
        <CurrencyExchangeIcon sx={{ fontSize: 13, color: Color }} />
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: Color }}>
          {cashback}
        </Typography>
        </Box>
    </Box>
    <Typography variant="body2" fontSize='10px' color='#5D5D5D' marginLeft='25px'>
        Current League
    </Typography>
    </Box>
  );
};

export default LeagueCard;
