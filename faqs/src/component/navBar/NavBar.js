import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { data } from "./data";

const NavBar = () => {
  return (
    <div className="navbar">
      {data.map((element, index) => {
        return <div>
          <Link id="li" to={element.path}>
          {element.name}
        </Link>
        </div>;
      })}    
        <img className="logo" src="./images/Twenteefore - Logo 2.png" />
      <div id="navbar">

      {data.map((ele, i) => {
        return <div key={i}>
          <Link className={ele.className} to={ele.path}>
          {ele.name}
        </Link>
        </div>;
      })}


        <Link className="loginLink" to="/">
          <button id="loginLink">Log In</button>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
