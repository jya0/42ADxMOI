import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import moiLogo from "../images/moiLogo.png";
import rightHeader from "../images/rightHeader.png";

import "../styles/Header.css";

function Header() {
  return (
    <Stack direction="row" spacing={2} className="App-header">
      <img src={moiLogo} className="header-img" alt="logo" />
      <Stack direction="row" spacing={2} className="App-header-text">
        <Link to="/">Home</Link>
        <p>|</p>
        <Link to="/profile">Profile</Link>
        <p>|</p>
        <Link to="/audio">Voice Commander</Link>
        <p>|</p>
        <a href="/">Sign Out</a> {/* If this is a sign-out link, you may not need to use React Router */}
      </Stack>
      <img src={rightHeader} className="header-img" alt="info" />
    </Stack>
  );
}

export default Header;
