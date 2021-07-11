import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-link-home">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="Header__right">
        <NavLink exact to="/signup" className="nav-link">
          Register
        </NavLink>
        <NavLink exact to="/admin" className="nav-link">
          Admin
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
