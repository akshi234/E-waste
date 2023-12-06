import React from "react";
import "./login.css";
import Navbar from "../navbar/Navbar";
import Form from "../../Pages/form/Form";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="login-wrapper">
        <div className="overlay"></div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
