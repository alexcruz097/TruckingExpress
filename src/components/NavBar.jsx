import React, { useState } from "react";
import logo from "../images/trucking-logo.png";

const NavBar = () => {
  const [navClick, setNavClick] = useState(true);

  // function that will see the state of the toggle menu
  function toggleMenuIcon() {
    setNavClick(!navClick);
  }
const transformLinks = {
  "transform":"translateY(0)"
    }
 // This is style will be added when the navbar is click

  return (
    <section className="nav-bar-content">
      <nav className="nav-bar">
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="nav-links-container" style={navClick ? transformLinks : null}>
          <ul id="links">
            <li>Home</li>
            <li>Trucking Services</li>
            <li>Free Estimate</li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenuIcon}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </nav>
    </section>
  );
};
export default NavBar;
