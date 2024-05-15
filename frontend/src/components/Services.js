import React from "react";
import "../styles/Services.css";
import Card from "../images/car.svg";
import Volunteer from "../images/volunteer.svg";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <>
      <h2 className="service-title">Our Services</h2>
      <div className="services">
        <div className="filter">
          filter by
          <select name="filter" id="filter">
            <option value="all">All</option>
            <option value="traffic-licencing">Traffic & Licencing</option>
            <option value="civil-defense">Civil Defense</option>
            <option value="crime-security">Crime Security</option>
          </select>
        </div>
        <div className="services-container">
          <ServiceCard name="Volunteering" img={Volunteer} />
          <ServiceCard name="Issue a vehicle driving license" img={Card} />
          <ServiceCard name="Issuance of a Vehicle Registration" img={Card} />
          <ServiceCard name="Traffic File Opening" img={Card} />
          <ServiceCard name="Vehicle Ownership Renewal" img={Card} />
          <ServiceCard name="Renew a vehicle driver's license" img={Card} />
        </div>
      </div>
    </>
  );
}

export default Services;
