// import React, { useState } from "react";
// import "./App.css";
// import Header from "./components/Header.js";
// import Dashboard from "./components/Dashboard.js";
// import Services from "./components/Services.js";

// function App() {
//   const [isPictureVisible, setIsPictureVisible] = useState(false);

//   const handleButtonClick = () => {
//     setIsPictureVisible(!isPictureVisible);
//   };
//   return (
//     <div className="App">
//       <div className="mainContainer">
//         <Header />
//         <Dashboard />
//         <Services />
//       </div>
//       <button className="call" onClick={handleButtonClick}>
//         <img src={Call} alt="call icon" width="40" height="40" />
//       </button>
//       {isPictureVisible && (
//         <img className="call-picture" src={Picture} alt="Displayed when button is clicked" />
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Stack direction="row" spacing={2} className="App-header">
//         <img src={moiLogo} className="header-img" alt="logo" />
//         <Stack direction="row" spacing={2} className="App-header-text">
//           <a href="/">My Profile</a>
//           <p>|</p>
//           <a href="/">Signout</a>
//           <p>|</p>
//           <a href="/">Advance Search</a>
//         </Stack>
//         <img src={rightHeader} className="header-img" alt="info" />
//       </Stack>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Dashboard from "./components/Dashboard.js";
import Services from "./components/Services.js";
import Call from "./images/call.svg";
import Picture from "./images/picture.png";

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
        <div className="services-main">
          <Services />
        </div>
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
