import React, { useState, useEffect } from "react";
import "./traderInfo.css";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function TraderInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    industryName: "",
    address: "",
    materialType: "",
    pickupInterval: "",
    industrialWasteAmount: "",
  });

  const [formErrors, setFormErrors] = useState({
    industryName: "",
    address: "",
    materialType: "",
    pickupInterval: "",
    industrialWasteAmount: "",
  });

  const handleNextClick = () => {
    navigate("/Value");
  };

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      industryName: "",
      address: "",
      materialType: "",
      pickupInterval: "",
      industrialWasteAmount: "",
    };

    if (formData.industryName.trim() === "") {
      newErrors.industryName = "Industry Name is required";
      isValid = false;
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Complete Address is required";
      isValid = false;
    }

    if (formData.materialType.trim() === "") {
      newErrors.materialType = "Material Type is required";
      isValid = false;
    }

    if (formData.pickupInterval.trim() === "") {
      newErrors.pickupInterval = "Pickup Interval is required";
      isValid = false;
    }

    if (formData.industrialWasteAmount.trim() === "") {
      newErrors.industrialWasteAmount = "Industrial Waste Amount is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div>
      <div className="trader-info-container">
        <Navbar />
        <div className="trader-info">
          <h3 className="trader-name">Vikram Trader</h3>
          <div className="info">
            <p>Plastic and Metal</p>
            <p>2 KM far</p>
          </div>
          <p className="appoint">Book your appointment</p>

          <form onSubmit={handleSubmit}>
            <div className="form-groups">
              <label htmlFor="industryName">Industry Name:</label>
              <input
                id="industryName"
                name="industryName"
                value={formData.industryName}
                onChange={handleChange}
              />
              {formErrors.industryName && (
                <div className="error-message">{formErrors.industryName}</div>
              )}
            </div>
            <div className="form-groups">
              <label htmlFor="address">Complete Address:</label>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {formErrors.address && (
                <div className="error-message">{formErrors.address}</div>
              )}
            </div>
            <div className="form-groups">
              <label htmlFor="materialType">Material Type:</label>
              <select
                id="materialType"
                name="materialType"
                value={formData.materialType}
                onChange={handleChange}
              >
                <option value="">Select Material Type</option>
                <option value="plastic">Plastic</option>
                <option value="metal">Metal</option>
              </select>
              {formErrors.materialType && (
                <div className="error-message">{formErrors.materialType}</div>
              )}
            </div>
            <div className="form-groups">
              <label htmlFor="pickupInterval">Pickup Interval:</label>
              <input
                id="pickupInterval"
                name="pickupInterval"
                value={formData.pickupInterval}
                onChange={handleChange}
              />
              {formErrors.pickupInterval && (
                <div className="error-message">{formErrors.pickupInterval}</div>
              )}
            </div>
            <div className="form-groups">
              <label htmlFor="industrialWasteAmount">
                Industrial Waste Amount:
              </label>
              <input
                id="industrialWasteAmount"
                name="industrialWasteAmount"
                value={formData.industrialWasteAmount}
                onChange={handleChange}
              />
              {formErrors.industrialWasteAmount && (
                <div className="error-message">
                  {formErrors.industrialWasteAmount}
                </div>
              )}
            </div>
            <button type="submit" onClick={handleNextClick}>
              continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
