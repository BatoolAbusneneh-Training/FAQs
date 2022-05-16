import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="./images/Twenteefore - Logo 2.png" />
      <div id="navbar">
        <Link className="homeLink" to="/">
          Home
        </Link>
        <Link className="orderLink" to="/">
          Order
        </Link>
        <Link className="leaderboardsLink" to="/">
          Leaderboards
        </Link>
        <Link className="marketplaceLink" to="/">
          Marketplace
        </Link>
        <Link className="faqsLink" to="/faqs">
          FAQs
        </Link>

        <Link className="loginLink" to="/">
          <button id="loginLink">Log In</button>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
