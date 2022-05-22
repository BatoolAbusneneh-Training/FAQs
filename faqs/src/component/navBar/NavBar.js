import React, {useState} from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { data } from "./data";

const NavBar = () => {
  const [activeHam, setActiveHam] = useState(false);

  const menuItems = (
    <>
      {data.map((element, index) => {
        return (
          <Link className={element.className} to={element.path}>
            {element.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="navbar-container">
      <nav>
        <div className="nav-container">
          <img className="nav-brand" src="./images/Twenteefore - Logo 2.png" />
          <div className="menu">{menuItems}</div>
          <button className="logout">login</button>
          <button
            className={activeHam ? "hamburger active-hamburger" : "hamburger"}
            onClick={() => setActiveHam(!activeHam)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>

    // <div>
    //   <input type="checkbox" id="hamburger-input" className="burger-shower" />
    //   <label id="hamburger-menu" for="hamburger-input">
    //     <nav id="sidebar-menu">
    //       {data.map((ele, i) => {
    //         return (
    //           <div key={i}>
    //             <ul>
    //               <li>
    //                 <Link id="li" to={ele.path}>
    //                   {ele.name}
    //                 </Link>{" "}
    //                 <br />
    //               </li>
    //             </ul>
    //           </div>
    //         );
    //       })}
    //     </nav>
    //   </label>

    //   <div class="overlay"></div>

    //   <img className="logo" src="./images/Twenteefore - Logo 2.png" />
    //   <div id="navbar">
    //     {data.map((ele, i) => {
    //       return (
    //         <div key={i}>
    //           <Link className={ele.className} to={ele.path}>
    //             {ele.name}
    //           </Link>
    //         </div>
    //       );
    //     })}

    //     <Link className="loginLink" to="/">
    //       <button id="loginLink">Log In</button>
    //     </Link>
    //   </div>
    // </div>
  );
};
export default NavBar;
