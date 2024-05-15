import React from 'react';
import { Avatar, Box, LinearProgress, Typography } from '@mui/material';
import ThunderIcon from '@mui/icons-material/FlashOn';
import '../styles/UserCard.css';

const UserCard = ({ user }) => {
  const { name, avatarUrl, level, currentXP, totalXP } = user;
  const progress = (currentXP / totalXP) * 100;

  return (
    <Box
      className="level-card"
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        width: '100%',
        backgroundColor: 'none',
        boxSizing: 'border-box'
      }}
    >
      <Avatar
        src={avatarUrl}
        alt={name}
        sx={{ width: 56, height: 56,border: '2px solid #B68A36', }}
      />
      <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'medium', marginLeft: 3, color: "#5D5D5D" }}>
          {name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                className="level-circle"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#B68A36',
                  color: '#fff',
                  height: 20,
                  width: 20,
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '2px solid white',
                }}
              >
                {level}
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{ height: 7, borderRadius: 5, backgroundColor: '#FFE9BF', '& .MuiLinearProgress-bar': { backgroundColor: '#B68A36' } }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft:3,
                color:'#5D5D5D',
              }}
            >
              <Typography variant="body2" fontSize='13px'>Level</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThunderIcon
                  sx={{
                    fontSize: 16,
                    marginRight: 0.5,
                    color: '#B68A36',
                  }}
                />
                <Typography variant="body2" fontSize='13px'>
                  {`${currentXP}/${totalXP} XP`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserCard;
