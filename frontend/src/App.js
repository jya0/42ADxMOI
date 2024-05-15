import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Dashboard from "./components/Dashboard.js";
import Services from "./components/Services.js";
import Call from "./images/call.svg";
import Picture from "./images/picture.png";
import Kudos from "./components/Kudos.js";


function App() {
  const [isPictureVisible, setIsPictureVisible] = useState(false);

  const handleButtonClick = () => {
    setIsPictureVisible(!isPictureVisible);
  };

  const handlePictureClick = () => {
    setIsPictureVisible(false);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <Header />
        <Dashboard />
        <Kudos />
        <Services />
      </div>
      <button className="call" onClick={handleButtonClick}>
        <img src={Call} alt="call icon" width="40" height="40" />
      </button>
      {isPictureVisible && (
        <img
          className="call-picture"
          src={Picture}
          alt="Displayed when button is clicked"
          onClick={handlePictureClick}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default App;
