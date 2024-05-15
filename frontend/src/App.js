import React from "react";
<<<<<<< .merge_file_cMjeap
// import{BrowserRouter,Switch,Route}from 'react-router-dom'
=======
import{BrowserRouter,Routes,Route}from 'react-router-dom' 
>>>>>>> .merge_file_21ymUp
import "./App.css";
// import Header from "./components/Header.js";
// import Home from "./pages/Home.js";
// import Profile from "./pages/Profile.js";
import Payment from "./pages/Payment.js";

function App() {
  return (
<<<<<<< .merge_file_cMjeap
    // <BrowserRouter>
    //   <div className="App">
    //     <div className="mainContainer">
    //       <Header />
    //       <Switch>
    //         {/* <Route path="/" exact component={Home} />
    //         <Route path="/profile" component={Profile} /> */}
    //         <Route path="/payment" component={Payment} />
    //       </Switch>
    //     </div>
    //   </div>
    // </BrowserRouter>
    <Payment />
=======
      <div className="App">
        <div className="mainContainer">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
>>>>>>> .merge_file_21ymUp
  );
}

export default App;
