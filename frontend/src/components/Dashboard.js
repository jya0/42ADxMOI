import React from 'react';
import '../styles/Dashboard.css';
import { Badge, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BadgeItem from './BadgeItem';
import UserCard from './UserCard';
import CurrentXp from './CurrentXp';
import LeagueCard from './LeagueCard';
import { ReactComponent as Banker } from '../images/icons/Banker_icon.svg';
import { ReactComponent as Rookie } from '../images/icons/Rookie_icon.svg';
import { ReactComponent as Bureaucrat } from '../images/icons/Bureaucrat_icon.svg';
import { ReactComponent as DigitalCitizen } from '../images/icons/DigitalCitizen_icon.svg';
import { ReactComponent as EarlyBird } from '../images/icons/EarlyBird_icon.svg';
import { ReactComponent as SilverTongue } from '../images/icons/SilverTongue_icon.svg';
import { ReactComponent as TheFlash } from '../images/icons/TheFlash_icon.svg';
import { ReactComponent as SafetySavvy } from '../images/icons/SafetySavvy_icon.svg';
import { ReactComponent as WhiteGold } from '../images/icons/WhiteGold_icon.svg';
function Dashboard() {
  const user = {
    name: "John Doe",
    avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
    level: 9,
    currentXP: 4675,
    totalXP: 10000
  };
  const league = {
    name: "Platinum",
    Color: "#716991", // Default color
    cashback:"5%"
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
        <div className="grid-item item3">
            <LeagueCard league={league} />
        </div>
        <div className="grid-item item4">4</div>
        <div className="grid-item item5">
            <div className="grid-container-badges">
                <BadgeItem color="#D59AFB" icon={Rookie} text="Rookie" />
                <BadgeItem color="#FFE244" icon={EarlyBird} text="Early bird" />
                <BadgeItem color="#636DFF" icon={Bureaucrat} text="Bureaucrat" />
                <BadgeItem color="#FA8B06" icon={TheFlash} text="The Flash" />
                <BadgeItem color="#98E45C" icon={SafetySavvy} text="Safety Savvy" />
                <BadgeItem color="#FF5454" icon={SilverTongue} text="Silver Tongue" />
                <BadgeItem color="#4CDAE5" icon={DigitalCitizen} text="Digital Citizen" />
                <BadgeItem color="#F7C0FF" icon={Banker} text="Banker" />
                <BadgeItem color="#BCCE55" icon={WhiteGold} text="White Gold" />
            </div>
        </div>
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
