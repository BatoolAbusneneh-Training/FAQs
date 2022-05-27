import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { data } from "./data";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const menu = (
    <>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <Link className={element.className} to={element.path}>
              {element.name}
            </Link>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="navbar-container">
      <nav>
        <div className="nav-container">
          <img
            className="nav-brand"
            id="img"
            alt="logo"
            src="./images/Twenteefore - Logo 2.png"
          />
          <div id="menu" className="menu">
            {menu}
          </div>
          <button className="login" id="loginn">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/login"
            >
              LogIn
            </Link>
          </button>
          <button
            className={active ? "hamburger active-hamburger" : "hamburger"}
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div id="div">
        {" "}
        {active && <div className="nav-dropdown">{menu}</div>}
      </div>{" "}
    </div>
  );
};
export default NavBar;
