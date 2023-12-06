import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./component/home/HomePage";
import Login from "./component/login/Login";
import Business from "./component/business/Business";
import Trader from "./component/trader/Trader";
import TraderInfo from "./component/traderInfo/TraderInfo";
import Value from "./component/value/Value.jsx";

function App() {
  console.log("from app.jsx");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Trader" element={<Trader />} />
        <Route path="/TraderInfo" element={<TraderInfo />} />
        <Route path="/Value" element={<Value />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
