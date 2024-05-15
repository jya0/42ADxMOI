import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Payment from "./pages/Payment.js";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payments" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
