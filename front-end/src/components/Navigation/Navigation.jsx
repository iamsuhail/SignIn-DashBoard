/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Navigation = ({ className }) => {
  return (
    <div className={`navigation ${className}`}>
      <div className="text-wrapper">Help</div>
      <div className="div">Contact Us</div>
      <div className="text-wrapper-2">Settings</div>
      <div className="text-wrapper-3">Users</div>
      <div className="text-wrapper-4">Schedules</div>
      <div className="text-wrapper-5">Transactions</div>
      <div className="text-wrapper-6">Dashboard</div>
      <img
        className="transaction-icon"
        alt="Transaction icon"
        src="https://c.animaapp.com/jN1ylutF/img/transaction-icon-1@2x.png"
      />
      <img
        className="schedule-icon"
        alt="Schedule icon"
        src="https://c.animaapp.com/jN1ylutF/img/schedule-icon-1@2x.png"
      />
      <img
        className="dashboard-icon"
        alt="Dashboard icon"
        src="https://c.animaapp.com/jN1ylutF/img/dashboard-icon-1@2x.png"
      />
      <img className="setting-icon" alt="Setting icon" src="https://c.animaapp.com/jN1ylutF/img/setting-icon-1.svg" />
      <img className="user-icon" alt="User icon" src="https://c.animaapp.com/jN1ylutF/img/user-icon-1@2x.png" />
      <div className="text-wrapper-7">Board.</div>
    </div>
  );
};
