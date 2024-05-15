import React, { useState } from "react";
import "../styles/Payment.css";
import PaymentIcon from "../images/payment1.svg";
import Apple from "../images/apple.svg";
import Visa from "../images/visa.svg";
import Master from "../images/master.svg";

function Payment() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [stepCompleted, setStepCompleted] = useState(false);

  const handleSelectPayment = (paymentType) => {
    setSelectedPayment(paymentType);
    setStepCompleted(true); // Mark step as completed when a payment method is selected
  };
  const [selected, setSelected] = useState([]);

  const handleSelect = (index) => {
    setSelected((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const items = [
    { id: 1, name: "Red signal fine", daysLeft: 2, price: "220 AED" },
    { id: 2, name: "Speed limit", daysLeft: 4, price: "200 AED" },
    { id: 3, name: "Red signal fine", daysLeft: 35, price: "250 AED" },
    { id: 4, name: "Red signal fine", daysLeft: 46, price: "300 AED" },
  ];

  return (
    <div className="payment">
      <div className="payment-list">
        <img src={PaymentIcon} alt="payment icon" />
        <div className="payment-right">
          <h2>Pending Payments</h2>
          <ul>
            {items.map((item, index) => (
              <li
                key={item.id}
                onClick={() => handleSelect(index)}
                className={
                  selected && selected.includes(index) ? "selected" : ""
                }
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                <span>{item.id}.</span>
                <p className="price-name">{item.name}</p>
                <p
                  className={`day ${
                    item.daysLeft < 5 ? "day-late" : "day-early"
                  }`}
                >
                  {item.daysLeft} days left
                </p>
                <p className="price">{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="payment-method">
        <h2>Payment</h2>
        <span className="payment-text">Speed limit fine: </span>
        <span className="payment-price">220 AED</span>
        <ul>
          <li>
            <button
              className={selectedPayment === "Apple" ? "selected" : ""}
              onClick={() => handleSelectPayment("Apple")}
            >
              <img src={Apple} alt="Apple payment" />
            </button>
          </li>
          <li>
            <button
              className={selectedPayment === "VisaMaster" ? "selected" : ""}
              onClick={() => handleSelectPayment("VisaMaster")}
            >
              <img className="visa" src={Visa} alt="Visa payment" />
              <img src={Master} alt="Master payment" />
            </button>
          </li>
        </ul>
        {stepCompleted && (
          <div className="step-completed">
            {/* <img src={successImage} alt="Success" /> */}
            <p className="success">Payment Method Selected!</p>
          </div>
        )}
        <ul className="kudos-list">
          <li className="kudos-item">
            <button className="kudos-btn">1k</button>
          </li>
          <li className="kudos-item">
            <button className="kudos-btn">2k</button>
          </li>
          <li className="kudos-item">
            <button className="kudos-btn">3k</button>
          </li>
          <li className="kudos-item">
            <button className="kudos-btn">4k</button>
          </li>
          <li className="kudos-item">
            <button className="kudos-btn active">5k</button>
          </li>
        </ul>
        <p>
          discount: <span>-50aed</span>
        </p>
        <p>
          total: <span>170 aed</span>
        </p>
      </div>
    </div>
  );
}

export default Payment;
