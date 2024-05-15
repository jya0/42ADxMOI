import React from "react";
import "../styles/ServiceCard.css";

export default function ServiceCard({ name, img }) {
  return (
    <>
      <div className="service-card">
        <div className="service-card-head">
          <img src={img} alt="car icon" width="30" height="30" />
          <p>{name}</p>
        </div>
        <div className="service-card-body">
          <a href="#" className="service-card-link">start service</a>
          <a href="#">view more</a>
        </div>
      </div>
    </>
  );
}
