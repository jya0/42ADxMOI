import React from 'react';
import '../styles/Dashboard.css';
import { Badge, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import UserCard from './UserCard';
import CurrentXp from './CurrentXp';
function Dashboard() {
  const user = {
    name: "John Doe",
    avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
    level: 9,
    currentXP: 4675,
    totalXP: 10000
  };

  return (
    <div className="Dashboard">
      <div className="grid-container">
        <div className="grid-item item1">
            <UserCard user={user} />
        </div>
        <div className="grid-item item2">
            <CurrentXp currentXP={user.currentXP} />
        </div>
        <div className="grid-item item3">3</div>
        <div className="grid-item item4">4</div>
        <div className="grid-item item5">5</div>
        <div className="grid-item item6">6</div>
        <div className="grid-item item7">7</div>
        <div className="grid-item item8">8</div>
        <div className="grid-item item9">
          <Badge badgeContent={4} sx={{ "& .MuiBadge-badge": { backgroundColor: "#B68A36", color: "#fff",fontWeight:"bold" } }}>
            <NotificationsIcon sx={{ color: "#B68A36", fontSize: 40 }} />
          </Badge>
        </div>
        <Button className="grid-item item10" variant="outlined" sx={{ 
            borderColor: "#B68A36", 
            color: "#B68A36",
            borderRadius: '15px',
            '&:hover': {
              backgroundColor: 'rgb(182, 138, 54)',
              color: "#fff",
              borderColor: "#B68A36",
              '& .offer-icon': {
                color: "#fff", // Change icon color to white on hover
              },
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            padding: '10px 20px',
            fontSize: 'clamp(16px, 5vw, 24px)', // Responsive font size
            textTransform: 'uppercase',
            fontWeight: '700',
          }}>
            <LocalOfferIcon sx={{ color: "#B68A36", fontSize: 40 }} className="offer-icon"/>
            <span>Redeem kudos</span>
        </Button>  
        <div className="grid-item item11">11</div>
      </div>
    </div>
  );
}

export default Dashboard;
