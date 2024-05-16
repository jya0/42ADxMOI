import React , { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import { Badge, Button, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BadgeItem from './BadgeItem';
import UserCard from './UserCard';
import CurrentXp from './CurrentXp';
import KudosPoint from './KudosPoint';
import LeagueCard from './LeagueCard';
import XpChart from './XpChart';
import { ReactComponent as Banker } from '../images/icons/Banker_icon.svg';
import { ReactComponent as Rookie } from '../images/icons/Rookie_icon.svg';
import { ReactComponent as Bureaucrat } from '../images/icons/Bureaucrat_icon.svg';
import { ReactComponent as DigitalCitizen } from '../images/icons/DigitalCitizen_icon.svg';
import { ReactComponent as EarlyBird } from '../images/icons/EarlyBird_icon.svg';
import { ReactComponent as SilverTongue } from '../images/icons/SilverTongue_icon.svg';
import { ReactComponent as TheFlash } from '../images/icons/TheFlash_icon.svg';
import { ReactComponent as SafetySavvy } from '../images/icons/SafetySavvy_icon.svg';
import { ReactComponent as WhiteGold } from '../images/icons/WhiteGold_icon.svg';
import Transactions from '../images/Transactions.svg';
import Statistics from '../images/Statistics.svg';
import PendingPaymentState1 from '../images/PendingPaymentState1.svg';
import PendingPaymentState2 from "../images/PendingPaymentState2.svg";
import { Link } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser || getDefaultUserData();
  });

  // Function to get default user data
  function getDefaultUserData() {
    return {
      name: "Muhammad Al Mansoori",
      avatarUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/middle-eastern-arab-man-avatar-10971672-8779384.png?f=webp",
      level: 9,
      currentXP: 4675,
      walletPoint: 290000,
      totalXP: 10000,
    };
  }

  useEffect(() => {
    const isPaymentPage = location.pathname === '/payments';
    const hasVisitedPaymentsPage = localStorage.getItem("hasVisitedPaymentsPage") === "true";

    if (isPaymentPage && !hasVisitedPaymentsPage) {
      const updatedUser = { ...user, walletPoint: 300000, totalXP: 12000 };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      localStorage.setItem("hasVisitedPaymentsPage", "true");
    } else if (!isPaymentPage && hasVisitedPaymentsPage) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    } else if (!isPaymentPage && !hasVisitedPaymentsPage) {
      const defaultUser = getDefaultUserData();
      setUser(defaultUser);
      localStorage.setItem("user", JSON.stringify(defaultUser));
    }
  }, [location.pathname]);

  const league = {
    name: "Platinum",
    Color: "#716991",
    cashback: "5%",
  };

  const payments = {
    total: "290",
  };

  


  const xpData = [
    { name: 'Mon', xp: 500 },
    { name: 'Tue', xp: 700 },
    { name: 'Wed', xp: 900 },
    { name: 'Thu', xp: 800 },
    { name: 'Fri', xp: 600 },
    { name: 'Sat', xp: 1000 },
    { name: 'Sun', xp: user.currentXP - (500 + 700 + 900 + 800 + 600 + 1000) },
  ];

  const isProfilePage = location.pathname === '/profile';

  return (
    <div className="Dashboard">
      <div className={isProfilePage ? 'grid-container-profile' : 'grid-container-home'}>
        <div className="grid-item item1">
          <UserCard user={user} />
        </div>
        {isProfilePage && (
          <>
            <div className="grid-item item4">
              <div className='chart-div'>
                <p>XP Over the Week</p>
                <XpChart data={xpData} />
              </div>
            </div>
            <div className="grid-item item5">
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#B68A36', paddingBottom: '10px' }}>
                Badges
              </Typography>
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
            <div className="grid-item item6">
              <img src={Statistics} width='100%' alt="Statistics" />
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
              <LocalOfferIcon sx={{ color: "#B68A36", fontSize: 40 }} className="offer-icon" />
              <span>Redeem kudos</span>
            </Button>
            <div className="grid-item item11">
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#B68A36' }}>
                Transactions
              </Typography>
              <img src={Transactions} height='100%' alt="Transactions" />
            </div>
          </>
        )}
        <div className="grid-item item2">
              <CurrentXp currentXP={user.currentXP} />
        </div>
        <div className="grid-item item3">
            <LeagueCard league={league} />
        </div>
        <div className="grid-item item7">
          {isProfilePage ? (
            <>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#B68A36', marginBottom: '10px' }}>
                Pending Payments
              </Typography>
              <img src={PendingPaymentState1} width='90%' alt="Pending Payments" />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#B68A36', marginBottom: '10px' }}>
                Total: {payments.total} AED
              </Typography>
              <Button 
                component={Link}
                to="/payments" 
                className="grid-item item10" variant="outlined" sx={{
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
                justifyContent: 'center',
                padding: '10px 20px',
                fontSize: 'clamp(16px, 5vw, 24px)', // Responsive font size
                textTransform: 'uppercase',
                fontWeight: '700',
                width: '50%',
                height: '15%',
              }}>
                <span>PAY</span>
              </Button>
            </>
          ) : (
            <>
              <div className='hompage-item7-horizontal'>
              <img src={PendingPaymentState1} width='60%' alt="Pending Payments" />
              <div className='hompage-item7-content'>
              <Typography variant="h7" sx={{ fontWeight: 'bold', color: '#B68A36', marginBottom:'5px'}}>
                Pending Payments
              </Typography>
              <Typography variant="h7" sx={{ fontWeight: 'bold', color: '#B68A36', marginBottom:'5px'}}>
                Total: {payments.total} AED
              </Typography>
              <Button
                component={Link}
                to="/payments"
                className="grid-item item10"
                variant="outlined"
                sx={{
                  borderColor: "#B68A36",
                  color: "#B68A36",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "rgb(182, 138, 54)",
                    color: "#fff",
                    borderColor: "#B68A36",
                    "& .offer-icon": {
                      color: "#fff", // Change icon color to white on hover
                    },
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0px 15px",
                  fontSize: "clamp(14px, 20px)", // Responsive font size
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                <span>PAY</span>
              </Button>
              </div>
              </div>
              
            </>
          )}
        </div>
        <div className="grid-item item8">
          <KudosPoint WalletPoints={user.walletPoint} />
        </div>
        <div className="grid-item item9">
          <Badge badgeContent={4} sx={{ "& .MuiBadge-badge": { backgroundColor: "#B68A36", color: "#fff", fontWeight: "bold" } }}>
            <NotificationsIcon sx={{ color: "#B68A36", fontSize: 40 }} />
          </Badge>
        </div>
        </div>
      </div>
  );
}

export default Dashboard;
