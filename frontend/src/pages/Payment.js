import React from "react";
import "../styles/Payment.css";
import PaymentIcon from "../images/payment1.svg";

function Payment() {
  return (
    <div className="payment">
      <img src={PaymentIcon} alt="payment icon" />
      <div>
        <h2>Pending Payments</h2>
        <ul>
          <li>
            <span>1</span>
            <p>Red signal fine</p>
            <p className="day day-early day-late">2 days left</p>
            <p className="price">220 AED</p>
            <button>pay</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Payment;
