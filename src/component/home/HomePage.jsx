import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function HomePage() {
  const navigate = useNavigate();

  const handleNextPageClick = () => {
    navigate("/Login");
  };

  console.log("from home page");
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        {/* <div className="overlay"></div> */}
        <div className="wrapper-content">
          <div className="wrapper-txt">
            <h1>lorem suris sat sapentie bonanzayi da multos annos</h1>
            <button className="sec-btn" onClick={handleNextPageClick}>
              Login{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>hwllo</h1>
      </div>
    </div>
  );
}
