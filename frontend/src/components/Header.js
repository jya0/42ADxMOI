import React from 'react';
import Stack from '@mui/material/Stack';
import moiLogo from '../images/moiLogo.png';
import rightHeader from '../images/rightHeader.png';
import '../styles/Header.css';

function Header() {
  return (
    <Stack direction="row" spacing={2} className="App-header">
      <img src={moiLogo} className="header-img" alt="logo" />
      <Stack direction="row" spacing={2} className="App-header-text">
        <a href="/">My Profile</a>
        <p>|</p>
        <a href="/">Signout</a>
        <p>|</p>
        <a href="/">Advance Search</a>
      </Stack>
      <img src={rightHeader} className="header-img" alt="info" />
    </Stack>
  );
}

export default Header;
