import React from "react";
import{BrowserRouter,Switch,Route}from 'react-router-dom' 
import "./App.css";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Payment from "./pages/Payment.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="mainContainer">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/payment" component={Payment} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
