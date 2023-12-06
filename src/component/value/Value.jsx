import React, { useState, useEffect } from "react";
import "./value.css";

export default function EstimatedValueForm() {
  const initialFormData = {
    industrialWasteValue: "",
    pickupCharges: "",
    netAmount: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({
    industrialWasteValue: "",
    pickupCharges: "",
    netAmount: "",
  });

  const [note, setNote] = useState(
    "This is an estimated value. Exact value will be decided after the appointment."
  );

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (
      !formData.industrialWasteValue ||
      !formData.industrialWasteValue.trim()
    ) {
      newErrors.industrialWasteValue = "Industrial Waste Value is required";
      isValid = false;
    }

    if (!formData.pickupCharges || !formData.pickupCharges.trim()) {
      newErrors.pickupCharges = "Pickup Charges is required";
      isValid = false;
    }

    if (!formData.netAmount || !formData.netAmount.trim()) {
      newErrors.netAmount = "Net Amount is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleBookNow = () => {
    if (validateForm()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log("Booking Now:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="estimated-value-form">
      <h2>Estimated Value</h2>
      <form>
        <div className="group">
          <label htmlFor="industrialWasteValue">Industrial Waste Value:</label>
          <input
            type="text"
            id="industrialWasteValue"
            name="industrialWasteValue"
            value={formData.industrialWasteValue}
            onChange={handleInputChange}
          />
          {formErrors.industrialWasteValue && (
            <div className="error-message">
              {formErrors.industrialWasteValue}
            </div>
          )}
        </div>
        <div className="group">
          <label htmlFor="pickupCharges">Pickup Charges:</label>
          <input
            type="text"
            id="pickupCharges"
            name="pickupCharges"
            value={formData.pickupCharges}
            onChange={handleInputChange}
          />
          {formErrors.pickupCharges && (
            <div className="error-message">{formErrors.pickupCharges}</div>
          )}
        </div>
        <div className="group">
          <label htmlFor="netAmount">Net Amount:</label>
          <input
            type="text"
            id="netAmount"
            name="netAmount"
            value={formData.netAmount}
            onChange={handleInputChange}
          />
          {formErrors.netAmount && (
            <div className="error-message">{formErrors.netAmount}</div>
          )}
        </div>
      </form>
      <p className="notee">{note}</p>
      <button type="button" onClick={handleBookNow} className="esti-btn">
        Book Now
      </button>
    </div>
  );
}
