import React, { useState } from "react";
import "./business.css";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Business() {
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState({
    city: "",
    pin: "",
    state: "",
  });

  const handleNextPageClick = () => {
    const locationString = `${locationData.city}, ${locationData.pin}, ${locationData.state}`;
    navigate("/trader", { state: { locationData: locationString } });
  };

  const isFormValid = () => {
    return (
      locationData.city.trim() !== "" &&
      locationData.pin.trim() !== "" &&
      locationData.state.trim() !== ""
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData({
      ...locationData,
      [name]: value,
    });
  };

  return (
    <div className="main-body">
      <Navbar />
      <div className="overlay"></div>
      <h1 className="head">Detect Location Automatically</h1>
      <button className="input-box">
        Detect Location <i className="fa-solid fa-location-dot"></i>
      </button>
      <h2 className="or">OR</h2>
      <div className="location">
        <h1>Enter Location Manually</h1>
        <div className="input-group">
          <input
            placeholder="City"
            className="city"
            name="city"
            value={locationData.city}
            onChange={handleChange}
          />
          <input
            placeholder="Pin"
            className="city"
            name="pin"
            value={locationData.pin}
            onChange={handleChange}
          />
          <input
            placeholder="State"
            className="city"
            name="state"
            value={locationData.state}
            onChange={handleChange}
          />
        </div>
        <button
          className="sub-btn"
          onClick={handleNextPageClick}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
