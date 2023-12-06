import React from "react";
import "./trader.css";
import Navbar from "../navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";

export default function Trader() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state && location.state.locationData;

  const handleTraderClick = () => {
    navigate("/TraderInfo");
  };
  return (
    <div className="trader-body">
      <Navbar />
      <div className="overlay"></div>
      <div className="locator">
        <i className="fa-solid fa-location-dot"></i>
        <span>{locationData}</span>
      </div>
      <div className="traders">
        <div className="row">
          <div className="column" onClick={handleTraderClick}>
            <h3 className="heading">Vikram Trader</h3>
            <div className="all">
              <p>plastic and metal</p>
              <p>2 KM far</p>
            </div>
          </div>
          <div className="column" onClick={handleTraderClick}>
            <h3 className="heading">Shivam Trader</h3>
            <div className="all">
              <p>plastic and metal</p>
              <p>2 KM far</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column" onClick={handleTraderClick}>
            <h3 className="heading">Nirnay Trader</h3>
            <div className="all">
              <p>plastic and metal</p>
              <p>2 KM far</p>
            </div>
          </div>
          <div className="column" onClick={handleTraderClick}>
            <h3 className="heading">Sriva Trader</h3>
            <div className="all">
              <p>plastic and metal</p>
              <p>2 KM far</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
