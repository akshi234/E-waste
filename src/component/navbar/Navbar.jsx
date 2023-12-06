import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showUserOptions, setShowUserOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUserId = localStorage.getItem("UserId");
    if (savedUserId) {
      setIsLoggedIn(true);
      setUserEmail(savedUserId);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("UserId");
    setIsLoggedIn(false);
    setUserEmail("");
    setShowUserOptions(false);
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const handleBusinessClick = () => {
    if (isLoggedIn) {
      navigate("/Business");
    } else {
      alert("Please log in to access the business page");
    }
  };

  return (
    <div className="navbar">
      <p className="logo">E-waste.com</p>
      <Link to="Eco Store" className="eco">
        Eco Store
      </Link>
      <Link to="Evaluate & Sale" className="evaluate">
        Evaluate & Sale
      </Link>
      <Link to="/Book Appointment" className="appointment">
        Book Appointment
      </Link>

      {isLoggedIn ? (
        <div className="user-icon" onClick={toggleUserOptions}>
          <span>
            <i className="fas fa-user"></i>
          </span>

          {showUserOptions && (
            <div className="user-options">
              <span className="user-emaill">{userEmail}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/Login" className="loginn">
          Login
        </Link>
      )}
      <button onClick={handleBusinessClick} className="busi-btn">
        For Business{" "}
      </button>
    </div>
  );
}

export default Navbar;
