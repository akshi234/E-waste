import React, { useState, useEffect } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function Form() {
  const navigate = useNavigate();

  const handleBusinessPage = () => {
    navigate("/Homepage");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const savedFormData = localStorage.getItem("FormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }

    const savedUserId = localStorage.getItem("UserId");
    if (savedUserId) {
      setIsLoggedIn(true);
      setUserEmail(savedUserId);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // Validate Email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate Password
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("FormData", JSON.stringify(formData));

      // Get the user's email from the form data
      const userEmail = formData.email;

      // Set UserId in localStorage
      localStorage.setItem("UserId", userEmail);
      setIsLoggedIn(true);
      setUserEmail(userEmail);
      handleBusinessPage();
    } else {
      console.log("Form validation failed");
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    if (response && response.profileObj) {
      // Simulate user login by setting a user ID (replace this with your actual login logic)
      const userId = response.profileObj.email; // Replace with the actual user ID
      localStorage.setItem("UserId", userId);
      setIsLoggedIn(true);
      setUserEmail(userId);
    }
    // Handle Google login response
  };

  const responseFacebook = (response) => {
    console.log(response);
    if (response && response.email) {
      // Simulate user login by setting a user ID (replace this with your actual login logic)
      const userId = response.email; // Replace with the actual user ID
      localStorage.setItem("UserId", userId);
      setIsLoggedIn(true);
      setUserEmail(userId);
    }
    // Handle Facebook login response
  };

  return (
    <div className="business-form-wrapper">
      <form className="business-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <div className="error-message">{formErrors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <div className="error-message">{formErrors.password}</div>
          )}
        </div>

        <button type="submit">Submit</button>

        {/* Google Login */}
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="google-login-button"
        />

        {/* Facebook Login */}
        <FacebookLogin
          appId="YOUR_FACEBOOK_APP_ID"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className="facebook-login-button"
            >
              Login with Facebook
            </button>
          )}
        />
      </form>
    </div>
  );
}
