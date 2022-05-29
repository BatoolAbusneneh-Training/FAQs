import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { data } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../reducer/login";
import { useNavigate } from "react-router-dom";

const NavBar = ({ userId, setUserId }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return { isLoggedIn: state.loginReducer.isLoggedIn };
  });
  const logout = () => {
    state.isLoggedIn = false;
    localStorage.removeItem("token");
    dispatch(logoutUser());
    navigate(`/faqs`);
    setUserId("");
  };
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
          {state.isLoggedIn || userId ? (
            <button className="login" id="loginn" onClick={logout}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={logout}
              >
                Logout
              </Link>
            </button>
          ) : (
            <button className="login" id="loginn">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                LogIn
              </Link>
            </button>
          )}{" "}
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
