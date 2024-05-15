import moiLogo from './images/moiLogo.png';
import rightHeader from './images/rightHeader.png';
import './App.css';
import QuickDashboard from './components/QuickDashboard';
import Stack from '@mui/material/Stack';

import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Dashboard from './components/Dashboard.js';
import Services from './components/Services.js';

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
        <Header />
        <Dashboard />
        <Services />
      </div>
    </div>
  );
}

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

export default App;
